import { tmpl } from './chatCard.tmpl';
import Block from '@/common/block/block';

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
