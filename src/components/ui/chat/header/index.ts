import { tmpl } from './chat-header.tmpl';
import Block from '../../../../common/block/Block';

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
