import Block from '@/common/block/block';
import { tmpl } from './modalLoginContent.tmpl';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import { loginReg, passwordReg } from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';

export class ModalLoginContent extends Block {
    declare public children: {
		loginInput: InputWrapper,
		passwordInput: InputWrapper,
		button: Button
	};

    init() {
        this.children.loginInput = new InputWrapper({
            input: {
                type: 'text', classNames: 'auth-form__input', name: 'login', checkValidFunc: loginReg,
            },
        });
        this.children.passwordInput = new InputWrapper({
            input: {
                type: 'password', classNames: 'auth-form__input', name: 'password', checkValidFunc: passwordReg,
            },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Войти', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
