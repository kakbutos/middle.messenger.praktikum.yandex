import { tmpl } from './chat-msg.tmpl';
import Block from '../../../../../common/block/Block';

interface Props {
    text: string;
    time: string;
    img: string;
    fromYouMsg: boolean;
}

export class ChatMsg extends Block<Props> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
