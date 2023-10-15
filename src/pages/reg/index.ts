import { tmpl } from './reg.tmpl';
import { Modal } from '../../components/ui/modal';
import Block from '../../common/block/Block';
import { ModalRegContent } from '../../widgets/ui/modal-reg-content';

export class Reg extends Block {
    constructor(props = {}) {
        super(props);
    }

    init() {
        this.children.modal = new Modal({
            title: 'Регистрация',
            children: new ModalRegContent({}),
            textLink: 'Войти',
            toLink: '/login',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
