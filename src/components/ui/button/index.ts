import { tmpl } from './button.tmpl';
import Block from '../../../common/block/Block';

interface ButtonProps {
	classNames?: string;
	type?: 'button' | 'reset' | 'submit';
	text: string;
	events: {
		click: () => void;
	};
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super({ ...props, type: props.type || 'button' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
