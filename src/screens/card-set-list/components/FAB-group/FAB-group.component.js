import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { invalidateLoggedInUser } from '../../../../redux/features/auth/auth-slice';
import { FAB, Portal, Provider } from 'react-native-paper';

const FABGroupComponent = ({ navigation, fetchCardSetsDataHandler }) => {

  const dispatch = useDispatch();
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  const invalidateUserHandler = () => {
    dispatch(invalidateLoggedInUser());
    navigation.navigate("SignInScreen");
  }

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'view-dashboard-edit-outline' : 'plus'}
          fabStyle={{ backgroundColor: "#24B9E9" }}
          actions={[
            //TODO Добавить логику
            {
              icon: 'logout',
              label: 'Log out',
              onPress: invalidateUserHandler,
            },
            {
              icon: 'plus',
              label: 'Create new set',
              onPress: () => navigation.navigate("CardSetEditScreen"),
            },
            {
              icon: 'sync',
              label: 'Synchronize data',
              onPress: fetchCardSetsDataHandler,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: '#0195DD'
  }
})

export default FABGroupComponent;