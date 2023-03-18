import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import CardItemComponent from "./components/card-item.component";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";
import AppbarComponent from "./components/app-bar.component";
import EmptySetInformerComponent from "./components/empty-set-informer.component";

const CardSetDetailsScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;
  const cardSet = useSelector(state => cardByIdSelector(state, cardSetId));

  const navigateToCardScreen = () => {
    navigation.navigate("Наборы");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <AppbarComponent navigateToCardScreen={navigateToCardScreen} />
        <View style={styles.cardSetListContainer}>
          {
            cardSet.flashCardArray != false
              ?
              <FlatList
                data={cardSet.flashCardArray}
                renderItem={({ item }) => <CardItemComponent item={item} navigation={navigation} />}
                keyExtractor={item => item.id}
              />
              :
              <EmptySetInformerComponent />
          }
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardSetListContainer: {
    padding: 10,
    flex: 1
  }
})

export default CardSetDetailsScreen;