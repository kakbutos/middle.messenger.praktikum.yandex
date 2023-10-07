import { tmpl } from './profile.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Link } from '../../components/ui/link';
import { homeSidebar } from '../../widgets/ui/home-sidebar';

export const Profile = () => {
    return renderTemplate(tmpl, {
        changeProfile: Link({text: 'Изменить данные', to: '/changeProfile', classNames: 'link link_blue'}),
        changePassword: Link({text: 'Изменить пароль', to: '/changePassword', classNames: 'link link_blue'}),
        logout: Link({text: 'Выйти', to: '#', classNames: 'link link_red'}),
        linkToHome: homeSidebar,
    });
};
