import { tmpl } from './home-sidebar.tmpl';
import { Link } from '../../../components/ui/link';
import Block from '../../../common/block/Block';

export class HomeSidebar extends Block {
    init() {
        this.children.linkToHome = new Link({ text: 'Вернуться', to: '/chat', classNames: 'link link_blue' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
