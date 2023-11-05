export interface ChangeProfileData {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
}

export interface ChangePasswordData {
	oldPassword: string;
	newPassword: string;
}
