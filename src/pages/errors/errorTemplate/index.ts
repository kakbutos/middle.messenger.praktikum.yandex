import { renderTemplate } from '../../../common/decorators/compileDecorator';
import { tmpl } from './errorTemplate.tmpl';
import { Link } from '../../../components/ui/link';

interface Props {
    error: string;
    text: string;
}

export const errorTemplate = (props: Props) => {
    return renderTemplate(tmpl, {
        ...props,
        link: Link({to: '/chat', text: 'Назад к чатам', classNames: 'link link_blue'})
    });
};
