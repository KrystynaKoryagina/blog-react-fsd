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

  // TODO когда будет новфй дизайн использовать
  Урок 67 Headless UI. React aria. Listbox 33:15
  !!!! LOKI NOT SUPPORTED STORYBOOK 7 !!!!
*/
