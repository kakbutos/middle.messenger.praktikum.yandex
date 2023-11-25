import { API } from '@/common/api/api';
import { Chats, GetChatsData } from '@/types/chats/chats';
import { ChatsUser } from '@/types/profile/profile';

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

    getUsersFromChat(chatId: number): Promise<ChatsUser[]> {
        return this.http.get(`/${chatId}/users`);
    }

    loadAvatarChat(data: FormData): Promise<Chats> {
        return this.http.put('/avatar', { data });
    }

    deleteChat(data: {chatId: number}) {
        return this.http.delete('', { data });
    }
}
