export const tmpl = `
    <main class="profile profile-edit-password">
        <img src="" alt="avatar">

        <form class="profile__list">
            <div class="profile__item">
                <label class="profile__name">Старый пароль</label>
                {{{oldPassword}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Новый пароль</label>
                {{{newPassword}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Повторите новый пароль</label>
                {{{repeatPassword}}}
            </div>

            <button class="button button_blue">
                <span class="button__text">Сохранить</span>
            </button>
        </form>
    </div>

    {{{linkToHome}}}
`;
