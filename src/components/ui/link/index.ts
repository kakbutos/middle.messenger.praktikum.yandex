import { tmpl } from './link.tmpl';
import Block from '@/common/block/block';
import Router from '@/app/router/router';

interface LinkProps {
    classNames?: string;
    to?: string;
    text: string;
	events?: {
		click?: (...args: any) => void;
	};
}

export class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super({
            ...props,
            events: {
                ...props.events,
                click: (event) => {
                    event.preventDefault();

                    if (props.events && props.events.click) {
                        props.events.click();
                    }

                    if (props.to) {
                        Router.go(props.to);
                    }
                },
            },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
