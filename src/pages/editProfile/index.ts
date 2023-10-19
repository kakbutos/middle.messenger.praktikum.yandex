import { tmpl } from './editProfile.tmpl';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import {
    emailReg, loginReg, nameReg, phoneReg,
} from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';

export class EditProfile extends Block {
    declare public children: {
		linkToHome: HomeSidebar,
		email: InputWrapper,
		login: InputWrapper,
		firstName: InputWrapper,
		lastName: InputWrapper,
		name: InputWrapper,
		tel: InputWrapper,
		button: Button
	};

    init() {
        this.children.linkToHome = new HomeSidebar({});
        this.children.email = new InputWrapper({
            input: {
                type: 'email', classNames: 'input_clear', placeholder: 'pochta@yandex.ru', value: 'pochta@yandex.ru', name: 'email', checkValidFunc: emailReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.login = new InputWrapper({
            input: {
                type: 'text', classNames: 'input_clear', placeholder: 'ivanivanov', name: 'login', checkValidFunc: loginReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.firstName = new InputWrapper({
            input: {
                type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'first_name', checkValidFunc: nameReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.lastName = new InputWrapper({
            input: {
                type: 'text', classNames: 'input_clear', placeholder: 'Иванов', name: 'second_name', checkValidFunc: nameReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.name = new InputWrapper({
            input: {
                type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'display_name', checkValidFunc: nameReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.tel = new InputWrapper({
            input: {
                type: 'tel', classNames: 'input_clear', placeholder: '+7 (909) 967 30 30', name: 'phone', checkValidFunc: phoneReg,
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
