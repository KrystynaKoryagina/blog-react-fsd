import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/test/componentRender';
import { SidebarDeprecated } from './SidebarDeprecated';
import '@testing-library/jest-dom';

describe('widgets/SidebarDeprecated', () => {
  test('should render successfully', () => {
    componentRender(<SidebarDeprecated />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should be toggled successfully', () => {
    componentRender(<SidebarDeprecated />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
