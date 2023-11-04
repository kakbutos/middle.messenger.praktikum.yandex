import { AuthAPI } from '@/api/auth/authApi';
import { SignInData, SignUpData } from '@/types/auth/auth';
import Router from '@/app/router/router';
import store from '@/common/store/store';

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

    async signup(data: SignUpData) {
        try {
            await this.api.signup(data);

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
}

export default new AuthController();
