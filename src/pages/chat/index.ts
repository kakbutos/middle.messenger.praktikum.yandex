import { tmpl } from './chat.tmpl';
import { Link } from '@/components/ui/link';
import { Input } from '@/components/ui/input';
import { ChatCard } from '@/widgets/ui/chat/card';
import { ChatHeader } from '@/widgets/ui/chat/header';
import { ChatMsg } from '@/widgets/ui/chat/msg/chatMsg';
import { ChatInput } from '@/widgets/ui/chat/msg/chatInput';
import Block from '@/common/block/block';

export class Chat extends Block {
    init() {
        this.children.profileLink = new Link({ to: '/profile', text: 'Профиль', classNames: 'link link_gray' });
        this.children.searchInput = new Input({
            type: 'text', classNames: 'input_gray', placeholder: 'Поиск', name: 'search',
        });
        this.children.card = new ChatCard({
            icon: '',
            name: 'Андрей',
            text: 'Друзья, у меня для вас особенный выпуск новостей! gfgdfgdfgdg dg fdg d gdf dfg 453 535 345 353 sg ldfgfk gds gkfdslg skg dfl gkf gl dskg  sfdfsf sdfsdfs sfdsfsd',
            time: '10:59',
            countMsg: '21',
        });
        this.children.chatHeader = new ChatHeader({ icon: '', iconName: 'avatar', name: 'Вадим' });
        this.children.chatList = new ChatMsg({
            text: 'Привет', time: '11:56', img: '', fromYouMsg: false,
        });
        this.children.chatInput = new ChatInput({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
