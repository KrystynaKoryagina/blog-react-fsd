import userEvent from '@testing-library/user-event';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import {
  componentRender,
} from '@/shared/config/test/componentRender';
import '@testing-library/jest-dom';
import { EditProfileCard } from './EditProfileCard';
import { PROFILE_MOCK } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { USER_MOCK } from '@/entities/User';
import { StoreSchema } from '@/app/providers/store';
import { $axiosApi } from '@/shared/api/axios';

const initialState: DeepPartial<StoreSchema> = {
  profile: {
    data: PROFILE_MOCK,
    editData: PROFILE_MOCK,
    readOnly: true,
  },
  user: {
    authData: USER_MOCK,
  },
};

const asyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  profile: profileReducer,
};

describe('features/EditProfileCard', () => {
  test('should render successfully', () => {
    componentRender(<EditProfileCard id='1' />);

    expect(screen.getByTestId('edit-profile-card')).toBeInTheDocument();
  });

  test('should switch to edit mode', async () => {
    componentRender(<EditProfileCard id='1' />, {
      initialState,
      asyncReducers,
    });

    await userEvent.click(screen.getByTestId('edit-profile-card-edit-btn'));

    expect(screen.getByTestId('edit-profile-card-edit-cancel')).toBeInTheDocument();
    expect(screen.getByTestId('edit-profile-card-edit-save')).toBeInTheDocument();
  });

  test('should reset input values by click on cancel and switch to readonly mode', async () => {
    componentRender(<EditProfileCard id='1' />, {
      initialState,
      asyncReducers,
    });

    const firstname = screen.getByTestId('profile-card-firstname');
    const lastname = screen.getByTestId('profile-card-lastname');

    await userEvent.click(screen.getByTestId('edit-profile-card-edit-btn'));

    await userEvent.clear(firstname);
    await userEvent.clear(lastname);

    await userEvent.type(firstname, 'new name');
    await userEvent.type(lastname, 'new lastname');

    expect(firstname).toHaveValue('new name');
    expect(lastname).toHaveValue('new lastname');

    await userEvent.click(screen.getByTestId('edit-profile-card-edit-cancel'));

    screen.debug();

    expect(firstname).toHaveValue('Krystyna');
    expect(lastname).toHaveValue('Koryagina');
    expect(screen.getByTestId('edit-profile-card-edit-btn')).toBeInTheDocument();
  });

  test('should show error by click on Save if no firstname', async () => {
    componentRender(<EditProfileCard id='1' />, {
      initialState,
      asyncReducers,
    });

    const editBtn = screen.getByTestId('edit-profile-card-edit-btn');
    const firstname = screen.getByTestId('profile-card-firstname');

    await userEvent.click(editBtn);

    await userEvent.clear(firstname);

    await userEvent.click(screen.getByTestId('edit-profile-card-edit-save'));

    expect(screen.getByTestId('error-msg')).toBeInTheDocument();
    expect(screen.getByTestId('error-msg')).toHaveTextContent('ERRORS.INCORRECT_USER_DATA');
  });

  test('should call PUT request if no  validation errors', async () => {
    const mockApi = jest.spyOn($axiosApi, 'put');

    componentRender(<EditProfileCard id='1' />, {
      initialState,
      asyncReducers,
    });

    const editBtn = screen.getByTestId('edit-profile-card-edit-btn');
    const firstname = screen.getByTestId('profile-card-firstname');
    const lastname = screen.getByTestId('profile-card-lastname');

    await userEvent.click(editBtn);

    await userEvent.clear(firstname);
    await userEvent.clear(lastname);

    await userEvent.type(firstname, 'new name');
    await userEvent.type(lastname, 'new lastname');

    await userEvent.click(screen.getByTestId('edit-profile-card-edit-save'));

    expect(mockApi).toHaveBeenCalledWith('/profile/1', {
      ...PROFILE_MOCK,
      firstName: 'new name',
      lastName: 'new lastname',
    });
  });
});
