import { tmpl } from './login.tmpl';
import { Modal } from '@/components/ui/modal';
import Block from '@/common/block/block';
import { ModalLoginContent } from '@/widgets/ui/modalLoginContent';

export class Login extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.modal = new Modal({
            title: 'Вход',
            children: new ModalLoginContent({}),
            textLink: 'Нет аккаунта?',
            toLink: '/sign-up',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
