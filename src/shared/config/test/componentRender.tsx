import { ReactNode, Suspense } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StoreSchema } from 'app/providers/store';
import i18n from 'shared/config/i18n/i18n.jest';

interface ComponentRenderOptions {
  route?: string,
  initialState?: StoreSchema
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback=''>
            {component}
          </Suspense>
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
