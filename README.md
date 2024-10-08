В этом репозитории реализован проект по поиску пользователей GitHub, информации о них и взаимодейтсвии с этой информацией.

Деплой проекта на gh pages:  https://aloygolone.github.io/sky_test/ (до конца не реализовано)

Разработка: 

Проект разработан на основе шаблона Vite (npm init vite@latest) с использованием TypeScript, стилизация оформлена с использованием Styled Components, реализованы тесты с использованием Jest.

Используется ESLint. Была произведена попытка сборки через Webpack (до конца не реализовано)

Важные допущения принятые при разработке:
    - Использовалась переменная окружения VITE_APP_TOKEN (необходимо создать файл .env и поместить ее туда, присвоив свой github-токен) - позволяет делать до 5000 запросов к REST_API в час (изначально 60/час)
    - Получаемые данные для отображения: имя, фото, ссылка на аккаунт пользователя; общее количество коммитов, созданных тем; репозитории - в связи с этим были приняты жесткие обозначения (комментарии есть в коде)

Что реализовано:

    - Две страницы (MainPage и NotFound) - есть роутинг;
    - На главной странице есть поле для поиска - при вводе значений на английском языке - начинает отображаться список найденных пользователей
        При этом: 
                    - есть возможность отображать количество пользователей на одной странице (10, 20, 30)
                    - есть возможность сортировки по возрастанию или убыванию по количеству их репозиториев
                    - есть возможность перехода на страницу данных, отображается кол-во результатов и возможных страниц для выбора, выбирается соответствующим инпутом
    - При нажатии на пользователя - отображаются его: фото, имя, общее число коммитов, общее число тем, и общее число репозиториев
        При это:
                    - фото и имя кликабельны и являются ссылками (открывают в новой вкладке аккаунт пользователя на github)
                    - при нажатии на число репозиториев открывается список репозиториев (по 10 на странице) - есть возможность также импутом выбирать страницу для отображения
                    - любой репозиторий кликабелен и открывает в новой вкладке выбранный репозиторий
    - Реализованы лоадеры при получении и переключении данных
    - Внутри инпутов есть ограничения:
                    - если страниц для отображения только 1 - то изменить значение на любое другое не возможно
                    - если вводится номер страницы  превышающее максимально возможное значение - ставится это максимальное значение
                    - в том числе нельзя ввести значение меньше 1
    - Реализовано 2 типа взаимодействия с REST_API:
                    - основное API - получает пользователей по запросу из поисковой строки
                    - второй API универсальный для получения коммитов, тем, репозиториев (меняющиеся значения подставляются)
    - Все разбито на компоненты (имеется четкая структура документа), стили реализованы через StyledComponents - в том числе с использованием props
    - Есть утилита по подсчету максимального значения страниц в зависимости от количество отображаемых элементов
