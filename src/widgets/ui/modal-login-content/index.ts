import Block from '../../../common/block/Block';
import { Input } from '../../../components/ui/input';
import { tmpl } from './modal-login-content.tmpl';
import { Button } from '../../../components/ui/button';
import { getFormData } from '../../../common/form/getFormData';

export class ModalLoginContent extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.loginInput = new Input({ type: 'text', classNames: 'auth-form__input', name: 'login' });
        this.children.passwordInput = new Input({ type: 'password', classNames: 'auth-form__input', name: 'password' });
        this.children.button = new Button({
            type: 'submit', text: 'Войти', classNames: 'button button_blue button-text_white', events: { click: getFormData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
