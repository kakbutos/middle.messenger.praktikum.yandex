import Block from '@/common/block/block';
import { tmpl } from './inputControls.tmpl';
import { Input, InputProps } from '@/components/ui/input';

interface Props {
	classNames?: string;
	hasError?: string;
	input?: InputProps;
}

export class InputWrapper extends Block<Props> {
    declare public children: {
		input: Input,
	};

    init() {
        const onBlur = () => {
            this.setProps({
                ...this.props,
                hasError: this.props.input?.checkValidFunc ? this.children.input.checkValid(this.props.input.checkValidFunc) : '',
            });
        };

        this.children.input = new Input({
            ...this.props.input,
            events: { blur: onBlur },
        } as InputProps);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
