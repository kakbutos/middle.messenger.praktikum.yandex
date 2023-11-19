import { tmpl } from './main.tmpl';
import Block from '@/common/block/block';
import { Link } from '@/components/ui/link';

export class Main extends Block {
    init() {
        const links = [
            {
                text: 'Профиль',
                to: '/profile',
            },
            {
                text: 'Чат',
                to: '/messenger',
            },
            {
                text: 'Регистрация',
                to: '/sign-up',
            },
            {
                text: 'Авторизация',
                to: '/login',
            },
            {
                text: 'Ошибка 500',
                to: '/serverError',
            },
            {
                text: 'Смена пароля',
                to: '/changePassword',
            },
            {
                text: 'Редактирование профиля',
                to: '/settings',
            },
            {
                text: 'Страница не найдена',
                to: '/notFound',
            },
        ];

        this.children.links = new Array(...links).map((item) => {
            return new Link({
                to: item.to,
                text: item.text,
                classNames: 'link link_blue',
            });
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
