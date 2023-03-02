import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from './index';

describe('Button', () => {
  test('Test render', () => {
    render(<Button variant={ButtonType.GHOST}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test ghost theme', () => {
    render(<Button variant={ButtonType.GHOST}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('ghost');
    screen.debug();
  });
});
