import { StyleSheet, View } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { useAppSelector } from '../redux_store/actions';
import { theme } from '../assets/theme/theme';

const SATable = () => {
  const playersList = useAppSelector(state => state.simonSays.player);

  return (
    <View style={styles.tableContainer}>
      <DataTable>
        <DataTable.Header
          style={{
            justifyContent: 'space-between',
            backgroundColor: theme.primary,
          }}>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Score</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>
        {playersList.map((obj, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell>{obj.name}</DataTable.Cell>
              <DataTable.Cell textStyle={styles.scoreCell}>
                {obj.score}
              </DataTable.Cell>
              <DataTable.Cell>{obj.date}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default SATable;

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  scoreCell: {
    color: theme.primary,
    fontSize: 18,
    marginStart: 15,
  },
});
