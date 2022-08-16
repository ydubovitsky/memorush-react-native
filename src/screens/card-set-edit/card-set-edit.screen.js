import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import CardInputForm from "./atomic-components/card-input-form/card-input-form.component";
import CardSetInputForm from "./atomic-components/card-set-input-form/card-set-input-form.component";
import ButtonComponent from "./atomic-components/button/button.component";
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewCardSet,
  cardByIdSelector,
  deleteCardSet,
  updateCardSet
} from '../../redux/features/card-set/card-set.slice';

const INIT_CARD_SET_STATE = {
  title: "",
  tags: "",
  description: "",
  flashCardArray: {}
}

const CardSetEditScreen = (props) => {

  //! Читаем входные параметры
  const cardSetId = props.route.params?.cardSetId;

  const dispatch = useDispatch();
  // Init state for card set
  const [cardSetEntity, setCardSetEntity] = useState(INIT_CARD_SET_STATE);
  // Get data for card set with id = ...
  const cardSetById = useSelector(state => cardByIdSelector(state, cardSetId));

  //! Если во входных параметрах передан ID списка, тогда мы иницилизируем входные данные уже сусещтвующими данными
  useEffect(() => {
    if (cardSetId != null && cardSetById != null) {
      setCardSetEntity({
        title: cardSetById.title,
        tags: cardSetById.tags,
        description: cardSetById.description,
        flashCardArray: { ...cardSetById.flashCardArray }
      })
    }
  }, [])

  const cardSetEntityFormInputHandler = (name, value) => {
    setCardSetEntity({
      ...cardSetEntity,
      [name]: value
    })
  };

  const addFlashCardElement = () => {
    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray,
        [Object.keys(cardSetEntity.flashCardArray).length]: {}
      }
    })
  }

  const showActionButtonElements = () => {
    return (
      <>
        <ButtonComponent
          style={styles.button}
          onClickHandler={addFlashCardElement}
          name="Add new card"
          color="#18BBF1"
        />
        {/* //TODO Вынести в отдельную функцию! */}
        {cardSetId
          ?
          <>
            <ButtonComponent
              style={styles.button}
              onClickHandler={() => dispatch(updateCardSet({ cardSetId, cardSetEntity }))}
              name="Update"
              color="#5EBD6D"
            />
            <ButtonComponent
              style={styles.button}
              onClickHandler={() => dispatch(deleteCardSet({ cardSetId }))}
              name="Delete"
              color="red"
            />
          </>
          :
          <ButtonComponent
            style={styles.button}
            onClickHandler={() => dispatch(createNewCardSet(cardSetEntity))}
            name="Save"
            color="#3AE2CE"
          />
        }
        <ButtonComponent
          style={[styles.button, {marginRight: 0}]}
          onClickHandler={() => props.navigation.navigate("MainTabNavigation")}
          name="Go Back"
          color="silver"
        />
      </>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <View style={styles.cardSet}>
            <View style={styles.cardSetInfo}>
              <View style={styles.header}>
                <CardSetInputForm
                  values={cardSetEntity}
                  cardSetEntityFormInputHandler={cardSetEntityFormInputHandler}
                />
              </View>
              <View style={styles.cardsContainer}>
                <FlatList
                  ItemSeparatorComponent={() => <View
                    style={{
                      backgroundColor: 'silver',
                      height: 1,
                    }}
                  />}
                  //!FIXME Тут тонкий момент, вынести в отдельную функцию?
                  data={Object.entries(cardSetEntity.flashCardArray)}
                  renderItem={(data) => (
                    <CardInputForm
                      id={data.index}
                      item={data.item[1]}
                      cardSetEntity={cardSetEntity}
                      setCardSetEntity={setCardSetEntity}
                    />
                  )
                  }
                  keyExtractor={item => item}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            {showActionButtonElements()}
          </View>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden"
  },
  cardSet: {
    flex: 7,
    padding: 10,
    justifyContent: "center",
    justifyContent: "space-between",
  },
  cardSetInfo: {
    flex: 5,
    borderRadius: 20,
  },
  header: {
  },
  cardsContainer: {
    padding: 20,
    flex: 5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginRight: 5
  }
})

export default CardSetEditScreen;