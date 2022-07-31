import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import AppbarComponent from "../../components/card-set-list/app-bar/app-bar.component";
import CardSetListItem from "../../components/card-set-list/card-set-list-item/card-set-list-item.component";
import CardSetTableComponent from "../../components/card-set-list/card-set-table/card-set-table.component";
import FavoritesSetListItem from "../../components/card-set-list/favorites-set-list-item/favorites-set-list-item";
import { cardEntitySelector, getAllCardSets } from "../../redux/features/card-set/card-set.slice";

const CardSetListScreen = (props) => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);
  const [toggleCardsView, setToggleCardsView] = useState(true);

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const showCardsElement = () => (
    toggleCardsView ?
      <FlatList
        data={cardEntity}
        renderItem={({ item }) => <CardSetListItem item={item} navigation={props.navigation} />}
        keyExtractor={item => item.id}
      />
      :
      <CardSetTableComponent
        navigation={props.navigation}
        cardEntity={cardEntity}
      />
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <AppbarComponent
          cardViewToggleHandler={() => setToggleCardsView(!toggleCardsView)}
        />
        <View style={styles.favoritesList}>
          <FlatList
            data={cardEntity}
            horizontal
            renderItem={FavoritesSetListItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.cardSetListContainer}>
          {showCardsElement()}
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarContainer: {
    flex: 1,
  },
  cardSetListContainer: {
    padding: 10,
    flex: 20
  },
  favoritesList: {
    flex: 4,
    padding: 10,
    flexDirection: "row"
  }
})

export default CardSetListScreen;