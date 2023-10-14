import { renderTemplate } from '../../../../../common/decorators/compileDecorator';
import { tmpl } from './chat-input.tmpl';
import { Input } from '../../../input';

export const ChatInput = () => {
    return renderTemplate(tmpl, {
        input: Input({
            type: 'text', placeholder: 'Сообщение', classNames: 'input_gray', name: 'message',
        }),
    });
};
