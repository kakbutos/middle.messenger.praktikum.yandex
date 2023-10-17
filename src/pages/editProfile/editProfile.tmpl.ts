export const tmpl = `
    <main class="profile profile-edit">
        <img class="profile-edit__img" src="" alt="avatar">

        <form class="profile__list">
            <div class="profile__item">
                <label class="profile__name">Почта</label>
                {{{email}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Логин</label>
                {{{login}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Имя</label>
                {{{firstName}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Фамилия</label>
                {{{lastName}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Имя в чате</label>
                {{{name}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Телефон</label>
                {{{tel}}}
            </div>

			{{{button}}}
        </form>
    </>

    {{{linkToHome}}}
`;
