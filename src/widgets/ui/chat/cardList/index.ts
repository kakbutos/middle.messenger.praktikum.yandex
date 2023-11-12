import { tmpl } from './cardList.tmpl';
import Block from '@/common/block/block';
import store, { State, withStore } from '@/common/store/store';
import { ChatCard } from '@/widgets/ui/chat/card';

export class cardList extends Block {
    render() {
        const { chats } = store.getState();
        if (chats) {
            this.children.cardList = chats.map((chatItem) => new ChatCard({ ...chatItem }));
        }

        return this.compile(tmpl, this.children);
    }
}

const mapStateToProps = (state: State) => {
    return { chats: state.chats };
};

export const CardList = withStore(mapStateToProps)(cardList);
