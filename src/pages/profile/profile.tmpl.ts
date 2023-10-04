export const tmpl = `
    <main class="profile">
        <img src="" alt="avatar">
        <span class="profile__title">Иван</span>
        <ul class="profile__list">
            <li class="profile__item">
                <span class="profile__name">Почта</span>
                <span class="profile__value">pochta@yandex.ru</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Логин</span>
                <span class="profile__value">ivanivanov</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Имя</span>
                <span class="profile__value">Иван</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Фамилия</span>
                <span class="profile__value">Иванов</span>
            </li>
            <li class="profile__item">
                <span class="profile__name">Имя в чате</span>
                <span class="profile__value">Иван</span>
            </li>
            <li class="profile__item profile__item_underline-none">
                <span class="profile__name">Телефон</span>
                <span class="profile__value">+7 (909) 967 30 30</span>
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
