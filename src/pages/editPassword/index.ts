import { tmpl } from './edit-password.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { homeSidebar } from '../../widgets/ui/home-sidebar';

export const editPassword = () => {
    return renderTemplate(tmpl, {
        linkToHome: homeSidebar,
        oldPassword: Input({type: 'password', classNames: 'input_clear', value: '123'}),
        newPassword: Input({type: 'password', classNames: 'input_clear', value: '123'}),
        repeatPassword: Input({type: 'password', classNames: 'input_clear', value: '123'}),
    });
};
