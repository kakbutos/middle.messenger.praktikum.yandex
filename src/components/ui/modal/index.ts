import { tmpl } from './modal.tmpl';
import { Link } from '@/components/ui/link';
import Block from '@/common/block/block';

interface LinkProps {
    title?: string;
    children?: string | Block;
    textLink: string;
    toLink: string;
    classNames?: string;
}

export class Modal extends Block<LinkProps> {
    init() {
        this.children.LinkElement = new Link({
            to: this.props.toLink,
            text: this.props.textLink,
            classNames: 'link link_blue',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
