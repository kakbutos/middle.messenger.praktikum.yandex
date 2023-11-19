import { tmpl } from './input.tmpl';
import Block from '@/common/block/block';

export type InputType = 'email' | 'text' | 'number' | 'password' | 'tel' | 'file';

export interface InputProps {
    classNames?: string;
    placeholder?: string;
    type: InputType;
    value?: string;
    name: string;
	checkValidFunc?: (str: string) => string;
	title?: string;
	hasError?: string;
	events?: {
		blur?: (...args: any) => void;
	};
}

export class Input extends Block<InputProps> {
    public checkValid(func: (str: string) => string): string {
        const inputEl = this.getContent() as HTMLInputElement;
        const hasError = func(inputEl.value || '');
        const newProps = { ...this.props, hasError, title: hasError };

        this.setProps(newProps);

        return hasError;
    }

    get value(): string {
        const inputEl = this.getContent() as HTMLInputElement;

        return inputEl ? inputEl.value : this.props.value || '';
    }

    render() {
        const inputEl = this.getContent() as HTMLInputElement;

        return this.compile(tmpl, {
            ...this.props,
            value: inputEl ? inputEl.value : this.props.value,
        });
    }
}
