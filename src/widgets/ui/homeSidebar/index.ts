import { tmpl } from './homeSidebar.tmpl';
import { Link } from '@/components/ui/link';
import Block from '@/common/block/block';

export class HomeSidebar extends Block {
    init() {
        this.children.linkToHome = new Link({
            text: 'Вернуться',
            to: '/messenger',
            classNames: 'link link_blue',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
