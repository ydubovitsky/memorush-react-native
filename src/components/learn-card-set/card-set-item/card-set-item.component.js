import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SpeakerIconComponent from '../../../common/components/speaker-icon/speaker-icon.component';

const DEFAULT_IMAGE_PATH = "../../../../assets/images/flash-card-set/nordwood-themes-R53t-Tg6J4c-unsplash (1).jpg";

const CardSetItemComponent = ({ isHintVisible, item = {} }) => {

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
        {isHintVisible ? <Text style={{fontSize: 24}}>Hint: {item.hint}</Text> : null}
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
    fontSize: 50,
    textAlign: "center",
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around', //Centered horizontally
    alignItems: 'center', //Centered vertically
  }
})

export default CardSetItemComponent;