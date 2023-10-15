import { tmpl } from './edit-profile.tmpl';
import { Input } from '../../components/ui/input';
import { HomeSidebar } from '../../widgets/ui/home-sidebar';
import Block from '../../common/block/Block';
import { Button } from '../../components/ui/button';
import { getFormData } from '../../common/form/getFormData';

export class EditProfile extends Block {
    init() {
        this.children.linkToHome = new HomeSidebar({});
        this.children.email = new Input({
            type: 'email', classNames: 'input_clear', placeholder: 'pochta@yandex.ru', value: 'pochta@yandex.ru', name: 'email',
        });
        this.children.login = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'ivanivanov', name: 'login',
        });
        this.children.firstName = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'first_name',
        });
        this.children.lastName = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иванов', name: 'second_name',
        });
        this.children.name = new Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'display_name',
        });
        this.children.tel = new Input({
            type: 'tel', classNames: 'input_clear', placeholder: '+7 (909) 967 30 30', name: 'phone',
        });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
