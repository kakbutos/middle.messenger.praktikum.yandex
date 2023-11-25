import { ChatWS } from '@/api/chats/chatWebsocket';
import { ChatsUser } from '@/types/profile/profile';

export interface GetChatsData {
	offset: number;
	limit: number;
	title?: string;
}

export interface LastMessage {
	user: {
		first_name: string;
		second_name: string;
		avatar: string;
		email: string;
		login: string;
		phone: string;
	},
	time: string;
	content: string;
}

export interface MessageContent {
	chat_id: number;
	content: string;
	file: object | null;
	id: number;
	is_read: boolean;
	time: string;
	type: string;
	user_id: number;
}

export interface Chats {
	id: number;
	title: string;
	avatar?: string;
	created_by: number;
	unread_count: number;
	last_message: LastMessage;
}

export interface ChatsStore {
	list: Chats[];
	activeIdChat?: number;
	token?: string;
	messages?: MessageContent[];
	chatSocket?: ChatWS;
	chatUsers?: ChatsUser[];
}
