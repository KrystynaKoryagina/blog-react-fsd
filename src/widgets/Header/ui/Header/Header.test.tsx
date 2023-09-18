import { screen } from '@testing-library/react';
import { Header } from './Header';
import { componentRender } from '@/shared/config/test/componentRender';

describe('widget/Header', () => {
  test('should render successfully', () => {
    componentRender(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
