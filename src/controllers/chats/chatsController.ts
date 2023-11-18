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

            store.set('chats.list', chats);
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

            await this.getToken(chatId);
            const token = chats?.token;

            const WSClient = new ChatWS(
                `${WS_CHATS_URL}/${userId}/${chatId}/${token}`,
            );

            store.set('chats.chatSocket', WSClient);

            await WSClient.connect();
            WSClient.getMessages('0');
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}

export default new ChatsController();
