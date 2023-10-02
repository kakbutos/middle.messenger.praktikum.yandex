## Проект мессенджер

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start - билд проекта + раздача статики на express
npm run build - билд проекта
npm run dev - запуск дев окружения
```

----

## Страницы проекта на Netlify

Сайт - https://stunning-licorice-ff7bd8.netlify.app

[Профиль](https://stunning-licorice-ff7bd8.netlify.app/profile)

[Чат](https://stunning-licorice-ff7bd8.netlify.app/chat)

[Регистрация](https://stunning-licorice-ff7bd8.netlify.app/reg)

[Авторизация](https://stunning-licorice-ff7bd8.netlify.app/login)

[Ошибка 500](https://stunning-licorice-ff7bd8.netlify.app/serverError)

[Смена пароля](https://stunning-licorice-ff7bd8.netlify.app/changePassword)

[Редактирование профиля](https://stunning-licorice-ff7bd8.netlify.app/changeProfile)

[Страница не найдена](https://stunning-licorice-ff7bd8.netlify.app/notFound)

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
Пытался использовать методологию БЭМ
```

## Дизайн

[Использовал предложенный макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&mode=dev)
