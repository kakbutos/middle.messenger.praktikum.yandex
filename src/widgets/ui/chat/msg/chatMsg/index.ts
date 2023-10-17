import { tmpl } from './chatMsg.tmpl';
import Block from '@/common/block/block';

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
