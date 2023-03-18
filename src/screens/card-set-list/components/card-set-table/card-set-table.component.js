import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setFavoriteCardSet } from '../../../../redux/features/card-set/card-set.slice';

const CardSetTableComponent = ({ cardEntity, navigation }) => {

  const dispatch = useDispatch();

  const getRenderItemElement = (card) => {

    const {
      id,
      name,
      flashCardArray,
      isFavorite
    } = card;

    const navigateHandler = () => {
      navigation.navigate(
        "CardSetDetailsTabNavigation",
        {
          cardSetId: id,
          cardSetName: name
        })
    }

    const setFavoriteCardSetHandler = () => {
      dispatch(setFavoriteCardSet(id))
    }

    return (
      <DataTable.Row>
        <DataTable.Cell
          style={styles.row}
          onPress={navigateHandler}
        >
          {card.name}
        </DataTable.Cell>
        <DataTable.Cell style={styles.row} numeric>{flashCardArray.length}</DataTable.Cell>
        <DataTable.Cell style={styles.row}>
          <Icon
            name='heart'
            type='font-awesome'
            color={isFavorite ? 'red' : 'silver'}
            size={30}
            onPress={setFavoriteCardSetHandler}
          />
        </DataTable.Cell>
      </DataTable.Row>
    )
  }

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.row}>Название набора</DataTable.Title>
          <DataTable.Title style={styles.row} numeric>Количество карточек</DataTable.Title>
          <DataTable.Title style={styles.row} numeric>Избранный набор?</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={cardEntity}
          renderItem={(data) => getRenderItemElement(data.item)}
          keyExtractor={item => item.id}
        />
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
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
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CardSetTableComponent;