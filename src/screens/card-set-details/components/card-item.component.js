import * as React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpeakerIconComponent from '../../../common/components/speaker-icon/speaker-icon.component';

const DEFAULT_IMAGE_PATH = "../../../../assets/images/flash-card-set/nordwood-themes-R53t-Tg6J4c-unsplash (1).jpg";

const CardItemComponent = ({ item, navigation }) => {

  const [isFrontSide, setIsFrontSide] = React.useState(true);

  const changeCardSideHandler = () => {
    setIsFrontSide(!isFrontSide);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={changeCardSideHandler}
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
          <Text style={styles.text}>{isFrontSide ? item.frontSide : item.backSide}</Text>
        </ImageBackground>
      </View>
      <View style={styles.info}>
        <SpeakerIconComponent text={item.frontSide} />
      </View>
    </TouchableOpacity>
  );
};

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
    fontSize: 40,
    textAlign: "center"
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around', //Centered horizontally
    alignItems: 'center', //Centered vertically
  }
})

export default CardItemComponent;