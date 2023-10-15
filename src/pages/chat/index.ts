import { tmpl } from './chat.tmpl';
import { Link } from '../../components/ui/link';
import { Input } from '../../components/ui/input';
import { ChatCard } from '../../components/ui/chat/card';
import { ChatHeader } from '../../components/ui/chat/header';
import { ChatMsg } from '../../components/ui/chat/msg/chat-msg';
import { ChatInput } from '../../components/ui/chat/msg/chat-input';
import Block from '../../common/block/Block';

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
