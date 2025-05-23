# Шаблон лендинга на Next.js

Шаблон лендинг-страницы, разработанный с использованием Next.js, React и TailwindCSS.

## Технологии

-   Next.js 15.3.0
-   React 19
-   TailwindCSS 4
-   Animate.css
-   TypeScript
-   Formik + Yup для управления формами
-   React Toastify для уведомлений

## Начало работы

Клонируйте репозиторий:

```bash
git clone [ссылка-на-ваш-репозиторий]
cd [название-директории-проекта]
```

Установите зависимости:

```bash
npm install
```

Создайте файл .env из примера:

```bash
cp .env.example .env
```

Запустите сервер разработки:

```bash
npm run dev
```

Запуск mailserver (для работы формы контактов):

```bash
# Для разработки
cd mailserver && npm run dev

# Для продакшена
cd mailserver && npm run start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Основные команды

-   `npm run dev` - запуск в режиме разработки
-   `npm run build` - сборка проекта
-   `npm run start` - запуск собранного проекта
-   `npm run lint` - проверка кода линтером

## Структура проекта

-   **src/app** - основные файлы приложения Next.js

    -   `page.tsx` - главная страница
    -   `layout.tsx` - корневой макет
    -   `globals.css` - глобальные стили

-   **src/components** - React компоненты

    -   Компоненты разделены по функциональным секциям
    -   Каждый компонент в отдельной директории

-   **mailserver** - сервер для обработки контактных форм

## Секции лендинга

В шаблоне реализованы следующие секции:

1. **Header** - Навигационная шапка
2. **HeroSection** - Вводная секция (первый экран)
3. **QuickStartGuide** - Руководство по быстрому старту
4. **FeatureShowcase** - Демонстрация возможностей
5. **SolutionBenefits** - Преимущества решения
6. **PricingPlans** - Планы и цены
7. **CustomerReviews** - Отзывы клиентов
8. **ContactUs** - Форма связи

## Стилизация

### Цветовая схема

Основные цвета заданы через CSS-переменные в `globals.css`:

-   `--background: #262626` - цвет фона
-   `--green-gradient` - линейный градиент от #19A964 до #005D32
-   `--primary_color: #FFFFFF` - основной цвет текста

### Типографика

Предустановленные классы для заголовков:

-   `.heading-1` - 56px
-   `.heading-2` - 34px (48px на устройствах шире 768px)
-   `.heading-3` - 24px (38px на устройствах шире 768px)
-   `.heading-4` - 16px
-   `.heading-5` - 16px

### Шрифты

Основной шрифт проекта - Montserrat

## Правила разработки

### Создание новых компонентов

1. Создайте директорию в `src/components/`
2. Основной файл компонента должен иметь то же имя, что и директория
3. Используйте именованный экспорт

Пример:

```tsx
// src/components/NewSection/NewSection.tsx
export const NewSection = () => {
    return <section>{/* Содержимое компонента */}</section>;
};
```

### Работа со стилями

-   Используйте классы TailwindCSS
-   Для повторяющихся стилей создавайте классы в globals.css
-   Учитывайте особенности кириллицы при работе с текстом

## Настройка проекта

Для настройки проекта под свои нужды:

1. Отредактируйте метаданные в `src/app/layout.tsx`
2. Измените цветовую схему в `src/app/globals.css`
3. Адаптируйте содержимое секций под ваш проект
