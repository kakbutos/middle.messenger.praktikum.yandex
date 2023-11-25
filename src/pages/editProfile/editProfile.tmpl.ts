export const tmpl = `
    <main class="profile profile-edit">
        <form class="profile-edit__form-img">
			{{{avatarImg}}}
        	{{{avatarComponent}}}
        	{{{buttonFile}}}
		</form>

        <form class="profile__list">
            <div class="profile__item">
                <label class="profile__name">Почта</label>
                {{{emailComponent}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Логин</label>
                {{{loginComponent}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Имя</label>
                {{{firstNameComponent}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Фамилия</label>
                {{{secondNameComponent}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Имя в чате</label>
                {{{displayNameComponent}}}
            </div>
            <div class="profile__item">
                <label class="profile__name">Телефон</label>
                {{{phoneComponent}}}
            </div>

			{{{buttonSaveInputs}}}
        </form>
    </>

    {{{linkToHome}}}
`;
