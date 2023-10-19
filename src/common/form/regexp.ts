const nameReg = (name: string) => {
    const reg = /^[А-ЯA-ZЁ][а-яёA-Za-z-]*$/g;

    return reg.test(name)
        ? ''
        : 'латиница или кириллица, первая буква должна быть заглавной, '
		+ 'без пробелов и без цифр, нет спецсимволов (допустим только дефис).';
};

const loginReg = (login: string) => {
    const reg = /^(?![0-9_-]+$)[A-Za-z0-9_-]{3,20}$/g;

    return reg.test(login)
        ? ''
        : 'от 3 до 20 символов, латиница, может содержать цифры, '
		+ 'но не состоять из них, без пробелов, '
		+ 'без спецсимволов (допустимы дефис и нижнее подчёркивание).';
};

const emailReg = (email: string) => {
    const reg = /^[A-Za-z0-9\\._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g;

    return reg.test(email)
        ? ''
        : 'латиница, может включать цифры и спецсимволы вроде дефиса '
		+ 'и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, '
		+ 'но перед точкой обязательно должны быть буквы.';
};

const passwordReg = (password: string) => {
    const reg = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/g;

    return reg.test(password)
        ? ''
        : 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.';
};

const phoneReg = (phone: string) => {
    const reg = /^\+?\d{10,15}$/g;

    return reg.test(phone)
        ? ''
        : 'от 10 до 15 символов, состоит из цифр, может начинается с плюса.';
};

const messageReg = (mesage: string) => {
    const reg = /.+/g;

    return reg.test(mesage)
        ? ''
        : 'не должно быть пустым.';
};

export {
    nameReg,
    loginReg,
    emailReg,
    passwordReg,
    phoneReg,
    messageReg,
};
