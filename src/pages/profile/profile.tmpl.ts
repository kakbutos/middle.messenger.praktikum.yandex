export const tmpl = `
    <main class="profile">
        {{{imageComponent}}}
        <span class="profile__title">{{display_name}}</span>
        <ul class="profile__list">
            <li class="profile__item">
                <span class="profile__name">Почта</span>
                <span class="profile__value">{{email}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Логин</span>
                <span class="profile__value">{{login}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Имя</span>
                <span class="profile__value">{{first_name}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Фамилия</span>
                <span class="profile__value">{{second_name}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Имя в чате</span>
                <span class="profile__value">{{display_name}}</span>
            </li>
            <li class="profile__item profile__item_underline-none">
                <span class="profile__name">Телефон</span>
                <span class="profile__value">{{phone}}</span>
            </li>
        </ul>

        <div class="profile__item">
            {{{changeProfile}}}
        </div>
        <div class="profile__item">
            {{{changePassword}}}
        </div>
        <div class="profile__item profile__item_underline-none">
            {{{logout}}}
        </div>
    </div>

    {{{linkToHome}}}
`;
