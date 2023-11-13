import { tmpl } from './chatHeader.tmpl';
import Block from '@/common/block/block';
import { Modal } from '@/components/ui/modal';
import { ActionUserChat } from '@/widgets/ui/chat/actionUserChat';

export class ChatHeader extends Block {
    public modal: Modal | undefined;

    constructor(props: any) {
        super({
            ...props,
            events: {
                ...props.events,
                click: (event: MouseEvent) => {
                    const action = document.querySelector('.chat-header__action');
                    const currentEl = event.target as HTMLElement;
                    const isAction = action?.contains(currentEl);

                    if (isAction) {
                        this.modal = new Modal({
                            children: new ActionUserChat({}),
                        });

                        // @ts-ignore
                        this.modal.children.children.setProps({ closeModalAction: this.modal });
                        this.modal.show(currentEl);
                    }
                },
            },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
