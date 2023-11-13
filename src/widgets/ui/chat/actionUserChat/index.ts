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

            if (type === 'add') {
                const actionModal = new ActionModal({
                    name: 'Логин пользователя',
                    action: async (value: string) => {
                        if (value) {
                            // находим по логину id пользователя
                            const userArray = await ProfileController.getUserByLogin({
                                login: value,
                            });
                            // @ts-ignore
                            const user = userArray?.filter((item: User) => item.login === value)[0];
                            // добавляем в чат по айди
                            const state = store.getState();
                            const chatId = state.chats?.activeIdChat;

                            await ChatsController.addUserInChat({
                                users: [user.id],
                                // @ts-ignore
                                chatId,
                            });

                            this.modal?.remove();
                        }
                    },
                });

                this.modal = new Modal({
                    title: 'Добавить пользователя в чат',
                    children: actionModal,
                });

                this.props.closeModalAction.remove();
                this.modal.show();
            }
        };
        super({ ...props, events: { click: action } });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
