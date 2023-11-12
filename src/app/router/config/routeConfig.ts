import { Main } from '@/pages/main';
import { profile } from '@/pages/profile';
import { chat } from '@/pages/chat';
import { Reg } from '@/pages/reg';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/errors/notFound';
import { ServerError } from '@/pages/errors/serverError';
import { editProfile } from '@/pages/editProfile';
import { editPassword } from '@/pages/editPassword';
import Block from '@/common/block/block';
/* eslint-disable */
export enum ROUTES {
	Main = '/',
	Profile = '/profile',
	Chat = '/chats',
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
    Profile: profile,
    Chat: chat,
    Reg,
    Login,
    ServerError,
    EditPassword: editPassword,
    EditProfile: editProfile,
    NotFound,
};
