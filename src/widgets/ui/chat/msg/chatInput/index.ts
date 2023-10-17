import { tmpl } from './chatInput.tmpl';
import { Input } from '@/components/ui/input';
import Block from '@/common/block/block';
import { messageReg } from '@/common/form/regexp';

export class ChatInput extends Block {
    declare public children: {
		input: Input
	};

    init() {
        const blurInput = () => this.children.input.checkValid(messageReg);

        this.children.input = new Input({
            type: 'text', placeholder: 'Сообщение', classNames: 'input_gray', name: 'message', events: { blur: blurInput },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
