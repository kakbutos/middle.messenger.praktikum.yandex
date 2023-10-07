import { renderTemplate } from '../../../../../common/decorators/compileDecorator';
import { tmpl } from './chat-msg.tmpl';

interface Props {
    text: string;
    time: string;
    img: string;
    fromYouMsg: boolean;
}

export const ChatMsg = (props: Props) => {
    return renderTemplate(tmpl, props);
};
