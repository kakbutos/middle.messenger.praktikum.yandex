import { tmpl } from './cardList.tmpl';
import Block from '@/common/block/block';
import store, { State, withStore } from '@/common/store/store';
import { ChatCard } from '@/widgets/ui/chat/card';

export class cardList extends Block {
    render() {
        const changeChat = (id: number) => store.set('chats.activeIdChat', id);
        const { chats } = store.getState();
        if (chats && chats.list) {
            this.children.cardList = chats.list.map((chatItem) => new ChatCard({
                ...chatItem,
                events: { click: () => changeChat(chatItem.id) },
            }));
        }

        return this.compile(tmpl, this.children);
    }
}

const mapStateToProps = (state: State) => {
    return { chats: state.chats };
};

export const CardList = withStore(mapStateToProps)(cardList);
