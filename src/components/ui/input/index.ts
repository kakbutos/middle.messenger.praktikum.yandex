import { tmpl } from './input.tmpl';
import Block from '../../../common/block/Block';

type InputType = 'email' | 'text' | 'number' | 'password' | 'tel';

interface InputProps {
    classNames?: string;
    placeholder?: string;
    type: InputType;
    value?: string;
    name: string;
}

export class Input extends Block<InputProps> {
    render() {
        return this.compile(tmpl, this.props);
    }
}
