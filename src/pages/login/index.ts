import { tmpl } from './login.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { Modal } from '../../components/ui/modal';

export const Login = () => {
    const modalChildrenTmpl = `
        <form class="auth-form">
            <label class="auth-form__title">Логин</label>
            ${Input({type: 'text', classNames: 'auth-form__input', name: 'login'})}
            <label class="auth-form__title">Пароль</label>
            ${Input({type: 'password', classNames: 'auth-form__input', name: 'password'})}
            <button type="submit" class="button button_blue">
                <span class="button__text">Войти</span>
            </button>
        </form>
    `;

    return renderTemplate(tmpl, {
        modal: Modal({
            title: 'Вход',
            children: modalChildrenTmpl,
            textLink: 'Нет аккаунта?',
            toLink: '/reg'
        })
    });
};
