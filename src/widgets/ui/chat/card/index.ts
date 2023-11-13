import { tmpl } from './chatCard.tmpl';
import Block from '@/common/block/block';
import { Chats } from '@/types/chats/chats';
import store from '@/common/store/store';

export class ChatCard extends Block<
	Chats & { events: { click: () => void; }, isActive?: boolean }
> {
    render() {
        const state = store.getState();
        if (state && state.chats && state.chats.activeIdChat) {
            this.props = {
                ...this.props,
                isActive: state.chats.activeIdChat === this.props.id,
            };
        }

        return this.compile(tmpl, this.props);
    }
}
