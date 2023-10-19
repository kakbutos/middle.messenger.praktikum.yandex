import { tmpl } from './chatHeader.tmpl';
import Block from '@/common/block/block';

interface Props {
    icon: string;
    name: string;
    iconName: string;
}

export class ChatHeader extends Block<Props> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
