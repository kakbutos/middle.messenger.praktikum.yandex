import { tmpl } from './edit-profile.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { homeSidebar } from '../../widgets/ui/home-sidebar';

export const editProfile = () => {
    return renderTemplate(tmpl, {
        linkToHome: homeSidebar,
        email: Input({
            type: 'email', classNames: 'input_clear', placeholder: 'pochta@yandex.ru', value: 'pochta@yandex.ru', name: 'email',
        }),
        login: Input({
            type: 'text', classNames: 'input_clear', placeholder: 'ivanivanov', name: 'login',
        }),
        firstName: Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'first_name',
        }),
        lastName: Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иванов', name: 'second_name',
        }),
        name: Input({
            type: 'text', classNames: 'input_clear', placeholder: 'Иван', name: 'display_name',
        }),
        tel: Input({
            type: 'tel', classNames: 'input_clear', placeholder: '+7 (909) 967 30 30', name: 'phone',
        }),
    });
};
