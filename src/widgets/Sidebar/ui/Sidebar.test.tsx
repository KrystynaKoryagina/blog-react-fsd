import { fireEvent, screen } from '@testing-library/react';
import {
  componentRender,
} from '@/shared/config/test/componentRender';
import { Sidebar } from './Sidebar';
import '@testing-library/jest-dom';

describe('widgets/Sidebar', () => {
  test('should render successfully', () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should be toggled successfully', () => {
    componentRender(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
