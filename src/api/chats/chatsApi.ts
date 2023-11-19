import { API } from '@/common/api/api';
import { Chats, GetChatsData } from '@/types/chats/chats';

export class ChatsApi extends API {
    constructor() {
        super('/chats');
    }

    getChats(data: GetChatsData): Promise<Chats[]> {
        return this.http.get('', { data });
    }

    createChats(data: { title: string }): Promise<{ id: number }> {
        return this.http.post('', { data });
    }

    addUserInChat(data: { users: number[], chatId: number }) {
        return this.http.put('/users', { data });
    }

    removeUserFromChat(data: { users: number[], chatId: number }) {
        return this.http.delete('/users', { data });
    }

    getToken(id: number): Promise<{ token: string }> {
        return this.http.post(`/token/${id}`);
    }
}