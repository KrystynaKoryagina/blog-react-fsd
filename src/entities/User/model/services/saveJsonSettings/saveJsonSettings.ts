import i18n from '@/shared/config/i18n/i18n';
import { buildAsyncThunk } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';
import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData';
import { setJsonSettingsMutation } from '../../../api/userApi';
import { getJsonSettings } from '../../selectors/getJsonSettings/getJsonSettings';

const saveJsonSettingsAsyncThunk = buildAsyncThunk<
  JsonSettings,
  JsonSettings,
  string
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { rejectWithValue, getState, dispatch } = thunkAPI;
  const user = getUserAuthData(getState());
  const currentJsonSettings = getJsonSettings(getState());

  try {
    if (!user) {
      // TODO add translation
      throw new Error(i18n.t(''));
    }

    const response = await dispatch(
      setJsonSettingsMutation({
        userId: user.id,
        jsonSettings: {
          ...currentJsonSettings,
          ...newJsonSettings,
        },
      }),
    ).unwrap();

    if (!response?.jsonSettings) {
      throw new Error();
    }

    return response.jsonSettings;
  } catch (err) {
    // TODO add translation
    console.log('err', err);
    return rejectWithValue(i18n.t('Something went wrong.'));
  }
});

export const {
  asyncThunk: saveJsonSettings,
  useAsyncThunk: useSaveJsonSettings,
} = saveJsonSettingsAsyncThunk;
