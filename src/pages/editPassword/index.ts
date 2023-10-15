import { tmpl } from './edit-password.tmpl';
import { Input } from '../../components/ui/input';
import { HomeSidebar } from '../../widgets/ui/home-sidebar';
import Block from '../../common/block/Block';
import { Button } from '../../components/ui/button';
import { getFormData } from '../../common/form/getFormData';

export class EditPassword extends Block {
    init() {
        this.children.linkToHome = new HomeSidebar({});
        this.children.oldPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'oldPassword',
        });
        this.children.newPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'newPassword',
        });
        this.children.repeatPassword = new Input({
            type: 'password', classNames: 'input_clear', value: '123', name: 'repeatPassword',
        });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
