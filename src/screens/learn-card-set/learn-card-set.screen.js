import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "./atomic-components/button/button.component";
import CardSetItemComponent from "./components/card-set-item/card-set-item.component";
import CongratulationComponent from "./components/congratulation/congratulation.component";
import ProgressBarComponent from "./components/progress-bar/progress-bar.component";
import TipComponent from "./components/tip/tip.component";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";

const LearnCardSetScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;

  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [progress, setProgress] = useState(0);

  // Temp array with learned words
  let learned = [];

  //TODO Переписать сигнатуру на cardSetById...
  const cardSet = useSelector(state => cardByIdSelector(state, cardSetId));
  const [cards, setCards] = useState(cardSet.flashCardArray);

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
    setCards(cardSet?.flashCardArray);
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
          <View style={styles.cardContainer}>
            <CardSetItemComponent
              item={cards[currentPosition]}
              isHintVisible={isHintVisible}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              style={[styles.action, { backgroundColor: "#5EBD6D" }]}
              onClickHandler={knowCardActionHandler}
              name="I know it">
            </ButtonComponent>
            <ButtonComponent
              style={[styles.action, { backgroundColor: "#FD8344" }]}
              onClickHandler={() => setIsHintVisible(!isHintVisible)}
              name="Show me hint"
            >
            </ButtonComponent>
            <ButtonComponent
              style={[styles.action, { marginRight: 0, backgroundColor: "#FC1444" }]}
              name="I dont't know"
              onClickHandler={nextCardHandler}>
            </ButtonComponent>
          </View>
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
          {
            isStarted
              ?
              showLearnCardViewElement()
              :
              <TipComponent
                setIsStarted={setIsStarted}
                navigateToCardListHandler={navigateToCardListHandler}
              />
          }
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  learnViewContainer: {
    flex: 1,
  },
  workArea: {
    flex: 5,
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 7
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  action: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: 5
  }
})

export default LearnCardSetScreen;