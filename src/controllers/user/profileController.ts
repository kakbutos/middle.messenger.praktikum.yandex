import { ProfileApi } from '@/api/user/profileApi';
import { ChangeProfileData } from '@/types/profile/profile';
import store from '@/common/store/store';

class ProfileController {
    private api = new ProfileApi();

    async changeAvatar(data: FormData) {
        try {
            const user = await this.api.changeAvatar(data);
            store.set('user', user);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async changeProfile(data: ChangeProfileData) {
        try {
            await this.api.changeProfile(data);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}

export default new ProfileController();
