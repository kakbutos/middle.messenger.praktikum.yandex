import { API } from '@/common/api/api';
import { ChangePasswordData, ChangeProfileData } from '@/types/profile/profile';
import { User } from '@/types/auth/auth';

export class ProfileApi extends API {
    constructor() {
        super('/user');
    }

    changeProfile(data: ChangeProfileData) {
        return this.http.put('/profile', { data });
    }

    changeAvatar(data: FormData) {
        return this.http.put('/profile/avatar', { data });
    }

    changePassword(data: ChangePasswordData) {
        return this.http.put('/password', { data });
    }

    getUserById(id: number): Promise<User> {
        return this.http.get(`/${id}`);
    }

    getUserByLogin(data: { login: string }): Promise<User> {
        return this.http.post('/search', { data });
    }
}
