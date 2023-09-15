import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '@/shared/constants/localStorage';
import { User } from '../types/user';
import { UserStore } from '../types/userStore';

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

      state._inited = true;
    },
    logout: (state) => {
      localStorage.removeItem(AUTH_TOKEN); // TODO Bad practice
      state.authData = null;
    },
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
