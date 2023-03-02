import {
  cardSetFavoriteSelector
} from "../../../../redux/features/card-set/card-set.slice";
import { useSelector } from "react-redux";
import { FlatList, View, Text, StyleSheet } from "react-native";
import FavoritesSetListItem from "./components/favorites-set-list-item/favorites-set-list-item";

const FavoriteCardSetListComponent = ({navigation}) => {

  const cardSetFavorites = useSelector(cardSetFavoriteSelector);

  return (
    <View style={styles.container}>
      {cardSetFavorites.length > 0
        ?
        <FlatList
          data={cardSetFavorites}
          horizontal
          renderItem={(data) => <FavoritesSetListItem item={data.item} navigation={navigation}/>}
          keyExtractor={item => item.id}
        />
        :
        <View style={styles.favoritesPlaceholder}>
          <Text>You don't have any favorite sets yet 😉</Text>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favoritesPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "silver",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default FavoriteCardSetListComponent;