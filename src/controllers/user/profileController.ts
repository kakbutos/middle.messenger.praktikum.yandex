import { ProfileApi } from '@/api/user/profileApi';
import { ChangePasswordData, ChangeProfileData } from '@/types/profile/profile';
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
            const user = await this.api.changeProfile(data);

            store.set('user', user);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async changePassword(data: ChangePasswordData) {
        try {
            await this.api.changePassword(data);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async getUserByLogin(data: { login: string }) {
        try {
            return await this.api.getUserByLogin(data);
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
            return [];
        }
    }
}

export default new ProfileController();
