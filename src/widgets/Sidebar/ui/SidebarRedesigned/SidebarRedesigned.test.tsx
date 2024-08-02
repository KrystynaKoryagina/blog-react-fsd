import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/test/componentRender';
import { SidebarRedesigned } from './SidebarRedesigned';
import '@testing-library/jest-dom';

describe('widgets/SidebarRedesigned', () => {
  test('should render successfully', () => {
    componentRender(<SidebarRedesigned />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should be toggled successfully', () => {
    componentRender(<SidebarRedesigned />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
