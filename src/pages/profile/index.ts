import { tmpl } from './profile.tmpl';
import { Link } from '@/components/ui/link';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';

export class Profile extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.changeProfile = new Link({ text: 'Изменить данные', to: '/changeProfile', classNames: 'link link_blue' });
        this.children.changePassword = new Link({ text: 'Изменить пароль', to: '/changePassword', classNames: 'link link_blue' });
        this.children.logout = new Link({ text: 'Выйти', to: '#', classNames: 'link link_red' });
        this.children.linkToHome = new HomeSidebar({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
