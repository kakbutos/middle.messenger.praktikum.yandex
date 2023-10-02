import { tmpl } from './login.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { Modal } from '../../components/ui/modal';

export const Login = () => {
    const modalChildrenTmpl = `
        <form class="auth-form">
            <div class="auth-form__title">Логин</div>
            ${Input({type: 'email', classNames: 'auth-form__input'})}
            <div class="auth-form__title">Пароль</div>
            ${Input({type: 'password', classNames: 'auth-form__input'})}
        </form>
    `;

    return renderTemplate(tmpl, {
        modal: Modal({
            title: 'Вход',
            children: modalChildrenTmpl,
            textButton: 'Авторизоваться',
            textLink: 'Нет аккаунта?',
            toLink: '/reg'
        })
    });
};
