# Стиль проекта MetodZMS

> Этот документ фиксирует визуальный стиль, извлечённый из Hero экрана (v29).
> Все последующие экраны ОБЯЗАНЫ использовать эти стили.

## ЦВЕТА

```css
/* Фоны */
--color-bg: #f5f5f7;           /* фон страницы (светло-серый) */
--color-bg-card: #ffffff;      /* фон карточек */
--color-bg-dark: #1a1a2e;      /* тёмный фон (ячейки сканера, кнопки) */
--color-bg-neutral: #fafafa;   /* нейтральный фон (карточки бонусов) */

/* Текст */
--color-text: #1a1a2e;         /* основной текст (тёмно-синий/чёрный) */
--color-text-secondary: #7a7f8a; /* вторичный текст (серый) */
--color-text-white: #ffffff;   /* белый текст */

/* Акценты */
--color-accent: #c8f542;       /* акцентный лаймовый (хайлайт, hover кнопок) */
--color-highlight-gray: rgba(0, 0, 0, 0.07); /* серый хайлайт (подложка) */

/* Специальные */
--color-sick: #ec5353;         /* красная индикация (больные ячейки сканера) */
--color-border: #d1d5db;       /* границы карточек */
```

## ТИПОГРАФИЯ

### Шрифты

```css
/* Основные шрифты (Google Fonts) */
--font-heading: 'Unbounded', sans-serif;     /* заголовки (кириллица) */
--font-body: 'Manrope', sans-serif;          /* основной текст (кириллица) */
--font-label: 'Chakra Petch', sans-serif;    /* лейблы (англ.) */
--font-logo: 'ClashDisplay', sans-serif;     /* логотип (локальный файл) */
```

### Размеры и начертания

#### Десктоп

| Элемент | Шрифт | Размер | Weight | Line-height | Letter-spacing |
|---------|-------|--------|--------|-------------|----------------|
| H1 (Hero) | Unbounded | 55px | 600 | 1.1 | -2px |
| H2 (секции) | Unbounded | 22px | 400 | 1.3 | -1px |
| Надзаголовок | Manrope | 22px | 600 | 1.4 | normal |
| Подзаголовок Hero | Manrope | 20px | 400 | 1.4 | normal |
| Body (основной текст) | Manrope | 18px | 400 | 1.5 | normal |
| Буллиты | Manrope | 15px | 400 | normal | normal |
| CTA-кнопка | Manrope | 17px | 600 | normal | normal |
| Лейбл (START SCANNER) | Chakra Petch | 19px | 400 | normal | 3px |
| Логотип | ClashDisplay | 19px | 600 | normal | normal |
| Подписи сканера | Manrope | 10px | 500 | normal | normal |
| Текст карточек | Manrope | 16px | 400 | normal | normal |
| Мелкий текст | Manrope | 14px | 400 | normal | normal |

#### Мобайл (768px)

| Элемент | Размер | Weight | Letter-spacing |
|---------|--------|--------|----------------|
| H1 | 28px | 600 | -2px |
| H2 | 17px | 400 | -0.5px |
| Надзаголовок | 16px | 600 | normal |
| Подзаголовок Hero | 15px | 400 | normal |
| Body | 14px | 400 | normal |
| Буллиты | 13px | 400 | normal |
| CTA-кнопка | 16px | 600 | normal |
| Подписи сканера | 8px | 500 | normal |
| Текст карточек | 14px | 400 | normal |

### Правила типографики

- **НЕ использовать font-weight 700** на заголовки
- **НЕ использовать italic** на описательные тексты
- **Стиль надзаголовка:** normal (НЕ italic)
- **Стиль подзаголовка:** normal (НЕ italic)

## ИКОНКИ

```
Библиотека: Lucide (v0.563.0, ISC лицензия)
Стиль: линейные (outline), rounded stroke
Толщина линий: stroke-width 2 (стандарт), 1.5 (крупные иконки)
Размер: адаптивный, зависит от контекста
Подключение: <img src="assets/icons/..."> (НЕ inline SVG)
```

### Используемые иконки

- **Навигация:** crosshair
- **Кнопки:** zap (молния, заливка), layers, arrow-up-right
- **Hero:** clock, clipboard-list
- **Другие:** settings, circle-plus, chevron-down, rocket, circle-help, quote, x-twitter

