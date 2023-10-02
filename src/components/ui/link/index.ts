import { tmpl } from './link.tmpl';
import { renderTemplate } from '../../../common/decorators/compileDecorator';

interface LinkProps {
    classNames?: string;
    to: string;
    text: string;
}

export const Link = (props: LinkProps) => {
    return renderTemplate(tmpl, props);
};
