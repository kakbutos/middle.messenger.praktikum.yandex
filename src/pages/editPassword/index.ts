import { tmpl } from './editPassword.tmpl';
import { Input } from '@/components/ui/input';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import { passwordReg } from '@/common/form/regexp';

export class EditPassword extends Block {
    declare public children: {
		linkToHome: HomeSidebar,
		oldPassword: Input,
		newPassword: Input,
		repeatPassword: Input,
		button: Button
	};

    init() {
        const blurOldPassword = () => this.children.oldPassword.checkValid(passwordReg);
        const blurNewPassword = () => this.children.newPassword.checkValid(passwordReg);
        const blurRepeatPassword = () => this.children.repeatPassword.checkValid(passwordReg);

        this.children.linkToHome = new HomeSidebar({});
        this.children.oldPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'oldPassword', events: { blur: blurOldPassword },
        });
        this.children.newPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'newPassword', events: { blur: blurNewPassword },
        });
        this.children.repeatPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'repeatPassword', events: { blur: blurRepeatPassword },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
