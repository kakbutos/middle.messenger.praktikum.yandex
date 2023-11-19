import { tmpl } from './chatCard.tmpl';
import Block from '@/common/block/block';
import store, { State, withStore } from '@/common/store/store';
import { getTime } from '@/common/helpers/date';

export class ChatCard extends Block {
    render() {
        const state = store.getState();

        if (state && state.chats) {
            this.props = {
                ...this.props,
                isActive: state.chats.activeIdChat === this.props.id,
                last_message: {
                    ...this.props?.last_message,
                    time: this.props?.last_message?.time ? getTime(this.props?.last_message?.time) : '',
                },
            };
        }

        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { chats: state.chats };
};

export const chatCard = withStore(mapStateToProps)(ChatCard);
