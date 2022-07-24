import { configureStore } from '@reduxjs/toolkit';
import cardSetReducer  from './features/card-set/card-set.slice';

export default configureStore({
  reducer: {
    cardSet: cardSetReducer
  }
})