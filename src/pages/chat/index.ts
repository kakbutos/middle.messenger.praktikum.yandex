import { tmpl } from './chat.tmpl';
import { Link } from '@/components/ui/link';
import { Input } from '@/components/ui/input';
import { chatHeader } from '@/widgets/ui/chat/header';
import { ChatInput } from '@/widgets/ui/chat/msg/chatInput';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { ActionModal } from '@/widgets/ui/chat/actionModal';
import ChatsController from '@/controllers/chats/chatsController';
import { State, withStore } from '@/common/store/store';
import { CardList } from '@/widgets/ui/chat/cardList';
import { chatListMsg } from '@/widgets/ui/chat/msg/chatListMsg';

export class Chat extends Block {
    public modal: Modal | undefined;

    async init() {
        const addChat = async (value: unknown) => {
            if (value) {
                await ChatsController.createChat(value as string);
                await ChatsController.getChats({ offset: 0, limit: 15 });

                this.modal?.remove();
            }
        };

        const openPopupForAddChat = () => {
            const actionModal = new ActionModal({
                name: 'Название чата',
                action: addChat,
            });

            this.modal = new Modal({
                title: 'Добавить чат',
                children: actionModal,
                closeIcon: true,
            });

            this.modal.show();
        };

        const loadChats = async () => {
            await ChatsController.getChats({ offset: 0, limit: 15 });
        };

        loadChats().then(() => {});

        this.children.cardList = new CardList({});
        this.children.profileLink = new Link({
            to: '/profile',
            text: 'Профиль',
            classNames: 'link link_gray',
        });

        this.children.searchInput = new Input({
            type: 'text',
            classNames: 'input_gray',
            placeholder: 'Поиск',
            name: 'search',
        });
        this.children.buttonAddChat = new Button({
            text: 'Добавить чат',
            classNames: 'button button_blue button-text_white',
            events: { click: openPopupForAddChat },
        });

        this.children.chatHeader = new chatHeader({});
        this.children.chatList = new chatListMsg({});
        this.children.chatInput = new ChatInput({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { chats: state.chats };
};

export const chat = withStore(mapStateToProps)(Chat);
