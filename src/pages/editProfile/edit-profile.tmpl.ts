export const tmpl = `
    <div class="profile profile-edit">
        <img src="" alt="/">

        <form class="profile__list">
            <div class="profile__item">
                <div class="profile__name">Почта</div>
                <div class="profile__value">{{{email}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Логин</div>
                <div class="profile__value">{{{login}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Имя</div>
                <div class="profile__value">{{{firstName}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Фамилия</div>
                <div class="profile__value">{{{lastName}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Имя в чате</div>
                <div class="profile__value">{{{name}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Телефон</div>
                <div class="profile__value">{{{tel}}}</div>
            </div>
        </form>

        <button class="button button_blue">
            <span class="button__text">Сохранить</span>
        </button>
    </div>

    {{{linkToHome}}}
`;
