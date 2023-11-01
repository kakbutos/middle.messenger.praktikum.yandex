import { Main } from '@/pages/main';
import { Profile } from '@/pages/profile';
import { Chat } from '@/pages/chat';
import { Reg } from '@/pages/reg';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/errors/notFound';
import { ServerError } from '@/pages/errors/serverError';
import { EditProfile } from '@/pages/editProfile';
import { EditPassword } from '@/pages/editPassword';
import Block from '@/common/block/block';
/* eslint-disable */
export enum ROUTES {
	Main = '/',
	Profile = '/profile',
	Chat = '/chat',
	Reg = '/reg',
	Login = '/login',
	ServerError = '/serverError',
	EditPassword = '/changePassword',
	EditProfile = '/changeProfile',
	NotFound = '/notFound',
}
/* eslint-enable */

export const RoutesBlocks: Record<string, typeof Block> = {
    Main,
    Profile,
    Chat,
    Reg,
    Login,
    ServerError,
    EditPassword,
    EditProfile,
    NotFound,
};
