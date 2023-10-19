import { Main } from '@/pages/main';
import { Profile } from '@/pages/profile';
import { Chat } from '@/pages/chat';
import { Reg } from '@/pages/reg';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/errors/notFound';
import { ServerError } from '@/pages/errors/serverError';
import { EditProfile } from '@/pages/editProfile';
import { EditPassword } from '@/pages/editPassword';

type Routes = Record<string, any>;

export const ROUTES: Routes = {
    '/': Main,
    '/profile': Profile,
    '/chat': Chat,
    '/reg': Reg,
    '/login': Login,
    '/serverError': ServerError,
    '/changePassword': EditPassword,
    '/changeProfile': EditProfile,
    '/notFound': NotFound,
};