### Иконки сканера (специальные)

- **Формат:** PNG (цветные от заказчика), SVG (Lucide для placeholder)
- **Размер:** 70×70px
- **Система:** двухслойная (тёмный grayscale + цветной)

## ГЕОМЕТРИЯ

### Скругления

```css
/* Кнопки */
--radius-button: 16px;         /* основные кнопки */
--radius-button-pill: 9999px;  /* pill-кнопки (если потребуются) */

/* Карточки и блоки */
--radius-card: 16px;           /* карточки бонусов, контентные блоки */
--radius-card-inner: 12px;     /* изображения/контент внутри карточек */

/* Изображения */
--radius-image: 18px;          /* фото спикера (десктоп) */
--radius-image-small: 10px;    /* фото спикера (мобайл) */

/* Специальные */
--radius-scanner-cell: 18px;   /* ячейки сканера (десктоп) */
--radius-scanner-cell-mobile: 12px; /* ячейки сканера (мобайл) */
--radius-highlight: 4px;       /* хайлайт-подложки */
```

### Тени

```css
/* Карточки */
--shadow-card: 0 25px 60px rgba(0, 0, 0, 0.10), 0 6px 20px rgba(0, 0, 0, 0.05);
--shadow-card-hover: 0 30px 70px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.08);

/* Кнопки */
--shadow-button-hover: 0 10px 40px rgba(200, 245, 66, 0.35); /* лаймовое свечение */

/* Сканер */
--shadow-scan-line: 0 0 20px rgba(200, 245, 66, 0.6); /* свечение линии */
--shadow-sick-cell: 0 0 6px rgba(236, 83, 83, 0.15); /* свечение больных ячеек */

/* Специальные */
--shadow-video-icon: 0 10px 40px rgba(0, 0, 0, 0.15); /* иконка на видео-карточке */
```

### Границы

```css
/* Стиль границ */
--border-card: 1px dashed #d1d5db; /* карточки бонусов */
--border-thin: 1px solid #d1d5db;  /* тонкие светлые границы */
```

## КНОПКИ

### Основная кнопка (Primary)

```css
/* Десктоп */
background: #1a1a2e;           /* тёмный фон */
color: #ffffff;                /* белый текст */
border-radius: 16px;
padding: 24px 36px;
font: 600 17px 'Manrope', sans-serif;
иконка: zap.svg (22px, белая, заливка)

/* Hover */
background: #c8f542;           /* лаймовый фон */
color: #1a1a2e;                /* тёмный текст и иконка */
box-shadow: 0 10px 40px rgba(200, 245, 66, 0.35);
transform: scale(1.04);
transition: 0.25s ease;
```

```css
/* Мобайл (768px) */
background: #c8f542;           /* лаймовый фон */
color: #1a1a2e;                /* тёмный текст */
width: auto;
padding: 18px 33px;
min-height: 65px;
font-size: 16px;
иконка: filter: brightness(0) (тёмная)
```

### Вторичная кнопка

> Не используется в текущем дизайне (убрана в v19)

## ОТСТУПЫ И SPACING

### Межсекционные отступы

```css
/* Десктоп */
--spacing-section: 100px;      /* между секциями */

/* Мобайл (768px) */
--spacing-section-mobile: 60px;
```

#### Правило межсекционных отступов

**Принцип:** верхняя секция даёт gap через `padding-bottom`, нижняя ставит `padding-top: 0`.

```css
/* Hero */
padding: 100px 144px 0;        /* десктоп */
padding: 30px 20px 0;          /* мобайл */

/* Quote */
padding: 100px 0;              /* десктоп: gap сверху и снизу */
padding: 60px 0;               /* мобайл */

/* Steps */
padding: 0 0 120px;            /* десктоп: top = 0 */
padding: 0 0 60px;             /* мобайл */
```

### Внутренние отступы

