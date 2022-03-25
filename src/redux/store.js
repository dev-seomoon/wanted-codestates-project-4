import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tabReducer from './tabSlice';
import likeReducer from './likeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['like'],
};

const rootReducer = combineReducers({ tab: tabReducer, like: likeReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
