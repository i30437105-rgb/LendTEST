# DESIGN_STANDARDS — Стандарты дизайна

> Этот документ — единый источник правды по визуальному стилю сайта.
> Все новые экраны ОБЯЗАНЫ следовать этим стандартам.

## Бренд
- **Название:** MetodZMS
- **Логотип:** иконка crosshair (Lucide) + текст "MetodZMS" шрифтом ClashDisplay 600
- **Навбар:** прозрачный фон, без границы, только логотип (десктоп)

## Цвета (утверждённые по Hero)
- **Фон страницы:** #f5f5f7 (светло-серый)
- **Основной текст:** #1a1a2e (тёмно-синий/чёрный)
- **Вторичный текст (дескрипторы, надзаголовки):** #7a7f8a (серый)
- **Акцентный (хайлайт):** #c8f542 (кислотно-лаймовый) — для выделения ключевых слов
- **CTA-кнопка фон:** #1a1a2e (чёрный), hover: #c8f542 (лаймовый)
- **Карточки:** #ffffff, border-radius 18px, тень 0 25px 60px rgba(0,0,0,0.10)
- **Границы кнопок:** #d1d5db (вторичная кнопка)
- **Декоративный элемент:** #a8b5a0 (оливково-серый)
- **Серый хайлайт (подложка):** rgba(0, 0, 0, 0.07)

## Шрифты

### Кириллические шрифты (утверждены)
- **Заголовки H1 (кириллица):** Unbounded (Google Fonts, weights 300–700) — утверждён заказчиком, замена ClashDisplay
- **Надзаголовки, подзаголовки, буллиты, CTA-кнопки (кириллица):** Manrope (Google Fonts, weights 300–700)
- ClashDisplay НЕ поддерживает кириллицу — заменён на Unbounded для заголовков
- Chakra Petch НЕ поддерживает кириллицу — заменён на Manrope для подзаголовков и кнопок

### Текущие шрифты
- **Заголовки H1 (кириллица):** Unbounded (Google Fonts, weight 600)
- **Логотип:** ClashDisplay (Variable, weight 600), файл: `/assets/fonts/ClashDisplay-Variable.ttf`
- **Надзаголовки, подзаголовки, буллиты, CTA-кнопки (кириллица):** Manrope (Google Fonts, weight 400–600)
- **Лейблы, навигация (англ):** Chakra Petch (Google Fonts, weights 300–700)
- **Fallback:** sans-serif

## Сетка и отступы

### Десктоп (> 1024px)
- Максимальная ширина контента: 1320px
- **Боковые отступы: 144px** (утверждено заказчиком)
- Отступы между секциями: 120px
- Отступы внутри секций: 24px–40px
- Базовая единица spacing: 8px (все отступы кратны 8)

### Планшет (768–1024px)
- Боковые отступы: 40px
- Контент в одну колонку

### Мобайл (< 768px)
- Боковые отступы: 20px
- **Мобильные значения НЕ удваивать** — они корректируются отдельно

## Типографика (утверждённые значения Hero)

### Надзаголовок (supra-heading)
- Шрифт: Manrope
- Размер: **22px** (десктоп), 16px (мобайл)
- Weight: **600**
- Line-height: 1.4
- Стиль: normal (НЕ italic)
- Цвет: первая часть #1a1a2e, вторая часть #7a7f8a
- Счётчик цифры: пульсация scale(1.3), зацикленный (0→5, 1 шаг/сек, пауза 2 сек)

### Заголовок H1
- Шрифт: Unbounded (замена ClashDisplay для кириллицы)
- Размер: **55px** (десктоп), 38px (мобайл)
- Weight: **600** (semibold, НЕ 700)
- Line-height: 1.1
- Letter-spacing: -2px
- Цвет: #1a1a2e

