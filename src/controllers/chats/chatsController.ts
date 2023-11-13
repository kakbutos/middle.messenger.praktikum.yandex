import { ChatsApi } from '@/api/chats/chatsApi';
import { GetChatsData } from '@/types/chats/chats';
import store from '@/common/store/store';

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
}

export default new ChatsController();
