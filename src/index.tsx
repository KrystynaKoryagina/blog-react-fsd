import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/lib/contexts/theme';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/store';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);

// TODO
/*
  Урок 36 Тестирование фичи authByUsername. TestAsyncThunk
  Урок 43 Переменная __PROJECT__. Тесты на модуль профиля
  Урок 45 file templates
  Урок 63 Оптимизация больших списков. Виртуализация 26:40
  Урок 71 HTML report для тестов 04:43
  Урок 72 Исправляем баг с виртуализацией. Пишем RTL тесты на карточку профиля 21:14

  // TODO когда будет новфй дизайн использовать
  Урок 67 Headless UI. React aria. Listbox 33:15
*/
