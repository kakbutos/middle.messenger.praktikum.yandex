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

            store.set('chats', chats);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}

export default new ChatsController();
