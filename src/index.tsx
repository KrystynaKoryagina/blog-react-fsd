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
    'blog-project:default.28ebf15fe78bf2aa34509aa64592d35c9d3d472935f8747f7f15370b',
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
