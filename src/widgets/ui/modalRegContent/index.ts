import Block from '@/common/block/block';
import { tmpl } from './modalRegContent.tmpl';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import {
    emailReg, loginReg, nameReg, passwordReg, phoneReg,
} from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';

export class ModalRegContent extends Block {
    constructor(props = {}) {
        super(props);
    }

    declare public children: {
		address: InputWrapper,
		login: InputWrapper,
		name: InputWrapper,
		lastName: InputWrapper,
		tel: InputWrapper,
		password: InputWrapper,
		passwordRepeat: InputWrapper,
		button: Button
	};

    init() {
        this.children.address = new InputWrapper({
            input: {
                type: 'email', classNames: 'auth-form__input', name: 'email', checkValidFunc: emailReg,
            },
        });
        this.children.login = new InputWrapper({
            input: {
                type: 'text', classNames: 'auth-form__input', name: 'login', checkValidFunc: loginReg,
            },
        });
        this.children.name = new InputWrapper({
            input: {
                type: 'text', classNames: 'auth-form__input', name: 'first_name', checkValidFunc: nameReg,
            },
        });
        this.children.lastName = new InputWrapper({
            input: {
                type: 'text', classNames: 'auth-form__input', name: 'second_name', checkValidFunc: nameReg,
            },
        });
        this.children.tel = new InputWrapper({
            input: {
                type: 'tel', classNames: 'auth-form__input', name: 'phone', checkValidFunc: phoneReg,
            },
        });
        this.children.password = new InputWrapper({
            input: {
                type: 'password', classNames: 'auth-form__input', name: 'password', checkValidFunc: passwordReg,
            },
        });
        this.children.passwordRepeat = new InputWrapper({
            input: {
                type: 'password', classNames: 'auth-form__input', name: 'repeatPassword', checkValidFunc: passwordReg,
            },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Зарегистрироваться', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
