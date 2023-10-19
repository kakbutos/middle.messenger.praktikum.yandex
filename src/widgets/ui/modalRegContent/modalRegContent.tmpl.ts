export const tmpl = `
        <form class="auth-form">
            <label class="auth-form__title">Почта</label>
            {{{address}}}

            <label class="auth-form__title">Логин</label>
            {{{login}}}

            <label class="auth-form__title">Имя</label>
            {{{name}}}

            <label class="auth-form__title">Фамилия</label>
            {{{lastName}}}

            <label class="auth-form__title">Телефон</label>
            {{{tel}}}

            <label class="auth-form__title">Пароль</label>
            {{{password}}}

            <label class="auth-form__title">Пароль (еще раз)</label>
            {{{passwordRepeat}}}

			{{{button}}}
        </form>
`;
