import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import CardItemComponent from "../../components/card-set-details/card-item.component";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";

const CardSetDetailsScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;
  const cardSet = useSelector(state => cardByIdSelector(state, cardSetId));

  console.log(cardSet);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <FlatList
          data={cardSet.cardList}
          renderItem={({ item }) => <CardItemComponent item={item} navigation={navigation} />}
          keyExtractor={item => item.id}
        />
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

export default CardSetDetailsScreen;