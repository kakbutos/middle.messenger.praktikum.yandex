import { tmpl } from './chat.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Link } from '../../components/ui/link';
import { Input } from '../../components/ui/input';
import { ChatCard } from '../../components/ui/chat/card';
import { ChatHeader } from '../../components/ui/chat/header';
import { ChatMsg } from '../../components/ui/chat/msg/chat-msg';
import { ChatInput } from '../../components/ui/chat/msg/chat-input';

export const Chat = () => {
    return renderTemplate(tmpl, {
        profileLink: Link({ to: '/profile', text: 'Профиль', classNames: 'link link_gray' }),
        searchInput: Input({
            type: 'text', classNames: 'input_gray', placeholder: 'Поиск', name: 'search',
        }),
        card: ChatCard({
            icon: '',
            name: 'Андрей',
            text: 'Друзья, у меня для вас особенный выпуск новостей! gfgdfgdfgdg dg fdg d gdf dfg 453 535 345 353 sg ldfgfk gds gkfdslg skg dfl gkf gl dskg  sfdfsf sdfsdfs sfdsfsd',
            time: '10:59',
            countMsg: '21',
        }),
        chatHeader: ChatHeader({ icon: '', iconName: 'avatar', name: 'Вадим' }),
        chatList: ChatMsg({
            text: 'Привет', time: '11:56', img: '', fromYouMsg: false,
        }),
        chatInput: ChatInput,
    });
};
