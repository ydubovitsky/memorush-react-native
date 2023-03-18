import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Text, RadioButton } from 'react-native-paper';

const DialogComponent = ({ setMaxRounds, maxRounds }) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  const onChangeRadioValue = (value) => {
    setMaxRounds(parseInt(value));
  }

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Выберите количество кругов для повторения слов:</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group onValueChange={newValue => onChangeRadioValue(newValue)} value={maxRounds + ''}>
              <View style={styles.radioButtonView}>
                <RadioButton value="3" />
                <Text>Три</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton value="4" />
                <Text>Четыре</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton value="5" />
                <Text>Пять</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton value="6" />
                <Text>Шесть</Text>
              </View>
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Выбрать</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonView: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  }
})

export default DialogComponent;