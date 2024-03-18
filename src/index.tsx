import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/lib/contexts/theme';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/store';
import { App } from '@/app/App';

// import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);

// TODO add StrictMode

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);

// TODO
/*
  Урок 45 file templates
  Урок 63 Оптимизация больших списков. Виртуализация 26:40
  Урок 71 HTML report для тестов 04:43
  Урок 85 Настраиваем Vite. Быстрая сборка для dev Просмотрено
  75 Миграция на 18 реакт. Рефакторинг. Storybook mock addon 23:33 + стрим 12 (Подскажите пожалуйста, как в NotificationList.stories воспроизвести ситуацию isLoading, грубо говоря сделать сторю что бы скелетоны показались ?)
  89 Опции в линтере. Добавляем поддержку алисов в наш eslint плагин 08:35 + урок где этот плагин писали
  90 Ограничиваем доступ к внутренностям модуля. Public api imports 12:40
  91 Testing public api. Micromatch. Тесты на eslint плагин 11:17
  93 Layer imports. Улучшаем правила арх-ры. Запрещаем импорт из верхних слоев 17:40
  127 Json Settings. Настройки пользователя. Localstorage на максималках 25:50 - Сохранение темы работает некорректно
  128 Запрос на получение пользователя. Избавляемся от заглушки в Localstorage - Сохранение темы работает некорректно

  // TODO когда будет новфй дизайн использовать
  Урок 67 Headless UI. React aria. Listbox 33:15

  !!!! LOKI NOT SUPPORTED STORYBOOK 7 !!!!
*/
