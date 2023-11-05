import { API } from '@/common/api/api';
import { ChangeProfileData } from '@/types/profile/profile';

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
}
