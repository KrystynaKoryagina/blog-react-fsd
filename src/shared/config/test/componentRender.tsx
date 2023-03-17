import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, Store } from 'app/providers/store';
import i18n from '../i18n/i18n.jest';

interface ComponentRenderOptions {
  route?: string,
  initialState?: Store
}

export function componentRender(component: ReactNode, options?: ComponentRenderOptions) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
