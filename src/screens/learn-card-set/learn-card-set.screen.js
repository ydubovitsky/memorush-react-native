import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "../../components/learn-card-set/button/button.component";
import CardSetItemComponent from "../../components/learn-card-set/card-set-item/card-set-item.component";
import ProgressBarComponent from "../../components/learn-card-set/progress-bar/progress-bar.component";
import TipComponent from "../../components/learn-card-set/tip/tip.component";
import CongratulationComponent from "../../components/learn-card-set/congratulation/congratulation.component";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";

const LearnCardSetScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;

  const [isStarted, setIsStarted] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [progress, setProgress] = useState(0);

  // Temp array with learned words
  let learned = [];

  //TODO Переписать сигнатуру на cardSetById...
  const cardSet = useSelector(state => cardByIdSelector(state, cardSetId));
  const [cards, setCards] = useState(cardSet.cardList);

  const nextCardHandler = () => {
    currentPosition < (cards.length - 1) ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0);
  }

  /**
 * Логика метода, если пользователь знает карточку, то эта карточка вычитается из массива
 * неизученных карточек, тем самым сокращаются размеры массива, пока он не станет равным 0
 */
  const knowCardActionHandler = () => {
    if (cards.length > 0) {
      learned.push(cards[currentPosition]);
      setCards(cards.filter(card => !learned.includes(card)));

      //FIXME Пересчитываем прогресс!
      calculateCurrentProgress();
    }
  }

  const calculateCurrentProgress = () => {
    setProgress((cards.length - learned.length) / cards.length);
  }

  const setInitialStateHandler = () => {
    setIsStarted(false);
    learned = [];
    setCards(cardSet?.cardList);
  }

  const navigateToCardListHandler = () => {
    navigation.navigate(cardSet.name);
  }

  const showLearnCardViewElement = () => (
    cards.length !== 0
      ?
      <View style={styles.learnViewContainer}>
        <View style={styles.workArea}>
          <ProgressBarComponent progress={progress} />
          <CardSetItemComponent item={cards[currentPosition]} />
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonComponent style={styles.button} name="I know it" onClickHandler={knowCardActionHandler} />
          <ButtonComponent style={{ ...styles.button, backgroundColor: 'red' }} name="I don`t know it" onClickHandler={nextCardHandler} />
        </View>
      </View>
      :
      <CongratulationComponent
        setInitialStateHandler={setInitialStateHandler}
        navigateToCardListHandler={navigateToCardListHandler}
      />
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          {isStarted ? showLearnCardViewElement() : <TipComponent setIsStarted={setIsStarted} />}
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  learnViewContainer: {
    flex: 1
  },
  workArea: {
    flex: 5
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    justifyContent: 'space-around'
  },
  button: {
    height: "33%"
  }
})

export default LearnCardSetScreen;