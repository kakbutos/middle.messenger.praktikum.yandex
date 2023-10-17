import { tmpl } from './input.tmpl';
import Block from '@/common/block/block';

type InputType = 'email' | 'text' | 'number' | 'password' | 'tel';

interface InputProps {
    classNames?: string;
    placeholder?: string;
    type: InputType;
    value?: string;
    name: string;
	pattern?: RegExp;
	title?: string;
	hasError?: string;
	events?: {
		blur?: (...args: any) => void;
	};
}

export class Input extends Block<InputProps> {
    public checkValid(func: (str: string) => string) {
        const inputEl = this.getContent() as HTMLInputElement;
        const hasError = func(inputEl.value || '');

        this.setProps({ ...this.props, hasError, title: hasError });
    }

    render() {
        const inputEl = this.getContent() as HTMLInputElement;

        return this.compile(tmpl, {
            ...this.props,
            value: inputEl ? inputEl.value : this.props.value,
        });
    }
}
