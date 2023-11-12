import { tmpl } from './chatCard.tmpl';
import Block from '@/common/block/block';
import { Chats } from '@/types/chats/chats';

export class ChatCard extends Block<Chats> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
