import { ChatsApi } from '@/api/chats/chatsApi';
import { GetChatsData } from '@/types/chats/chats';
import store from '@/common/store/store';
import { ChatWS } from '@/api/chats/chatWebsocket';
import { WS_CHATS_URL } from '@/app/global';

class ChatsController {
    private api = new ChatsApi();

    async createChat(title: string) {
        try {
            await this.api.createChats({ title });
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async getChats(data: GetChatsData) {
        try {
            const chats = await this.api.getChats(data);

            store.set('chats.list', chats, true);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async addUserInChat(data: { users: number[], chatId: number }) {
        try {
            await this.api.addUserInChat(data);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async removeUserFromChat(data: { users: number[], chatId: number }) {
        try {
            await this.api.removeUserFromChat(data);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async getUsersFromChat() {
        const { chats } = store.getState();
        const chatId = chats?.activeIdChat;

        try {
            if (chatId) {
                const chatsUser = await this.api.getUsersFromChat(chatId);
                store.set('chats.chatUsers', chatsUser, true);
            }
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async getToken(id?: number) {
        if (!id) {
            return;
        }

        try {
            const { token } = await this.api.getToken(id);
            store.set('chats.token', token);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async initChat() {
        try {
            const { user, chats } = store.getState();

            const userId = user?.id;
            const chatId = chats?.activeIdChat;

            if (chats?.chatSocket !== null) {
                chats?.chatSocket?.close();
            }

            await this.getToken(chatId);
            const token = chats?.token;

            const WSClient = new ChatWS(
                `${WS_CHATS_URL}/${userId}/${chatId}/${token}`,
            );

            await WSClient.connect();
            store.set('chats.chatSocket', WSClient, true);

            WSClient.getMessages('0');
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async loadAvatarChat(data: FormData) {
        try {
            const chatItem = await this.api.loadAvatarChat(data);
            const { chats } = store.getState();
            const list = chats?.list.map((item) => {
                if (chats?.activeIdChat === item.id) {
                    return { ...item, ...chatItem };
                }
                return item;
            });

            store.set('chats.list', list);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async deleteChat(data: {chatId: number}) {
        try {
            await this.api.deleteChat(data);
            const { chats } = store.getState();
            const list = chats?.list.filter((item) => item.id !== data.chatId);
            store.set('chats.list', list, true);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}

export default new ChatsController();
