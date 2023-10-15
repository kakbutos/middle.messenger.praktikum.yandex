import { Main } from '../../../pages/main';
import { Profile } from '../../../pages/profile';
import { Chat } from '../../../pages/chat';
import { Reg } from '../../../pages/reg';
import { Login } from '../../../pages/login';
import { NotFound } from '../../../pages/errors/notFound';
import { ServerError } from '../../../pages/errors/serverError';
import { EditProfile } from '../../../pages/editProfile';
import { EditPassword } from '../../../pages/editPassword';
import Block from '../../../common/block/Block';

type Routes = Record<string, Block>;

export const ROUTES: Routes = {
    '/': new Main(),
    '/profile': new Profile(),
    '/chat': new Chat({}),
    '/reg': new Reg(),
    '/login': new Login(),
    '/serverError': new ServerError(),
    '/changePassword': new EditPassword({}),
    '/changeProfile': new EditProfile({}),
    '/notFound': new NotFound(),
};
