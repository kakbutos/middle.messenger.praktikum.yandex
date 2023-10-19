import { tmpl } from './errorTemplate.tmpl';
import { Link } from '@/components/ui/link';
import Block from '@/common/block/block';

interface Props {
    error: string;
    text: string;
}

export class ErrorTemplate extends Block<Props> {
    init() {
        this.children.link = new Link({ to: '/chat', text: 'Назад к чатам', classNames: 'link link_blue' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
