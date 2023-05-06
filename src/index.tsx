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

// TODO ТЕСТИРОВАНИЕ
/*
  Урок 36 Тестирование фичи authByUsername. TestAsyncThunk
  Урок 43 Переменная __PROJECT__. Тесты на модуль профиля
*/
