import { Main } from '../../../pages/main';
import { Profile } from '../../../pages/profile';
import { Chat } from '../../../pages/chat';
import { Reg } from '../../../pages/reg';
import { Login } from '../../../pages/login';
import { serverError } from '../../../pages/errors/serverError';
import { NotFound } from '../../../pages/errors/notFound';
import { editProfile } from '../../../pages/editProfile';
import { editPassword } from '../../../pages/editPassword';

type Routes = Record<string, string>;

export const ROUTES: Routes = {
    '/': Main(),
    '/profile': Profile(),
    '/chat': Chat(),
    '/reg': Reg(),
    '/login': Login(),
    '/serverError': serverError(),
    '/changePassword': editPassword(),
    '/changeProfile': editProfile(),
    '/notFound': NotFound(),
}
