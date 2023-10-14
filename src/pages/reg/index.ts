import { tmpl } from './reg.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';
import { Input } from '../../components/ui/input';
import { Modal } from '../../components/ui/modal';

export const Reg = () => {
    const modalChildrenTmpl = `
        <form class="auth-form">
            <label class="auth-form__title">Почта</label>
            ${Input({ type: 'email', classNames: 'auth-form__input', name: 'email' })}

            <label class="auth-form__title">Логин</label>
            ${Input({ type: 'text', classNames: 'auth-form__input', name: 'login' })}

            <label class="auth-form__title">Имя</label>
            ${Input({ type: 'text', classNames: 'auth-form__input', name: 'first_name' })}

            <label class="auth-form__title">Фамилия</label>
            ${Input({ type: 'text', classNames: 'auth-form__input', name: 'second_name' })}

            <label class="auth-form__title">Телефон</label>
            ${Input({ type: 'tel', classNames: 'auth-form__input', name: 'phone' })}

            <label class="auth-form__title">Пароль</label>
            ${Input({ type: 'password', classNames: 'auth-form__input', name: 'password' })}

            <label class="auth-form__title">Пароль (еще раз)</label>
            ${Input({ type: 'password', classNames: 'auth-form__input', name: 'repeatPassword' })}

            <button type="submit" class="button button_blue">
                <span class="button__text">Зарегистрироваться</span>
            </button>
        </form>
    `;

    return renderTemplate(tmpl, {
        modal: Modal({
            title: 'Регистрация',
            children: modalChildrenTmpl,
            textLink: 'Войти',
            toLink: '/login',
        }),
    });
};
