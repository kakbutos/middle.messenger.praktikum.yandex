import { tmpl } from './reg.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { Modal } from '../../components/ui/modal';

export const Reg = () => {
    const modalChildrenTmpl = `
        <form class="auth-form">
            <div class="auth-form__title">Почта</div>
            ${Input({type: 'email', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Логин</div>
            ${Input({type: 'text', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Имя</div>
            ${Input({type: 'text', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Фамилия</div>
            ${Input({type: 'text', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Телефон</div>
            ${Input({type: 'tel', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Пароль</div>
            ${Input({type: 'password', classNames: 'auth-form__input'})}

            <div class="auth-form__title">Пароль (еще раз)</div>
            ${Input({type: 'password', classNames: 'auth-form__input'})}
        </form>
    `;

    return renderTemplate(tmpl, {
        modal: Modal({
            title: 'Регистрация',
            children: modalChildrenTmpl,
            textButton: 'Зарегистрироваться',
            textLink: 'Войти',
            toLink: '/login'
        })
    });
};
