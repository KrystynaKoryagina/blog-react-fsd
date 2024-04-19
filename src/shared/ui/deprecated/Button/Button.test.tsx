import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonSize, ButtonType } from './consts/button';

describe('shared/Button', () => {
  test('should render successfully', () => {
    render(<Button>ButtonText</Button>);

    expect(screen.getByText('ButtonText')).toBeInTheDocument();
    expect(screen.getByText('ButtonText')).toHaveClass('solid sm');
  });

  test('with variant ButtonType.GHOST should have appropriate class', () => {
    render(<Button variant={ButtonType.GHOST}>ButtonText</Button>);

    expect(screen.getByRole('button')).toHaveClass('ghost');
  });

  test('with variant ButtonType.OUTLINE should have appropriate class', () => {
    render(<Button variant={ButtonType.OUTLINE}>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveClass('outline');
  });

  test('with size ButtonType.SM should have appropriate class', () => {
    render(<Button size={ButtonSize.SM}>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveClass('sm');
  });

  test('with size ButtonType.MD should have appropriate class', () => {
    render(<Button size={ButtonSize.MD}>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveClass('md');
  });

  test('with size ButtonType.LG should have appropriate class', () => {
    render(<Button size={ButtonSize.LG}>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveClass('lg');
  });

  test('active button should have appropriate class', () => {
    render(<Button isActive>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveClass('active');
  });

  test('should be disabled', () => {
    render(<Button disabled>ButtonText</Button>);

    expect(screen.getByTestId('button')).toHaveAttribute('disabled');
  });
});
