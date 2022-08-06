import { configureStore } from '@reduxjs/toolkit';
import cardSetReducer  from './features/card-set/card-set.slice';
import authReducer from './features/auth/auth-slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    cardSet: cardSetReducer
  }
})