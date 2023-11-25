import { tmpl } from './chatInput.tmpl';
import { Input } from '@/components/ui/input';
import Block from '@/common/block/block';
import { messageReg } from '@/common/form/regexp';
import { Button } from '@/components/ui/button';
import store from '@/common/store/store';

export class ChatInput extends Block {
    declare public children: {
		input: Input;
		sendMsgBtn: Button;
	};

    init() {
        const blurInput = () => this.children.input.checkValid(messageReg);
        const sendMsg = () => {
            const { chats } = store.getState();
            const input = this.children.input.element as HTMLInputElement;

            if (input.value) {
                chats?.chatSocket?.sendMessage(this.children.input.value);
                input.value = '';
            }
        };

        this.children.sendMsgBtn = new Button({
            text: 'Отправить',
            classNames: 'button button_blue button-text_white',
            events: { click: sendMsg },
        });

        this.children.input = new Input({
            type: 'text',
            placeholder: 'Сообщение',
            classNames: 'input_gray',
            name: 'message',
            events: {
                blur: blurInput,
            },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
