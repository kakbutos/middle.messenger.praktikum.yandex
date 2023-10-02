import { tmpl } from './input.tmpl';
import { renderTemplate } from '../../../common/decorators/compileDecorator';

type InputType = 'email' | 'text' | 'number' | 'password' | 'tel';

interface InputProps {
    classNames?: string;
    placeholder?: string;
    type: InputType;
    value?: string;
}

export const Input = (props: InputProps) => {
    return renderTemplate(tmpl, props);
};
