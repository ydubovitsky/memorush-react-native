import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpeakerIconComponent from '../../../common/components/speaker-icon/speaker-icon.component';

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
          <Text style={styles.text}>{isFrontSide ? item.frontSide : item.backSide}</Text>
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
    minHeight: 200,
    paddingBottom: 10,
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