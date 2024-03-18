import { rtkApi } from '@/shared/api/rtkQuery';
import { JsonSettingsRequest } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, JsonSettingsRequest>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
});

// export const { useSetJsonSettingsMutation } = userApi;

// NOTE https://redux-toolkit.js.org/rtk-query/usage/usage-without-react-hooks
export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
