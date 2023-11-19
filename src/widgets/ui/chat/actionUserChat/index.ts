import { tmpl } from './actionUserChat.tmpl';
import Block from '@/common/block/block';
import { Chats } from '@/types/chats/chats';
import { ActionModal } from '@/widgets/ui/chat/actionModal';
import { Modal } from '@/components/ui/modal';
import ProfileController from '@/controllers/user/profileController';
import { User } from '@/types/auth/auth';
import store from '@/common/store/store';
import ChatsController from '@/controllers/chats/chatsController';

export class ActionUserChat extends Block<
	Chats & { events: { click: () => void; }, closeModalAction: Modal }
> {
    public modal: Modal | undefined;

    constructor(props: any) {
        const action = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            const type = el.getAttribute('data-type');
            const typeRemove = type === 'remove';

            const actionModal = new ActionModal({
                name: 'Логин пользователя',
                action: async (value: string) => {
                    if (value) {
                        // находим по логину id пользователя
                        const userArray = await ProfileController.getUserByLogin({
                            login: value,
                        }) as User[];

                        const user = userArray?.filter((item: User) => item.login === value)[0];
                        // добавляем в чат по айди
                        const state = store.getState();
                        const chatId = state.chats?.activeIdChat;

                        if (!chatId) {
                            return;
                        }

                        const data = {
                            users: [user.id],
                            chatId,
                        };

                        if (typeRemove) {
                            await ChatsController.removeUserFromChat(data);
                        } else {
                            await ChatsController.addUserInChat(data);
                            await ChatsController.getUsersFromChat();
                        }

                        this.modal?.remove();
                    }
                },
            });

            this.modal = new Modal({
                title: typeRemove ? 'Удалить пользователя из чата' : 'Добавить пользователя в чат',
                children: actionModal,
                closeIcon: true,
            });

            this.props.closeModalAction.remove();
            this.modal.show();
        };
        super({ ...props, events: { click: action } });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
