import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FlagProvider, IConfig } from '@unleash/proxy-client-react';
import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/store';
import { ThemeProvider } from '@/shared/lib/contexts/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

const unleash_config: IConfig = {
  url: 'https://app.unleash-hosted.com/demo/api/frontend',
  clientKey:
    'blog-project:default.75548fe12ae8ddaabd0bd1f70faf5bc4421248380e85df4c0ff5a3ff',
  appName: 'blog-project',
};

root.render(
  <StrictMode>
    <FlagProvider config={unleash_config}>
      <BrowserRouter>
        <ErrorBoundary>
          <StoreProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </StoreProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </FlagProvider>
  </StrictMode>,
);
