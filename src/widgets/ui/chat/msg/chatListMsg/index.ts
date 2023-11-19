import { tmpl } from './chatListMsg.tmpl';
import Block from '@/common/block/block';
import store, { State, withStore } from '@/common/store/store';
import { chatMsg } from '@/widgets/ui/chat/msg/chatMsg';

class ChatListMsg extends Block {
    render() {
        const { chats } = store.getState();
        if (chats && chats.messages) {
            this.children.chatListMsg = chats.messages.map((chatItem) => new chatMsg({
                ...chatItem,
            }));
        }

        return this.compile(tmpl, { ...this.children, isEmpty: !chats?.activeIdChat });
    }
}

const mapStateToProps = (state: State) => {
    return {
        messages: state.chats?.messages,
    };
};

export const chatListMsg = withStore(mapStateToProps)(ChatListMsg);
