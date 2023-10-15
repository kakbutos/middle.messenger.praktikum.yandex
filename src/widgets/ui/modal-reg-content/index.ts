import Block from '../../../common/block/Block';
import { Input } from '../../../components/ui/input';
import { tmpl } from './modal-reg-content.tmpl';

export class ModalRegContent extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.address = new Input({ type: 'email', classNames: 'auth-form__input', name: 'email' });
        this.children.login = new Input({ type: 'text', classNames: 'auth-form__input', name: 'login' });
        this.children.name = new Input({ type: 'text', classNames: 'auth-form__input', name: 'first_name' });
        this.children.lastName = new Input({ type: 'text', classNames: 'auth-form__input', name: 'second_name' });
        this.children.tel = new Input({ type: 'tel', classNames: 'auth-form__input', name: 'phone' });
        this.children.password = new Input({ type: 'password', classNames: 'auth-form__input', name: 'password' });
        this.children.passwordRepeat = new Input({ type: 'password', classNames: 'auth-form__input', name: 'repeatPassword' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
