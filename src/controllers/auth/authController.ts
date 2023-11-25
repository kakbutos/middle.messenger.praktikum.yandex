import { AuthAPI } from '@/api/auth/authApi';
import { SignInData, SignUpData } from '@/types/auth/auth';
import Router from '@/app/router/router';
import store from '@/common/store/store';
import { ProfileApi } from '@/api/user/profileApi';
import { Modal } from '@/components/ui/modal';

class AuthController {
    private api = new AuthAPI();

    async signin(data: SignInData) {
        try {
            await this.api.signin(data);

            await this.fetchUser();

            Router.go('/profile');
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async logout() {
        try {
            await this.api.logout();

            store.set('user', undefined);

            Router.go('/');
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }

    async fetchUser() {
        /* eslint-disable-next-line no-useless-catch */
        try {
            const user = await this.api.getUser();

            store.set('user', user);
        } catch (error) {
            throw error;
        }
    }

    async registerUser(data: SignUpData) {
        try {
            const signUpRes: { id: number } = await this.api.signup(data);
            const userId = signUpRes?.id;

            const profileApi = new ProfileApi();
            const user = await profileApi.getUserById(userId);
            store.set('user', user);

            Router.go('/messenger');
        } catch (error: any & { reason: string }) {
            const modal = new Modal({
                title: error.reason,
                closeIcon: true,
            });
            modal.show();
            /* eslint-disable-next-line no-console */
            console.error(error);
        }
    }
}

export default new AuthController();
