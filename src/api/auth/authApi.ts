import { API } from '@/common/api/api';
import { SignInData, SignUpData, User } from '@/types/auth/auth';

export class AuthAPI extends API {
    constructor() {
        super('/auth');
    }

    signin(data: SignInData): Promise<void> {
        return this.http.post('/signin', { data });
    }

    signup(data: SignUpData): Promise<{id: number}> {
        return this.http.post('/signup', { data });
    }

    logout(): Promise<void> {
        return this.http.post('/logout');
    }

    getUser(): Promise<User> {
        return this.http.get('/user');
    }
}
