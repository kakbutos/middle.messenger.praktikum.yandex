import { tmpl } from './actionModal.tmpl';
import Block from '@/common/block/block';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
	name?: string;
	btnName?: string;
	action?: (value: string) => void;
}

export class ActionModal extends Block<Props> {
    declare public children: {
		inputComponent: Input;
		buttonAction: Button;
	};

    init() {
        const btnAction = () => {
            const { value } = this.children.inputComponent;

            if (this.props.action) {
                this.props.action(value);
            }
        };

        this.children.inputComponent = new Input({
            type: 'text',
            placeholder: this.props.name,
            name: 'add',
            classNames: 'input_gray',
        });

        this.children.buttonAction = new Button({
            text: this.props.btnName || 'Добавить',
            classNames: 'button button_blue button-text_white',
            events: { click: btnAction },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
