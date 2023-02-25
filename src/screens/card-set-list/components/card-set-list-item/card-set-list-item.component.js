import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setFavoriteCardSet } from '../../../../redux/features/card-set/card-set.slice';
import { cutStringIfLengthMoreThan } from '../../../../utils/string.utils';

const CardSetListItem = ({ item, navigation }) => {

  const {
    id,
    name,
    categoryName,
    flashCardArray,
    description,
    isFavorite,
    createdAt
  } = item;

  const dispatch = useDispatch();

  return (<View style={styles.container}>
    <TouchableOpacity
      style={styles.description}
      onPress={() => navigation.navigate(
        "CardSetDetailsTabNavigation",
        {
          cardSetId: id,
          cardSetName: name
        })}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    <View style={styles.info}>
      <View style={styles.cardInfo}>
        <Text>Cards: {flashCardArray?.length}</Text>
        <Text>Category: {cutStringIfLengthMoreThan(7, categoryName)}</Text>
        <Text>Created: {createdAt}</Text>
        <Icon
          raised
          name='heart'
          type='font-awesome'
          color={isFavorite ? '#f50' : 'silver'}
          onPress={() => dispatch(setFavoriteCardSet(id))}
          size={10}
        />
      </View>
      <View style={styles.cardDescription}>
        <Text>Description: {cutStringIfLengthMoreThan(15, description) || "I'll fill it out later"}</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    minHeight: 250,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "white",
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
  description: {
    flex: 9,
    width: "100%",
    height: "100%",
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  text: {
    fontSize: 40,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-around', //Centered horizontally
    alignItems: 'center', //Centered vertically,
  },
  cardInfo: {
    flex: 2,
    width: '100%',
    flexDirection: "row",
    alignItems: 'center', //Centered vertically,
    justifyContent: 'space-around'
  },
  cardDescription: {
    flex: 1,
  }
})

export default CardSetListItem;