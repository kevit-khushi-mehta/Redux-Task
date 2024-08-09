import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commentsReducer from  './slices/commentsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, commentsReducer);

export const store = configureStore({
  reducer: {
    comments: persistedReducer,
  },
});

export const persistor = persistStore(store);
