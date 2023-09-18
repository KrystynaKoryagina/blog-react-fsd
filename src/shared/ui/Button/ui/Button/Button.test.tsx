import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonSize, ButtonType } from '../../consts/button';

describe('shared/Button', () => {
  test('should render successfully', () => {
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test')).toHaveClass('primary sm');
  });

  test('with variant ButtonType.GHOST should have appropriate class', () => {
    render(<Button variant={ButtonType.GHOST}>Test</Button>);

    expect(screen.getByRole('button')).toHaveClass('ghost');
  });

  test('with variant ButtonType.PRIMARY_INVERTED should have appropriate class', () => {
    render(<Button variant={ButtonType.PRIMARY_INVERTED}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('primary_inverted');
  });

  test('with variant ButtonType.GHOST_INVERTED should have appropriate class', () => {
    render(<Button variant={ButtonType.GHOST_INVERTED}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('ghost_inverted');
  });

  test('with variant ButtonType.OUTLINE should have appropriate class', () => {
    render(<Button variant={ButtonType.OUTLINE}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('outline');
  });

  test('with size ButtonType.SM should have appropriate class', () => {
    render(<Button size={ButtonSize.SM}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('sm');
  });

  test('with size ButtonType.MD should have appropriate class', () => {
    render(<Button size={ButtonSize.MD}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('md');
  });

  test('with size ButtonType.LG should have appropriate class', () => {
    render(<Button size={ButtonSize.LG}>Test</Button>);

    expect(screen.getByTestId('button')).toHaveClass('lg');
  });

  test('should be square', () => {
    render(<Button square>{'<'}</Button>);

    expect(screen.getByTestId('button')).toHaveClass('square');
  });

  test('should be disabled', () => {
    render(<Button disabled>Test</Button>);

    expect(screen.getByTestId('button')).toHaveAttribute('disabled');
  });
});
