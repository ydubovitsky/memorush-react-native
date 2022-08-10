import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const DEFAULT_IMAGE_PATH = "../../../../assets/images/flash-card-set/jukebox-print-FUohNQatzVs-unsplash.jpg";

const CardSetListItem = ({ item, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.description}
      onPress={() => navigation.navigate(
        "CardSetDetailsTabNavigation",
        {
          cardSetId: item.id,
          cardSetName: item.name
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
        <Text style={styles.text}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
    <View style={styles.info}>
      <View style={styles.cardInfo}>
        <Text>Cards count: {item.cardList.length}</Text>
        <Text>Created: {item.createdAt}</Text>
        <Icon
          raised
          name='heart'
          type='font-awesome'
          color='#f50'
          size={10}
        />
      </View>
      <View style={styles.cardDescription}>
        <Text>Description: {item.description || "I'll fill it out later"}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
    paddingBottom: 10,
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: "white"
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