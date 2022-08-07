import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

const CardSetTableComponent = ({ cardEntity, navigation }) => {

  const getRenderItemElement = (card) => {
    return (
      <DataTable.Row>
        <DataTable.Cell
          style={styles.row}
          onPress={() => navigation.navigate(
            "CardSetDetailsTabNavigation",
            {
              cardSetId: card.id,
              cardSetName: card.name
            })}
        >{card.name}</DataTable.Cell>
        <DataTable.Cell style={styles.row} numeric>{card.cardList.length}</DataTable.Cell>
        <DataTable.Cell style={styles.row}>{card.isFavorite
          ? <Icon
            name='heart'
            type='font-awesome'
            color='red'
            size={30}
          />
          :
          <Icon
            name='heart'
            type='font-awesome'
            color='silver'
            size={30}
          />}
        </DataTable.Cell>
      </DataTable.Row>
    )
  }

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.row}>Card set name</DataTable.Title>
          <DataTable.Title style={styles.row} numeric>Total Cards</DataTable.Title>
          <DataTable.Title style={styles.row} numeric>Favorite</DataTable.Title>
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
    backgroundColor: "white"
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CardSetTableComponent;