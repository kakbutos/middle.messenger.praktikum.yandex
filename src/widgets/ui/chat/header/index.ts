import { tmpl } from './chatHeader.tmpl';
import Block from '@/common/block/block';
import { Modal } from '@/components/ui/modal';
import { ActionUserChat } from '@/widgets/ui/chat/actionUserChat';
import { State, withStore } from '@/common/store/store';
import { Images } from '@/components/ui/images';

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
                            closeIcon: true,
                        });

                        const block = this.modal.children.children as Block;
                        block.setProps({ closeModalAction: this.modal });
                        this.modal.show(currentEl);
                    }
                },
            },
        });
    }

    init() {
        this.children.avatarImgHeader = new Images({
            path: this.props.user.avatar,
            alt: 'avatar',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return {
        user: state.user,
        chatUsers: state.chats?.chatUsers,
    };
};

export const chatHeader = withStore(mapStateToProps)(ChatHeader);
