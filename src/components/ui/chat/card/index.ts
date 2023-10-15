import { tmpl } from './chat-card.tmpl';
import Block from '../../../../common/block/Block';

interface Props {
    icon: string;
    name: string;
    text: string;
    time: string;
    countMsg: string;
}

export class ChatCard extends Block<Props> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
