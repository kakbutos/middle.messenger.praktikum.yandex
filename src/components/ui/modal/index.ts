import { tmpl } from './modal.tmpl';
import { Link } from '@/components/ui/link';
import Block from '@/common/block/block';

interface LinkProps {
    title?: string;
    children?: string | Block;
    textLink?: string;
    toLink?: string;
    classNames?: string;
}

export class Modal extends Block<LinkProps> {
    init() {
        if (this.props.toLink) {
            this.children.LinkElement = new Link({
                to: this.props.toLink || '',
                text: this.props.textLink || '',
                classNames: 'link link_blue',
            });
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    show(element?: HTMLElement) {
        const content = this.getContent() as HTMLElement;
        if (element && content) {
            const rect = element.getBoundingClientRect();

            content.style.transform = 'none';
            content.style.left = `${rect.left - 340 + rect.width}px`;
            content.style.top = `${rect.top + rect.height}px`;
        }

        document.body.appendChild(content);
    }

    remove() {
        this.getContent()?.remove();
    }
}