### Хайлайт-подложки в заголовке
- Реализация: `::before` pseudo-element, position absolute
- Лаймовый (.highlight-lime): background #c8f542, rotate(4.5deg), top 22%, bottom 12% — слово "Краш-тест:"
- Серый (.highlight-gray): background rgba(0,0,0,0.07), rotate(4.5deg), top 22%, bottom 12% — слово "маркетинг"
- Границы: left 0, right 0 (строго по слову)
- border-radius: 4px
- z-index: -1

### Дескриптор (подзаголовок)
- Шрифт: Manrope (замена Chakra Petch для кириллицы)
- Размер: **20px** (десктоп), 15px (мобайл)
- Weight: 400
- Line-height: **1.4**
- Стиль: **normal** (НЕ italic)
- Цвет: #7a7f8a
- Max-width: 520px

### Лейблы (START SCANNER и подобные)
- Шрифт: Chakra Petch
- Размер: 19px
- Weight: **400** (тонкий)
- Letter-spacing: 3px
- Uppercase

### Body (будущие экраны)
- Размер: 16–18px
- Weight: 400
- Line-height: 1.4–1.6

### Буллиты (hero-bullets)
- Шрифт: Manrope
- Размер: **15px** (десктоп)
- Weight: **400**
- Цвет: #7a7f8a
- Расположение: горизонтально, gap 24px
- Иконки: Lucide (clock, clipboard-list), 18px, opacity 0.6

### Small
- Размер: 14px

