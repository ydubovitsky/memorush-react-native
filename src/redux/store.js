import { configureStore } from '@reduxjs/toolkit';
import cardSetReducer  from './features/card-set/card-set.slice';
import authReducer from './features/auth/auth-slice';
import popupReducer from './features/popup/popup.slice';
import PopupMiddleware from './middleware/popup.middleware';

export default configureStore({
  reducer: {
    auth: authReducer,
    cardSet: cardSetReducer,
    popup: popupReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
})