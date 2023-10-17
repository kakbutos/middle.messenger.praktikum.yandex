## Проект мессенджер

## Запуск проекта

```
npm install - устанавливает зависимости
npm run start - билд проекта + раздача статики на express
npm run build - билд проекта
npm run dev - запуск дев окружения
npm run lint:ts - Проверка ts файлов линтером(с учетом проверки типов)
npm run lint:ts:fix - Исправление ts файлов линтером
npm run lint:less - Проверка less файлов style линтером
npm run lint:less:fix - Исправление less файлов style линтером
npm run prepare - прекоммит хуки
```

----

## Страницы проекта на Netlify

Сайт - https://dapper-semolina-4957ab.netlify.app

[Профиль](https://dapper-semolina-4957ab.netlify.app/profile)

[Чат](https://dapper-semolina-4957ab.netlify.app/chat)

[Регистрация](https://dapper-semolina-4957ab.netlify.app/reg)

[Авторизация](https://dapper-semolina-4957ab.netlify.app/login)

[Ошибка 500](https://dapper-semolina-4957ab.netlify.app/serverError)

[Смена пароля](https://dapper-semolina-4957ab.netlify.app/changePassword)

[Редактирование профиля](https://dapper-semolina-4957ab.netlify.app/changeProfile)

[Страница не найдена](https://dapper-semolina-4957ab.netlify.app/notFound)

----

## Структура проекта

```
public:
    тут вся статика (шрифты, иконки и тп)
src:
    app - общая настройка проекта(роутинг, стили переменных)
    common - часто переиспользуемые вещи (функции, стили)
    components - часто переиспользуемые компоненты 
    pages - страницы
    widgets - это отдельне части модулей, которые используются только на определенных страницах
```

----

## Стили

```
Используется методология БЭМ
```

## Дизайн

[Использовал предложенный макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&mode=dev)

## Линтеры

```
в eslint используется правила airbnb-base
в stylelint используется правила stylelint-config-standard-less

все папки и файлы имеют названия в формате CamelCase
```

