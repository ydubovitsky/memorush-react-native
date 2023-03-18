import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const AppbarComponent = ({ cardViewToggleHandler, searchTextString, setSearchTextString }) => {


  return (
    <Appbar.Header
      style={styles.appBar}
      statusBarHeight={5}
    >
      <View style={styles.container}>
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
            onChangeText={setSearchTextString}
            placeholder="Искать..."
            value={searchTextString}
          />
        </View>
        <View style={styles.icons}>
          <Appbar.Action icon="view-list" onPress={cardViewToggleHandler} />
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
  searchWrapper: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  searchIcon: {
    flex: 1
  },
  inputField: {
    flex: 9,
  },
  icons: {
    flex: 1,
    flexDirection: "row"
  }
});