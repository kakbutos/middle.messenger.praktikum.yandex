import Block from '@/common/block/block';
import { Input } from '@/components/ui/input';
import { tmpl } from './modalLoginContent.tmpl';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import { loginReg, passwordReg } from '@/common/form/regexp';

export class ModalLoginContent extends Block {
    declare public children: {
		loginInput: Input,
		passwordInput: Input,
		button: Button
	};

    init() {
        const blurLoginInput = () => this.children.loginInput.checkValid(loginReg);
        const blurPasswordInput = () => this.children.passwordInput.checkValid(passwordReg);

        this.children.loginInput = new Input({
            type: 'text', classNames: 'auth-form__input', name: 'login', events: { blur: blurLoginInput },
        });
        this.children.passwordInput = new Input({
            type: 'password', classNames: 'auth-form__input', name: 'password', events: { blur: blurPasswordInput },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Войти', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
