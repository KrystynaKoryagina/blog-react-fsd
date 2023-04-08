import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Theme } from 'shared/lib/contexts/theme';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  login: { username: 'username', password: '12345678' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({
  login: { username: 'username', password: '12345678' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  login: { error: 'Something went wrong' },
})];

export const withErrorDark = Template.bind({});
withErrorDark.args = {};
withErrorDark.parameters = { theme: Theme.DARK };
withErrorDark.decorators = [StoreDecorator({
  login: { error: 'Something went wrong' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: { isLoading: true },
})];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.parameters = { theme: Theme.DARK };
LoadingDark.decorators = [StoreDecorator({
  login: { isLoading: true },
})];
