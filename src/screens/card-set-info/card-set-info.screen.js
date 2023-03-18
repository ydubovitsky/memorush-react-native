import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";

const CardSetInfoScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;
  const {
    name,
    category,
    isFavorite,
    createdAt,
    updatedAt,
    flashCardArray
  } = useSelector(state => cardByIdSelector(state, cardSetId));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <Text style={styles.text}>Название: {name}</Text>
          <Text style={styles.text}>Категория: {category}</Text>
          <Text style={styles.text}>Количество карточек в наборе: {flashCardArray?.length}</Text>
          <Text style={styles.text}>Избранный набор? {isFavorite ? "Да" : "Нет"}</Text>
          <Text style={styles.text}>Создан: {createdAt}</Text>
          <Text style={styles.text}>Обновлен: {updatedAt}</Text>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    minWidth: 88,
  },
  text: {
    fontSize: 16
  }
});

export default CardSetInfoScreen;