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
  url: 'http://localhost:4242/api/frontend/',
  clientKey:
    '*:development.06c6ca81a4ffdef043d189275724e7a06ff3cef89fc3a6dacbe0986d',
  appName: 'production-project',
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
