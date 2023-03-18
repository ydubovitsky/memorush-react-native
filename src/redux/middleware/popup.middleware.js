import { showPopup } from "../features/popup/popup.slice";

const POPUP_PROPERTIES = {
  loginFulfilled: {
    message: "Вы успешно вошли",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  }, loginRejected: {
    message: "LOGIN ERROR",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  invalidateLoggedInUser: {
    message: "Вы вышли из вашей учетной записи",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  cardCreateFulfilled: {
    message: "Набор карточек успешно создан",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  cardDeleteFulfilled: {
    message: "Набор карточек удален",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataUpdated: {
    message: "Данные пользователя обновлены",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationFulfilled: {
    message: "Поздравляем! Вы успешно зарегистрировались, теперь вы можете войти",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataRejected: {
    message: "При обновлении данных возникла ошибка",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  setFavoriteFulfilled: {
    message: "Избранное!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateCardSetFulfilled: {
    message: "Набор карточек обновлен!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  }
}

const PopupMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    case 'auth/login/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.loginFulfilled));
      break;
    }
    case 'auth/login/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.loginRejected));
      break;
    }
    case 'auth/invalidateLoggedInUser': {
      dispatch(showPopup(POPUP_PROPERTIES.invalidateLoggedInUser));
      break;
    }
    case 'card/create/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.cardCreateFulfilled));
      break;
    }
    case 'card/delete/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.cardDeleteFulfilled));
      break;
    }
    case 'card/setFavorite/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.setFavoriteFulfilled));
      break;
    }
    case 'card/update/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.updateCardSetFulfilled));
      break;
    }
    case 'auth/updateUserData/updated': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataUpdated));
      break;
    }
    case 'auth/updateUserData/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataRejected));
      break;
    }
    case 'auth/registration/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationFulfilled));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;