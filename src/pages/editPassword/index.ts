import { tmpl } from './edit-password.tmpl';
import { Input } from '../../components/ui/input';
import { HomeSidebar } from '../../widgets/ui/home-sidebar';
import Block from '../../common/block/Block';

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
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
