import Block from '../../../common/block/Block';
import { Input } from '../../../components/ui/input';
import { tmpl } from './modal-login-content.tmpl';

export class ModalLoginContent extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.loginInput = new Input({ type: 'text', classNames: 'auth-form__input', name: 'login' });
        this.children.passwordInput = new Input({ type: 'password', classNames: 'auth-form__input', name: 'password' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
