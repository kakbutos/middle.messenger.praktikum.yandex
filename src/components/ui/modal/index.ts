import { tmpl } from './modal.tmpl';
import { renderTemplate } from '../../../common/decorators/compileDecorator';
import { Link } from '../link';

interface LinkProps {
    title?: string;
    children?: string;
    textButton?: string;
    textLink: string;
    toLink: string;
    classNames?: string;
}

export const Modal = (props: LinkProps) => {
    const { title,
            children,
            textButton,
            textLink,
            toLink,
            classNames
    } = props;

    return renderTemplate(tmpl, {
        classNames,
        title,
        children,
        textButton,
        LinkElement: Link({ to: toLink, text: textLink, classNames: 'link link_blue' }),
    });
};