## Кнопки
- **CTA (primary):** чёрный фон (#1a1a2e), белый текст, Manrope 17px/600
- Паддинг: 24px 36px
- Скругление: 16px
- Иконка: zap (молния, Lucide), заливка, белая, 22px — слева от текста
- **Hover:** фон лаймовый (#c8f542), текст и иконка → тёмные (#1a1a2e), glow-тень rgba(200,245,66,0.35), scale(1.04)
- **Secondary:** убрана (v19) — на Hero только одна CTA

## Карточки
- Фон: #ffffff
- Border-radius: 18px (основная), 14px (вложенные), 12px (контент), 7px (мелкие ячейки)
- Тень: 0 25px 60px rgba(0,0,0,0.10), 0 6px 20px rgba(0,0,0,0.05)
- Hover: translateY(-6px), усиление тени
- Padding: 12px (белая рамка вокруг контента)

## Иконки
- **Библиотека:** Lucide (v0.563.0, ISC лицензия) — ЕДИНСТВЕННЫЙ источник для UI-иконок
- **Стиль:** rounded stroke, stroke-width 2 (стандарт), 1.5 (крупные иконки)
- **Хранение:** `/assets/icons/` — SVG-файлы, `/assets/icons/scanner/` — иконки сканера (PNG от заказчика + Lucide SVG)
- **Подключение:** через `<img src="assets/icons/...">`, НЕ inline SVG
- **Имеющиеся иконки (Hero):** arrow-up-right, layers, settings, circle-plus, chevron-down, crosshair, zap, clock, clipboard-list, rocket, circle-help
- **Иконки сканера (цветные PNG от заказчика):** market.png, strategy.png, marketer.png
- **Иконки сканера (Lucide SVG):** binoculars.svg, coins.svg

### Иконки сканера — спецификация
- **Размер:** 70×70px
- **Двухслойная система:**
  - Тёмный слой (`cell-icon-dark`): `filter: grayscale(1) brightness(1.8)`, `opacity: 0.6`, flex-end, padding-bottom 20px
  - Цветной слой (`cell-icon-color` внутри `cell-white`): без фильтров, flex-end, margin-bottom 4px
- **Формат:** PNG (цветные от заказчика), SVG (Lucide для placeholder)
- **Подписи:** Manrope 10px/500, color #1a1a2e, text-align center, padding 0 3px

### Красная индикация «больных» ячеек сканера
- **Маркировка:** атрибут `data-sick` на элементе `.cell`
- **Активация:** класс `sick-active` добавляется когда сканер-линия проходит ниже ячейки
- **Фон:** #ec5353 (насыщенный красный)
- **Подпись:** цвет #ffffff, font-weight 600
- **Пульсация:** scale(1.05), 1.2s, ease-in-out, бесконечная
- **Свечение:** box-shadow 0 0 6px rgba(236,83,83,0.15)
- **Поведение:** при подъёме сканера обратно — красный снимается

## Адаптивность
- Мобайл: < 768px
- Планшет: 768–1024px
- Десктоп: > 1024px
- Mobile-first подход
- **Мобильную версию корректировать отдельно** — не масштабировать десктопные значения автоматически

### Мобильная адаптация сканера (breakpoint 560px)
- Обёртка: width calc(100vw - 40px)
- Ячейки: width/height auto, aspect-ratio 1, border-radius 12px, gap 8px
- Иконки: width 80%, height auto
- Подписи: font-size 8px
- Позиционирование: cell-icon-dark padding-bottom 10px, cell-white padding-bottom 1px, cell-icon-color margin-bottom 0
- Сканер-линия: left/right -10px
- Touch-поддержка: touchstart/touchmove/touchend
- Сокращённые подписи: Юнит-эк., SWOT, Каналы, Портрет

## Анимации — сдержанные, плавные, живые

> Референсы: templifica.com, smoothui.dev

### Общий принцип
Анимации деликатные и профессиональные, но сайт должен ощущаться **живым**. Блоки реагируют на мышку, элементы слегка «дышат», при hover появляются мягкие подсветки и свечения.

### Появление блоков при скролле (reveal on scroll)
- Эффект: **fade-in + blur** (opacity 0 → 1, filter: blur(8px) → blur(0)) + лёгкий сдвиг снизу (translateY: 20–30px → 0)
- Длительность: 0.6–0.8s
- Easing: ease-out
- Триггер: Intersection Observer, порог 0.15
- Элементы появляются по одному с задержкой 0.1–0.15s между соседними

### Реакция на мышку (mouse-tracking)
- Карточки/блоки: лёгкий **tilt-эффект** — наклон в сторону курсора (rotateX/rotateY ±3–5deg), perspective: 800–1000px
- **Подсветка при hover** — мягкое свечение (radial-gradient следует за курсором внутри карточки)
- Реализация: JS mousemove + CSS transform, transition 0.15s ease-out
- При уходе курсора — плавный возврат в исходное положение

### Hover-эффекты
- Кнопки: **scale(1.04)** + glow-тень, transition 0.25s ease
- Карточки: подъём (translateY: -6px) + усиление тени, transition 0.5s cubic-bezier
- Интерактивные лейблы: scale(1.04) + пульсация иконки (покачивание стрелки с задержкой 0.3s)

### Счётчик (counter animation)
- Тип: пошаговый (1 шаг в секунду), зацикленный
- Пульсация при смене: scale(1.3) → scale(1), transition 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
- Цвет при пульсации: #1a1a2e (тёмный), возврат к серому через 300ms
- Пауза между циклами: 2 секунды
- Триггер: Intersection Observer, threshold 0.5

### Микроанимации внутри блоков
- Декоративные элементы: «дыхание» (scale 1 → 1.05 → 1, opacity 0.9 → 1 → 0.9)
- Длительность: 4s, ease-in-out, бесконечный цикл
- Применять **только** к декоративным элементам, НЕ к тексту

### CTA-кнопки
- Без агрессивной пульсации — только плавный hover с мягким свечением
- При наведении: scale + glow-тень цвета кнопки

### Запрещено
- Агрессивные эффекты (bounce, shake, flash)
- Анимации, замедляющие скролл
- Тяжёлые анимации, нагружающие GPU без необходимости

### Технология
- CSS transitions + CSS @keyframes для простых эффектов
- Intersection Observer API для reveal on scroll
- Чистый JS для mouse-tracking (mousemove + requestAnimationFrame)
- `will-change: transform` на анимируемых элементах
- `@media (prefers-reduced-motion: reduce)` — обязательно
- Без тяжёлых библиотек, чистый JS
