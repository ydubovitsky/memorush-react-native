import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ButtonComponent from "./atomic-components/button/button.component";
import CardSetItemComponent from "./components/card-set-item/card-set-item.component";
import CongratulationComponent from "./components/congratulation/congratulation.component";
import ProgressBarComponent from "./components/progress-bar/progress-bar.component";
import TipComponent from "./components/tip/tip.component";
import {
  flashCardArrayFromCardSetWithIdSelector,
  cardByIdSelector
} from "../../redux/features/card-set/card-set.slice";
import DialogComponent from "./components/dialog/dialog.component";
import { Provider } from "react-native-paper";

const LearnCardSetScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;

  const [isStarted, setIsStarted] = useState(false);
  //cardSetName
  const { name } = useSelector(state => cardByIdSelector(state, cardSetId));
  const flashCardArrayFromCardSetWithId = useSelector(state => flashCardArrayFromCardSetWithIdSelector(state, cardSetId));
  const [maxRounds, setMaxRounds] = useState(3);
  const [position, setPosition] = useState(0);
  const [isHintVisible, setIsHintVisible] = useState(false);

  const initState = {
    init: flashCardArrayFromCardSetWithId,
    learned: [],
    round: 0
  }

  const [cardSet, setCardSet] = useState(initState);

  // Обнулить все значение!
  const setInitStateHandler = () => {
    setCardSet(initState);
    setIsStarted(false);
  }

  useEffect(() => {
    if (cardSet.init.length === 0) {
      setCardSet({
        ...cardSet,
        init: cardSet.learned,
        learned: [],
        round: cardSet.round + 1
      });
    }
  }, [cardSet])

  /**
   * Логика метода, если пользователь знает карточку, то эта карточка вычитается из массива
   * неизученных карточек, тем самым сокращаются размеры массива, пока он не станет равным 0
   */
  const knowCardHandler = () => {
    setCardSet({
      ...cardSet,
      learned: [cardSet.init[position], ...cardSet.learned],
      init: cardSet.init.filter(card => card.id !== cardSet.init[position].id)
    })
    setPosition(0);
  }

  const dontKnowCardHandler = () => {
    if (position < cardSet.init.length - 1) {
      setPosition((prevPosition) => prevPosition + 1)
    } else {
      setPosition(0);
    }
  }

  const getCurrentCard = () => {
    return cardSet.init[position];
  }

  const toggleHintVisibleHandler = () => {
    setIsHintVisible(!isHintVisible)
  }

  const navigateToCardListHandler = () => {
    navigation.navigate(name);
  }

  const getCurrentProgress = () => (
    cardSet.round / maxRounds
  )

  const showLearnCardViewElement = () => (
    <Provider>
      <View style={styles.learnViewContainer}>
        <View style={styles.workArea}>
          <ProgressBarComponent progress={getCurrentProgress()} />
          <DialogComponent setMaxRounds={setMaxRounds} maxRounds={maxRounds}/>
          <View style={styles.cardContainer}>
            <CardSetItemComponent
              item={getCurrentCard()}
              isHintVisible={isHintVisible}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              style={[styles.action, { backgroundColor: "#5EBD6D" }]}
              onClickHandler={knowCardHandler}
              name="Знаю">
            </ButtonComponent>
            <ButtonComponent
              style={[styles.action, { backgroundColor: "#FD8344" }]}
              onClickHandler={toggleHintVisibleHandler}
              name="Подсказка"
            >
            </ButtonComponent>
            <ButtonComponent
              style={[styles.action, { marginRight: 0, backgroundColor: "#FC1444" }]}
              name="Не знаю"
              onClickHandler={dontKnowCardHandler}>
            </ButtonComponent>
          </View>
        </View>
      </View>
    </Provider>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        {!isStarted ?
          <TipComponent setIsStarted={setIsStarted} navigateToCardListHandler={navigateToCardListHandler} />
          :
          cardSet.round >= maxRounds
            ?
            <CongratulationComponent
              setInitialStateHandler={setInitStateHandler}
              navigateToCardListHandler={navigateToCardListHandler}
            />
            :
            showLearnCardViewElement()
        }
      </View>
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