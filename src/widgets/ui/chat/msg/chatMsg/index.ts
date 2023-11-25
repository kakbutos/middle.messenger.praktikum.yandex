import { tmpl } from './chatMsg.tmpl';
import Block from '@/common/block/block';
import store, { State, withStore } from '@/common/store/store';
import { getTime } from '@/common/helpers/date';

class ChatMsg extends Block {
    render() {
        const { user } = store.getState();

        this.props = {
            ...this.props,
            time: getTime(this.props.time),
            isTo: this.props.user_id === user?.id,
        };

        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { messages: state.chats?.messages };
};

export const chatMsg = withStore(mapStateToProps)(ChatMsg);
