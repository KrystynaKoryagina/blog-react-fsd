import { screen } from '@testing-library/react';
import { HeaderDeprecated } from './HeaderDeprecated';
import { componentRender } from '@/shared/config/test/componentRender';

describe('widget/HeaderDeprecated', () => {
  test('should render successfully', () => {
    componentRender(<HeaderDeprecated />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
