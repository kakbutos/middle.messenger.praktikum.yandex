import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import { EventBus } from '@/common/eventBus/eventBus';

// Нельзя создавать экземпляр данного класса
class Block<P extends Record<string, any> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;

    public id = nanoid(6);

    protected props: P;

    private oldProps = { events: {} };

    /* eslint-disable-next-line no-use-before-define */
    public children: Record<string, Block | Block[]>;

    private eventBus: () => EventBus;

    private _element: HTMLElement | null = null;

    constructor(propsWithChildren: P) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(propsWithChildren || {});

        this.children = children;
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: P): {
		props: P,
		children: Record<string, Block | Block[]>
	} {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block | Block[]> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (Array.isArray(value) && value.every((item) => item instanceof Block)) {
                children[key as string] = value;
            } else if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        });

        return { props: props as P, children };
    }

    _addEvents() {
        const { events = {} } = this.props as P & { events: Record<string, () => void> };

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this.oldProps as P & { events: Record<string, () => void> };

        Object.keys(events).forEach((eventName) => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });

        this.oldProps.events = this.props.events;
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((block) => block.dispatchComponentDidMount());
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    private _componentDidUpdate(oldProps: P, newProps: P) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: P, newProps: P) {
        this.oldProps.events = oldProps.events;

        return oldProps !== newProps;
    }

    setProps = (nextProps: P) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();
        const htmlElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(htmlElement);
        }

        this._element = htmlElement;

        this._addEvents();
    }

    protected compile(template: string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component.map((child) => `<div data-id="${child.id}"></div>`);
            } else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });

        const html = Handlebars.compile(template)(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        const replaceStub = (component: Block) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }

            component.getContent()?.append(...Array.from(stub.childNodes));

            stub.replaceWith(component.getContent()!);
        };

        /* eslint-disable-next-line no-unused-vars */
        Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
                component.forEach((comp) => replaceStub(comp));
            } else {
                replaceStub(component);
            }
        });

        return temp.content;
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: P) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];

                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                const oldTarget = { ...target };
                /* eslint-disable-next-line no-param-reassign */
                target[prop as keyof P] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    show() {
		this.getContent()!.style.display = 'block';
    }

    hide() {
		this.getContent()!.style.display = 'none';
    }
}

export default Block;
