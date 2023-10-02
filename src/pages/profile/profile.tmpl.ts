export const tmpl = `
    <div class="profile">
        <img src="" alt="/">
        <span class="profile__title">Иван</span>
        <div class="profile__list">
            <div class="profile__item">
                <div class="profile__name">Почта</div>
                <div class="profile__value">pochta@yandex.ru</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Логин</div>
                <div class="profile__value">ivanivanov</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Имя</div>
                <div class="profile__value">Иван</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Фамилия</div>
                <div class="profile__value">Иванов</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Имя в чате</div>
                <div class="profile__value">Иван</div>
            </div>
            <div class="profile__item profile__item_underline-none">
                <div class="profile__name">Телефон</div>
                <div class="profile__value">+7 (909) 967 30 30</div>
            </div>
        </div>

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
