import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

const FABGroupComponent = ({ navigation, fetchCardSetsDataHandler }) => {

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'view-dashboard-edit-outline' : 'plus'}
          fabStyle={{ backgroundColor: "#24B9E9" }}
          actions={[
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