import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import CardItemComponent from "../../components/card-set-details/card-item.component";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";
import AppbarComponent from "../../components/card-set-details/app-bar.component";

const CardSetDetailsScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;
  const cardSet = useSelector(state => cardByIdSelector(state, cardSetId));

  const navigateToCardScreen = () => {
    navigation.navigate("Cards");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <AppbarComponent navigateToCardScreen={navigateToCardScreen} />
        <View style={styles.cardSetListContainer}>
          <FlatList
            data={cardSet?.cardList}
            renderItem={({ item }) => <CardItemComponent item={item} navigation={navigation} />}
            keyExtractor={item => item.id}
          />
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