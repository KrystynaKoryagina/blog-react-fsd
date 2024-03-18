import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/test/componentRender';
import '@testing-library/jest-dom';
import { NavigationItem } from './NavigationItem';
import { NavigationLink } from '../../model/types/navigation';
import MainIcon from '@/shared/assets/icons/main.svg';

const MOCK_ITEM: NavigationLink = {
  path: '/',
  text: 'Home',
  Icon: MainIcon,
};

describe('features/NavigationItem', () => {
  test('should render successfully', () => {
    componentRender(<NavigationItem item={MOCK_ITEM} collapsed={false} />);

    expect(screen.getByTestId('navigation-item')).toBeInTheDocument();
  });
});
