import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import {
  cardEntitySelector,
  getAllCardSets,
  filterCardSetByNameSelector
} from "../../redux/features/card-set/card-set.slice";
import FABGroupComponent from "./components/FAB-group/FAB-group.component";
import AppbarComponent from "./components/app-bar/app-bar.component";
import CardSetListItem from "./components/card-set-list-item/card-set-list-item.component";
import CardSetTableComponent from "./components/card-set-table/card-set-table.component";
import FavoriteCardSetListComponent from "./components/favorite-card-set-list/favorite-card-set-list.component";
import { useIsFocused } from "@react-navigation/native";

const CardSetListScreen = (props) => {

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [searchTextString, setSearchTextString] = useState("");
  const cardEntity = useSelector(state => filterCardSetByNameSelector(state, searchTextString))
  const [toggleCardsView, setToggleCardsView] = useState(true);

  useEffect(() => {
    dispatch(getAllCardSets());
  }, [isFocused]);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <AppbarComponent cardViewToggleHandler={() => setToggleCardsView(!toggleCardsView)} setSearchTextString={searchTextString} setSearchTextString={setSearchTextString}/>
        <View style={styles.favoritesList}>
          <FavoriteCardSetListComponent navigation={props.navigation}/>
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
  }
})

export default CardSetListScreen;