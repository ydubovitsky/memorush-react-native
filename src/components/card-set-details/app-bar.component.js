import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

const AppbarComponent = ({ navigateToCardScreen }) => {

  const [text, onChangeText] = React.useState();

  return (
    <Appbar.Header
      style={styles.appBar}
      statusBarHeight={5}
    >
      <View style={styles.container}>
        <View style={styles.arrowLeftContainer}>
          <Icon
            name='arrow-left'
            type='font-awesome'
            onPress={navigateToCardScreen}
          />
        </View>
        <View style={styles.searchWrapper}>
          <Text style={styles.searchIcon}>
            <Icon
              name='search'
              type='material'
              size={20}
            />
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangeText}
            placeholder="Search..."
            value={text}
          />
        </View>
      </View>
    </Appbar.Header>
  )
}

export default AppbarComponent

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20
  },
  arrowLeftContainer: {
    flex: 1
  },
  searchWrapper: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  searchIcon: {
    flex: 1
  },
  inputField: {
    flex: 9,
  }
});