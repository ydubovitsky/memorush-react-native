import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import {
  cardByIdSelector,
  createNewCardSet,
  deleteCardSet,
  updateCardSet
} from '../../redux/features/card-set/card-set.slice';
import ButtonComponent from "./atomic-components/button/button.component";
import CardInputForm from "./atomic-components/card-input-form/card-input-form.component";
import CardSetInputForm from "./atomic-components/card-set-input-form/card-set-input-form.component";

const INIT_CARD_SET_STATE = {
  title: "",
  tags: "",
  description: "",
  flashCardArray: {}
}

const CardSetEditScreen = (props) => {

  //! Читаем входные параметры
  //! Если этот параметр передан в компонент, ЭТО ЗНАЧИТ, что компонент будет использоваться для редактирования набора карточек, а не для создания нового набора!
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

  //! Если передан cardSetId -> будут отображены кнопки для редактирования, в противном случае кнопки создания
  const showEditOrCreateSetButtonsEl = () => {
    if (cardSetId) {
      return <>
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
    } else {
      <ButtonComponent
        style={styles.button}
        onClickHandler={() => dispatch(createNewCardSet(cardSetEntity))}
        name="Save"
        color="#3AE2CE"
      />
    }
  }

  //!TODO Переработать функцию, но имя flashCardArray -> имеет значение, потому что, бэкенд принимает именно это имя
  const showCardItemCreateFormListEl = () => {
    //? Тут хитрая структура данных, нужно бы упростить
    //? [["0", {"backSide": "fsd", "frontSide": ""}], ["1", {"backSide": "4", "frontSide": "123"}]]
    const el = Object.entries(cardSetEntity.flashCardArray);
    
    return el.map((_, idx) => (
      <CardInputForm
        id={idx}
        item={el[1]}
        cardSetEntity={cardSetEntity}
        setCardSetEntity={setCardSetEntity}
      />
    ))
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <View style={styles.cardSet}>
            <View style={styles.cardSetInfo}>
              <ScrollView>
                <CardSetInputForm
                  values={cardSetEntity}
                  cardSetEntityFormInputHandler={cardSetEntityFormInputHandler}
                />
                {showCardItemCreateFormListEl()}
              </ScrollView>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              style={styles.button}
              onClickHandler={addFlashCardElement}
              name="Add new card"
              color="#18BBF1"
            />
            {showEditOrCreateSetButtonsEl()}
            <ButtonComponent
              style={[styles.button, { marginRight: 0 }]}
              onClickHandler={() => props.navigation.navigate("MainTabNavigation")}
              name="Go Back"
              color="silver"
            />
          </View>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
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