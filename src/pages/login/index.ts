import { tmpl } from './login.tmpl';
import { Modal } from '../../components/ui/modal';
import Block from '../../common/block/Block';
import { ModalLoginContent } from '../../widgets/ui/modal-login-content';

export class Login extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.modal = new Modal({
            title: 'Вход',
            children: new ModalLoginContent({}),
            textLink: 'Нет аккаунта?',
            toLink: '/reg',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
