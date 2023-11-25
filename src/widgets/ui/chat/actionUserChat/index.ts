import { tmpl } from './actionUserChat.tmpl';
import Block from '@/common/block/block';
import { Chats } from '@/types/chats/chats';
import { ActionModal } from '@/widgets/ui/chat/actionModal';
import { Modal } from '@/components/ui/modal';
import ProfileController from '@/controllers/user/profileController';
import { User } from '@/types/auth/auth';
import store from '@/common/store/store';
import ChatsController from '@/controllers/chats/chatsController';
import { getFormData } from '@/common/form/getFormData';

export class ActionUserChat extends Block<
	Chats & { events: { click: () => void; }, closeModalAction: Modal }
> {
    public modal: Modal | undefined;

    constructor(props: any) {
        const state = store.getState();
        const chatId = state.chats?.activeIdChat;

        const action = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            const type = el.getAttribute('data-type');

            // добавление и удалене пользователя
            const actionModal = new ActionModal({
                name: 'Логин пользователя',
                action: async (value) => {
                    if (value) {
                        // находим по логину id пользователя
                        const userArray = await ProfileController.getUserByLogin({
                            login: value as string,
                        }) as User[];

                        const user = userArray?.filter((item: User) => item.login === value)[0];

                        if (!chatId) {
                            return;
                        }

                        const data = {
                            users: [user.id],
                            chatId,
                        };

                        if (type === 'delete-user') {
                            await ChatsController.removeUserFromChat(data);
                        } else if (type === 'add-user') {
                            await ChatsController.addUserInChat(data);
                            await ChatsController.getUsersFromChat();
                        }

                        this.modal?.remove();
                    }
                },
            });

            // загрузка аватарки
            const actionModalLoadAvatar = new ActionModal({
                action: async (event) => {
                    const data = getFormData<Record<string, File>>(event as MouseEvent);

                    if (data && data.add && chatId) {
                        const formData = new FormData();
                        formData.append('avatar', data.add as File);
                        formData.append('chatId', chatId as unknown as Blob);

                        await ChatsController.loadAvatarChat(formData);
                    }

                    this.modal?.remove();
                },
                typeInput: 'file',
                btnName: 'Загрузить',
            });

            const actionModalDeleteChat = new ActionModal({
                action: async () => {
                    if (chatId) {
                        await ChatsController.deleteChat({ chatId });
                    }

                    this.modal?.remove();
                },
                btnName: 'Удалить',
                hideInput: true,
            });

            let childrenItem;
            let titleItem;

            switch (type) {
            case 'add-user':
                childrenItem = actionModal;
                titleItem = 'Добавить пользователя';
                break;
            case 'delete-user':
                childrenItem = actionModal;
                titleItem = 'Удалить пользователя';
                break;
            case 'load-avatar':
                childrenItem = actionModalLoadAvatar;
                titleItem = 'Загрузить аватарку';
                break;
            case 'delete-chat':
                childrenItem = actionModalDeleteChat;
                titleItem = 'Удалить текущий чат';
                break;
            default:
                break;
            }

            this.modal = new Modal({
                title: titleItem,
                children: childrenItem,
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
