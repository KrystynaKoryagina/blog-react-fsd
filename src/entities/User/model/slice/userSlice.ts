import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '@/shared/constants/localStorage';
import { User } from '../types/user';
import { UserStore } from '../types/userStore';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';

const initialState: UserStore = {
  authData: null,

  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(AUTH_TOKEN);

      if (user) {
        state.authData = JSON.parse(user);
      }

      state._inited = true; // TODO find way to remove _inited
    },
    logout: (state) => {
      localStorage.removeItem(AUTH_TOKEN); // TODO Bad practice
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, { payload }: PayloadAction<JsonSettings>) => {
          if (state?.authData) {
            state.authData.jsonSettings = payload;
          }
        },
      )
      .addCase(saveJsonSettings.rejected, (state, action) => {
        // TODO подумать надо или нет. Может какой то тоастер - настройки не сохранены
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

// TODO
/*

interface Store {
dispatch: Dispatch;
getState: () => StateScheme;
}

const isLoggedIn = isFulfilled(loginByUsername);
const isLoggedOut = isAnyOf(userActions.logout);

const authMiddleware = (store: Store) => (next: (action: Action) => void) => (action: Action): void => {
if (isLoggedIn(action)) {
localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
}

if (isLoggedOut(action)) {
localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

next(action);
};

export function createReduxStore(initialState: StateScheme) {
const rootReducers: ReducersMapObject<StateScheme> = {
counter: counterReducer,
user: userReducer,
loginForm: loginReducer,
};

return configureStore({
reducer: rootReducers,
devTools: __IS_DEV__,
preloadedState: initialState,
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});
}

*/
