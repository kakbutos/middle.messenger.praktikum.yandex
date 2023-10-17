import { tmpl } from './editProfile.tmpl';
import { Input } from '@/components/ui/input';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import {
    emailReg, loginReg, nameReg, phoneReg,
} from '@/common/form/regexp';

export class EditProfile extends Block {
    declare public children: {
		linkToHome: HomeSidebar,
		email: Input,
		login: Input,
		firstName: Input,
		lastName: Input,
		name: Input,
		tel: Input,
		button: Button
	};

    init() {
        const blurEmail = () => this.children.email.checkValid(emailReg);
        const blurLogin = () => this.children.login.checkValid(loginReg);
        const blurFirstName = () => this.children.firstName.checkValid(nameReg);
        const blurLastName = () => this.children.lastName.checkValid(nameReg);
        const blurName = () => this.children.name.checkValid(nameReg);
        const blurTel = () => this.children.tel.checkValid(phoneReg);

        this.children.linkToHome = new HomeSidebar({});
        this.children.email = new Input({
            type: 'email', classNames: 'input_clear', placeholder: 'pochta@yandex.ru', value: 'pochta@yandex.ru', name: 'email', events: { blur: blurEmail },
        });
        this.children.login = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'ivanivanov', name: 'login', events: { blur: blurLogin },
        });
        this.children.firstName = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'first_name', events: { blur: blurFirstName },
        });
        this.children.lastName = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иванов', name: 'second_name', events: { blur: blurLastName },
        });
        this.children.name = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'display_name', events: { blur: blurName },
        });
        this.children.tel = new Input({
            type: 'tel', classNames: 'input_clear', placeholder: '+7 (909) 967 30 30', name: 'phone', events: { blur: blurTel },
        });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
