import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/lib/contexts/theme';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/store';

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
