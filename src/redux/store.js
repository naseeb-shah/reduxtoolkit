
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice';
import dataReducer from './dataslice';

export default configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});
