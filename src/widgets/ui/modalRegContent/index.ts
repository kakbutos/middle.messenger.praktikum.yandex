import Block from '@/common/block/block';
import { Input } from '@/components/ui/input';
import { tmpl } from './modalRegContent.tmpl';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import {
    emailReg, loginReg, nameReg, passwordReg, phoneReg,
} from '@/common/form/regexp';

export class ModalRegContent extends Block {
    constructor(props = {}) {
        super(props);
    }

    declare public children: {
		address: Input,
		login: Input,
		name: Input,
		lastName: Input,
		tel: Input,
		password: Input,
		passwordRepeat: Input,
		button: Button
	};

    init() {
        const blurAddress = () => this.children.address.checkValid(emailReg);
        const blurLogin = () => this.children.login.checkValid(loginReg);
        const blurName = () => this.children.name.checkValid(nameReg);
        const blurLastName = () => this.children.lastName.checkValid(nameReg);
        const blurTel = () => this.children.tel.checkValid(phoneReg);
        const blurPassword = () => this.children.password.checkValid(passwordReg);
        const blurPasswordRepeat = () => this.children.passwordRepeat.checkValid(passwordReg);

        this.children.address = new Input({
            type: 'email', classNames: 'auth-form__input', name: 'email', events: { blur: blurAddress },
        });
        this.children.login = new Input({
            type: 'text', classNames: `auth-form__input ${this.props.error}`, name: 'login', events: { blur: blurLogin },
        });
        this.children.name = new Input({
            type: 'text', classNames: 'auth-form__input', name: 'first_name', events: { blur: blurName },
        });
        this.children.lastName = new Input({
            type: 'text', classNames: 'auth-form__input', name: 'second_name', events: { blur: blurLastName },
        });
        this.children.tel = new Input({
            type: 'tel', classNames: 'auth-form__input', name: 'phone', events: { blur: blurTel },
        });
        this.children.password = new Input({
            type: 'password', classNames: 'auth-form__input', name: 'password', events: { blur: blurPassword },
        });
        this.children.passwordRepeat = new Input({
            type: 'password', classNames: 'auth-form__input', name: 'repeatPassword', events: { blur: blurPasswordRepeat },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Зарегистрироваться', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
