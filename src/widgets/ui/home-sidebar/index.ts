import { renderTemplate } from '../../../common/decorators/compileDecorator';
import { tmpl } from './home-sidebar.tmpl';
import { Link } from '../../../components/ui/link';

export const homeSidebar = () => {
    return renderTemplate(tmpl, {
        linkToHome: Link({ text: 'Вернуться', to: '/chat', classNames: 'link link_blue' }),
    });
};
