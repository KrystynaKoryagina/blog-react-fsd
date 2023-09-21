import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/test/componentRender';
import { AppRouter } from './AppRouter';
import { USER_MOCK, UserRole } from '@/entities/User';

describe('AppRouter', () => {
  test('should render Main Page', async () => {
    componentRender(<AppRouter />, {
      route: '/',
    });

    const page = await screen.findByTestId('main-page');
    expect(page).toBeInTheDocument();
  });

  test('should render About Page', async () => {
    componentRender(<AppRouter />, {
      route: '/about',
    });

    const page = await screen.findByTestId('about-page');
    expect(page).toBeInTheDocument();
  });

  test('should render Not Found Page', async () => {
    componentRender(<AppRouter />, {
      route: '/wrongpath',
    });

    const page = await screen.findByTestId('not-found-page');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to Main Page if user is not authorized', async () => {
    componentRender(<AppRouter />, {
      route: '/profile/1',
    });

    const page = await screen.findByTestId('main-page');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to Profile Page if user is authorized', async () => {
    componentRender(<AppRouter />, {
      route: '/profile/1',
      initialState: {
        user: {
          _inited: true,
          authData: USER_MOCK,
        },
      },
    });

    const page = await screen.findByTestId('profile-page');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to Forbidden Page if user does not have required role', async () => {
    componentRender(<AppRouter />, {
      route: '/admin',
      initialState: {
        user: {
          _inited: true,
          authData: {
            ...USER_MOCK,
            role: UserRole.USER,
          },
        },
      },
    });

    const page = await screen.findByTestId('forbidden-page');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to Admin Page if user has a required role', async () => {
    componentRender(<AppRouter />, {
      route: '/admin',
      initialState: {
        user: {
          _inited: true,
          authData: USER_MOCK,
        },
      },
    });

    const page = await screen.findByTestId('admin-page');
    expect(page).toBeInTheDocument();
  });
});
