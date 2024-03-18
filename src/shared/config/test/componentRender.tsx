import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider, StoreSchema } from '@/app/providers/store';
import i18n from '@/shared/config/i18n/i18n.jest';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {},
) {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback="">{component}</Suspense>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
