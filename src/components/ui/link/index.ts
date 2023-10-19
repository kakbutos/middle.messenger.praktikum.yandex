import { tmpl } from './link.tmpl';
import Block from '@/common/block/block';

interface LinkProps {
    classNames?: string;
    to: string;
    text: string;
}

export class Link extends Block<LinkProps> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
