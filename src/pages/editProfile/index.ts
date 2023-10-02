import { tmpl } from './edit-profile.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { homeSidebar } from '../../widgets/ui/home-sidebar';

export const editProfile = () => {
    return renderTemplate(tmpl, {
        linkToHome: homeSidebar,
        email: Input({type: 'email', classNames: 'input_clear', placeholder: 'pochta@yandex.ru', value: 'pochta@yandex.ru'}),
        login: Input({type: 'text', classNames: 'input_clear', placeholder: 'ivanivanov'}),
        firstName: Input({type: 'text', classNames: 'input_clear', placeholder: 'Иван'}),
        lastName: Input({type: 'text', classNames: 'input_clear', placeholder: 'Иванов'}),
        name: Input({type: 'text', classNames: 'input_clear', placeholder: 'Иван'}),
        tel: Input({type: 'tel', classNames: 'input_clear', placeholder: '+7 (909) 967 30 30'}),
    });
};
