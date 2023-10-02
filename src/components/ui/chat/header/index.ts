import { renderTemplate } from '../../../../common/decorators/compileDecorator';
import { tmpl } from './chat-header.tmpl';

interface Props {
    icon: string;
    name: string;
}

export const ChatHeader = (props: Props) => {
    return renderTemplate(tmpl, props);
};
