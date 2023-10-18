import { tmpl } from './editPassword.tmpl';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import { passwordReg } from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';

export class EditPassword extends Block {
    declare public children: {
		linkToHome: HomeSidebar,
		oldPassword: InputWrapper,
		newPassword: InputWrapper,
		repeatPassword: InputWrapper,
		button: Button
	};

    init() {
        this.children.linkToHome = new HomeSidebar({});
        this.children.oldPassword = new InputWrapper({
            input: {
                type: 'password', classNames: 'input_clear', value: '123', name: 'oldPassword', checkValidFunc: passwordReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.newPassword = new InputWrapper({
            input: {
                type: 'password', classNames: 'input_clear', value: '123', name: 'newPassword', checkValidFunc: passwordReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.repeatPassword = new InputWrapper({
            input: {
                type: 'password', classNames: 'input_clear', value: '123', name: 'repeatPassword', checkValidFunc: passwordReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
