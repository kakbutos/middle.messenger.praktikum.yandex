export const tmpl = `
    <div class="profile profile-edit-password">
        <img src="" alt="/">

        <form class="profile__list">
            <div class="profile__item">
                <div class="profile__name">Старый пароль</div>
                <div class="profile__value">{{{oldPassword}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Новый пароль</div>
                <div class="profile__value">{{{newPassword}}}</div>
            </div>
            <div class="profile__item">
                <div class="profile__name">Повторите новый пароль</div>
                <div class="profile__value">{{{repeatPassword}}}</div>
            </div>
        </form>

        <button class="button button_blue">
            <span class="button__text">Сохранить</span>
        </button>
    </div>

    {{{linkToHome}}}
`;
