import { tmpl } from './chat-input.tmpl';
import { Input } from '../../../input';
import Block from '../../../../../common/block/Block';

export class ChatInput extends Block {
    init() {
        this.children.input = new Input({
            type: 'text', placeholder: 'Сообщение', classNames: 'input_gray', name: 'message',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
