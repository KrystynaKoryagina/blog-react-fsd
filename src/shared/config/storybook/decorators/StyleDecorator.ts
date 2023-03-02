import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();

// TODO ошибка почему
// return <div className="app light">{story()}<div/>
