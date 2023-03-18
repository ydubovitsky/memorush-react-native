import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonComponent from "../../atomic-components/button/button.component";

const TipComponent = ({ setIsStarted, navigateToCardListHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Как работает тренажер?</Text>
        <Text style={styles.text}>1. Выберите необходимое количество кругов для повторения</Text>
        <Text style={styles.text}>2. Посмотрите на карточку, если вы знаете перевод, нажмите кнопку «Знаю», в противном случае «Не знаю»</Text>
        <Text style={styles.text}>3. Вы можете перевернуть карточку, чтобы увидеть заднюю сторону, просто нажав на нее</Text>
        <Text style={styles.text}>4. Когда вы выучите все карточки, вы увидите сообщение с поздравлением</Text>
        <Text style={styles.text}>5. В конце вы можете повторить слова еще раз или выбрать другой набор</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonComponent
          name="Начать"
          style={[styles.button, { backgroundColor: "#5EBD6D" }]}
          onClickHandler={() => setIsStarted(true)}
        />
        <ButtonComponent
          name="Назад"
          style={[styles.button, { marginRight: 0 }]}
          onClickHandler={navigateToCardListHandler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
  },
  textContainer: {
    flex: 7,
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "left"
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginRight: 5,
  }
})

export default TipComponent;
