# Тестовое задание в компанию "Цифровые решения" 
### Задание: 
Используя сервис https://jsonplaceholder.typicode.com/ реализовать псевдо-web-приложение

Список экранов:
1. Список пользователей. Вывод списка, полученного по апи в виде карточек вида
[name,surname]
2. Страница пользователя. Подробный вывод информации о пользователе
[
сверху - username
(далее по списку)
name
email
phone
website
company[name,bs]
Список из 3-х превью (заголовок, 1 строчка текста...) постов пользователя + возможность посмотреть все
]
3. список постов пользователя. Все посты в формате превью + возможность перейти на детальную
4. детальная страница поста со списком всех комментариев c именем и email. Также, внизу экрана добавить кнопку добавления комментария. По клику открывается форма с 3 полями имя, email, текст комментария и кнопкой "отправить/send" Отправку сделать на тот же сервис.

Требования к внешнему виду: дизайн из Figma https://www.figma.com/file/IpjzEBgEd5Tk3ry5g347Ux/Untitled

### Стек: 
1. React
2. TypeScript
3. Redux + Redux Toolkit + Redux Thunk
4. REST API
5. CSS/HTML

### Тестовое задание доступно на GH-Pages по [этой](https://sergeikachenia.github.io/) ссылке.

## Available Scripts:
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.

### npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