```css
/* Десктоп */
--spacing-hero-horizontal: 144px; /* боковые отступы Hero */
--spacing-container: 60px;        /* padding контейнеров */
--spacing-gap-large: 80px;        /* большие gap (quote-section) */
--spacing-gap-medium: 48px;       /* средние gap (steps-grid) */
--spacing-gap-small: 24px;        /* малые gap (буллиты) */

/* Мобайл */
--spacing-container-mobile: 20px;
--spacing-gap-medium-mobile: 24px;
--spacing-gap-small-mobile: 16px;
```

### Базовая единица

```
Все отступы кратны 8px
```

## СПЕЦИАЛЬНЫЕ ЭЛЕМЕНТЫ

### Хайлайт-подложки (highlight)

```css
/* Лаймовая подложка */
.highlight-lime::before {
    background: #c8f542;
    rotate: 4.5deg;
    border-radius: 4px;
    top: 22%;
    bottom: 12%;
    z-index: -1;
}

/* Серая подложка */
.highlight-gray::before {
    background: rgba(0, 0, 0, 0.07);
    rotate: 4.5deg;
    border-radius: 4px;
    top: 22%;
    bottom: 12%;
    z-index: -1;
}

/* ВАЖНО: контейнер заголовка должен иметь */
position: relative;
z-index: 0;
```

### Красная индикация (сканер)

```css
/* Больные ячейки */
background: #ec5353;           /* насыщенный красный */
color: #ffffff;                /* белая подпись */
font-weight: 600;
box-shadow: 0 0 6px rgba(236, 83, 83, 0.15);
animation: pulse 1.2s ease-in-out infinite; /* scale(1.05) */
```

## АДАПТИВНОСТЬ

### Breakpoints

```css
@media (max-width: 1100px) { /* планшет: колонки → стэк */ }
@media (max-width: 768px)  { /* мобайл: уменьшенные шрифты */ }
@media (max-width: 560px)  { /* мобайл: сканер адаптация */ }
```

### Правила адаптации

- **Mobile-first подход**
- **Десктопные правки НЕ распространять автоматически на мобайл**
- **Мобильную версию корректировать отдельно**
- При адаптации flex row → column: обязательно переопределить align-self, flex, width

## АНИМАЦИИ

```css
/* Общие принципы */
Характер: сдержанные, плавные, живые
Easing: ease, ease-out, ease-in-out
Длительность: 0.25s–0.8s
```

### Основные анимации

- **Hover кнопок:** scale(1.04) + shadow, 0.25s ease
- **Hover карточек:** translateY(-6px) + усиление тени, 0.5s cubic-bezier
- **Счётчик:** пульсация scale(1.3), 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Сканер:** 5s ease-in-out, задержка 1.5s, forwards

### Правила анимаций

- **Без агрессивных эффектов** (bounce, shake, flash)
- **@media (prefers-reduced-motion: reduce)** — обязательно
- **will-change: transform** на анимируемых элементах

## КАРТОЧКИ

### Тип 1: Контентные карточки

**Применение:** steps-section (бонусы), видео-карточки

```css
/* Геометрия (ЖЕЛЕЗНЫЕ ПАРАМЕТРЫ) */
border-radius: 16px;           /* карточка */
border-radius: 12px;           /* контент внутри */
padding: 12px;                 /* базовый */
gap: 12px;                     /* между элементами */

/* Стиль */
background: #ffffff / #fafafa / #c8f542;
box-shadow: 0 25px 60px rgba(0,0,0,0.10), 0 6px 20px rgba(0,0,0,0.05);

/* Hover */
transform: translateY(-6px);
box-shadow: усиление;
```

## НАВБАР

```css
position: relative;            /* в потоке документа, уходит при скролле */
background: transparent;
border: none;
```

## ПРАВИЛА

### Последний элемент в секции

```css
/* НЕ ДОЛЖЕН иметь margin-bottom */
margin-bottom: 0;
/* Расстояние контролируется ТОЛЬКО через padding секции */
```

### Stacking context для highlight-lime

```css
/* Контейнер заголовка с highlight-lime (вне Hero) */
.steps-title {
    position: relative;
    z-index: 0;
}
```

---

## Использование

При создании новых экранов:
1. Используй эти значения через CSS-переменные
2. НЕ изобретай новые цвета/размеры без согласования
3. Адаптируй элементы референса под ЭТОТ стиль

Структура копируется точно, стиль — наш.
