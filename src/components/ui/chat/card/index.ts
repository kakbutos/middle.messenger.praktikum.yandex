import { renderTemplate } from '../../../../common/decorators/compileDecorator';
import { tmpl } from './chat-card.tmpl';

interface Props {
    icon: string;
    name: string;
    text: string;
    time: string;
    countMsg: string;
}

export const ChatCard = (props: Props) => {
    return  renderTemplate(tmpl, props);
};
