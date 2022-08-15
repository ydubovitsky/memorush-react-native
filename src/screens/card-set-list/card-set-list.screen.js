import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import AppbarComponent from "../../components/card-set-list/app-bar/app-bar.component";
import CardSetListItem from "../../components/card-set-list/card-set-list-item/card-set-list-item.component";
import CardSetTableComponent from "../../components/card-set-list/card-set-table/card-set-table.component";
import FABGroupComponent from "../../components/card-set-list/FAB-group/FAB-group.component";
import FavoritesSetListItem from "../../components/card-set-list/favorites-set-list-item/favorites-set-list-item";
import {
  cardEntitySelector,
  getAllCardSets,
  cardSetFavoriteSelector
} from "../../redux/features/card-set/card-set.slice";

const CardSetListScreen = (props) => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);
  const cardSetFavorites = useSelector(cardSetFavoriteSelector);
  const [toggleCardsView, setToggleCardsView] = useState(true);

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const fetchCardSetsDataHandler = () => {
    dispatch(getAllCardSets());
  }

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

  const showFavoritesCardsetElements = () => {
    return (
      cardSetFavorites.length > 0
        ?
        <FlatList
          data={cardSetFavorites}
          horizontal
          renderItem={(data) => <FavoritesSetListItem item={data.item} />}
          keyExtractor={item => item.id}
        />
        :
        <View style={styles.favoritesPlaceholder}>
          <Text>You don't have any favorite sets yet 😉</Text>
        </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <AppbarComponent
          cardViewToggleHandler={() => setToggleCardsView(!toggleCardsView)}
        />
        <View style={styles.favoritesList}>
          {showFavoritesCardsetElements()}
        </View>
        <View style={styles.cardSetListContainer}>
          {showCardsElement()}
        </View>
        <FABGroupComponent
          navigation={props.navigation}
          fetchCardSetsDataHandler={fetchCardSetsDataHandler}
        />
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
  },
  favoritesPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  }
})

export default CardSetListScreen;