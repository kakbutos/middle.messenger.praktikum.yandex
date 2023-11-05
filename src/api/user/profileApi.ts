import { API } from '@/common/api/api';
import { ChangePasswordData, ChangeProfileData } from '@/types/profile/profile';

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
}
