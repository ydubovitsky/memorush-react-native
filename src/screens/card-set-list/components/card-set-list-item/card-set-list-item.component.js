import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { setFavoriteCardSet } from '../../../../redux/features/card-set/card-set.slice';
import { useDispatch } from 'react-redux';

const DEFAULT_IMAGE_PATH = "../../../../../assets/images/flash-card-set/jukebox-print-FUohNQatzVs-unsplash.jpg";

const CardSetListItem = ({ item, navigation }) => {

  const {
    id,
    title,
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
          cardSetName: title
        })}
    >
      <ImageBackground
        source={require(DEFAULT_IMAGE_PATH)}
        resizeMode="cover"
        imageStyle={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        }}
        style={styles.image}
      >
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
    <View style={styles.info}>
      <View style={styles.cardInfo}>
        <Text>Cards count: {flashCardArray.length}</Text>
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
        <Text>Description: {description || "I'll fill it out later"}</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
    paddingBottom: 10,
    marginVertical: 8,
    borderRadius: 20,
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
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10
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
    flex: 1
  }
})

export default CardSetListItem;