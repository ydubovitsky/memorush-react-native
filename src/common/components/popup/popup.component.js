import React, { useEffect, useRef } from 'react';
import NotificationPopup from 'react-native-push-notification-popup';
import { useSelector } from 'react-redux';
import { popupStateSelector } from '../../../redux/features/popup/popup.slice';

const APPLICATION_NAME = "Memorush";

const PopupComponent = (props) => {

  const notificationRef = useRef();
  const { popupCount, popupEntity } = useSelector(popupStateSelector);

  useEffect(() => {
    if (popupCount > 0) {
      showNotification();
    }
  }, [popupCount])

  const showNotification = () => {
    notificationRef.current.show({
      appTitle: APPLICATION_NAME,
      timeText: 'Now',
      title: popupEntity.message,
      slideOutTime: 5000,
    });
  }

  return <NotificationPopup ref={notificationRef} />
}

export default PopupComponent;