import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const DEFAULT_IMAGE_PATH = "../../../../assets/images/flash-card-set-cover-one.jpg";

const CardSetListItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate(
      "CardSetDetailsTabNavigation",
      {
        cardSetId: item.id,
        cardSetName: item.name
      })}
  >
    <View style={styles.description}>
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
    </View>
    <View style={styles.info}>
      <Text>{item.description}</Text>
      <Text>Cards count: {item.cardList.length}</Text>
      <Text>Created: {item.createdAt}</Text>
      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        size={10}
      />
    </View>
  </TouchableOpacity>
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
    flex: 5,
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
    fontSize: 20,
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around', //Centered horizontally
    alignItems: 'center', //Centered vertically
  }
})

export default CardSetListItem;