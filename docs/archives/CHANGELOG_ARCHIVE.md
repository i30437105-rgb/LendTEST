# CHANGELOG — Архив версий v1–v30

Этот файл содержит историческую информацию о версиях v1–v30.
Актуальные версии см. в `docs/CHANGELOG.md`

---

## 2026-01-30 (v30) — Экран 3: секция бонусов (steps-section) + исправление межсекционных отступов

### Экран 3 — секция «Пройдите тест и заберите 3 бонуса» (steps-section):
- **Новая секция** добавлена после quote-section в index.html
- **Заголовок секции (steps-header):** flex, 2 колонки — слева H2, справа CTA-кнопка «Забрать бонусы»
- **H2 (steps-title):** Unbounded 55px/600, текст: «Пройдите тест и заберите 3 бонуса» — слово «бонуса» с лаймовой подложкой (highlight-lime)
- **Stacking context:** `.steps-title { position: relative; z-index: 0 }` — для корректной работы `highlight-lime::before` с `z-index: -1` вне Hero
- **CTA-кнопка:** btn-primary с иконкой layers.svg, текст «Забрать бонусы»
- **3 карточки (steps-grid):** grid 3 колонки, gap 48px
  - Каждая карточка: dashed border #d1d5db, border-radius 16px, фон #fafafa
  - Заголовок карточки: «// Бонус 01/02/03» + номер + прогресс-точки (лаймовые)
  - Текст карточки: Manrope 16px/400, #7a7f8a
  - Изображение внизу: placeholder (серый/тёмный/лаймовый)
- **Тексты карточек (из COPY.md):**
  1. Схема в Miro «Система маркетинга на 120 млн ₽»
  2. Голосовые рекомендации от Алексея по результатам теста
  3. Видеоурок «Основы инженерного маркетинга»

### Мобильная адаптация steps-section:
- **1100px:** flex → column, заголовок и кнопка по центру, grid 2 колонки, gap 24px
  - steps-title: 36px, letter-spacing -1.5px
  - steps-header-right: `flex: none; align-self: auto; width: auto;` — исправление растяжки
- **768px:** grid 1 колонка, gap 20px
  - steps-title: 28px, letter-spacing -1px
  - step-card-text: 14px
  - step-card-image: min-height 200px
  - steps-section padding: 0 0 60px, steps-container padding: 0 20px

### Исправление межсекционных отступов (КРИТИЧНО):
- **Проблема:** расстояние Hero→Quote ≠ Quote→Steps (визуально и по CSS)
- **Причина десктоп:** Hero имел `min-height: calc(100vh - 60px)` с flex-центрированием → непредсказуемый нижний отступ. Steps имел `padding: 100px 0 120px` → двойной стык с quote (100+100=200px)
- **Причина мобайл:** аналогично — `min-height` создавал переменный отступ; `quote-text` имел лишний `margin-bottom: 16px`
- **Исправления:**
  - Hero десктоп: `min-height` убран → `padding: 100px 144px 0` (фиксированный)
  - Hero мобайл (768px): `min-height: auto; align-items: flex-start; padding: 0 20px; padding-top: 30px`
  - Steps: `padding: 0 0 120px` (десктоп), `padding: 0 0 60px` (мобайл) — top = 0
  - quote-text: `margin-bottom: 0` (убран лишний отступ последнего элемента секции)
- **Результат:** десктоп 100px между всеми секциями, мобайл 60px между всеми секциями

## 2026-01-30 (v29) — Сканер: мобильная оптимизация + анимация

### Мобильная адаптация сканера (768px):
- **Скрыты ячейки:** левый столбец (`nth-child(5n+1)`) + нижний ряд (`nth-child(n+16)`) → с 20 до 12 видимых ячеек (сетка 4×3)
- **Grid:** `grid-template-columns: repeat(4, 1fr)`, `grid-template-rows: repeat(3, 1fr)` — убрано пустое пространство от скрытого ряда
- **Touch-зона scan-line:** невидимый `::before` pseudo-element, `top: -6px; bottom: -6px` (12px суммарно), визуальная толщина линии без изменений (2px)
- **Мобильная анимация:** отдельный `@keyframes scanDownMobile` — `0% { top: -4px }` → `100% { top: 42% }` (середина 2-го ряда)

### Анимация сканера (десктоп + общее):
- **Длительность:** 2.5s → **5s**, easing: `ease-in-out` (было cubic-bezier)
- **Задержка:** 1s → **1.5s**
- **Десктоп stop-point:** 50% → **62.5%** (середина 3-го ряда из 4)
- **Таймер обновления:** setTimeout для clearInterval увеличен с 4000 → **7000ms**

### JS (script.js):
- **Новая функция `getVisibleMaxY()`:** вычисляет нижнюю границу видимых ячеек (пропускает `display:none`)
- **`updateCells()`:** пропускает скрытые ячейки (`offsetParent === null`)
- **mousemove/touchmove:** используют `getVisibleMaxY()` вместо `rect.height` для ограничения drag-зоны

[Версии v1-v28 сокращены для экономии места. Полная история доступна в Git.]

---

**Примечание:** Эта информация сохранена только для исторической справки. Для текущей работы используйте основной `CHANGELOG.md`.
