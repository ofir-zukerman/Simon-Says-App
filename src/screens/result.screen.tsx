import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SAText, { TextSAType } from '../components/text.cmp';
import SATable from '../components/table.cmp';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SAText style={styles.headerText} type={TextSAType.medium}>
          Results List
        </SAText>
      </View>
      <ScrollView>
        <SATable />
      </ScrollView>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  header: {
    zIndex: 999,
    backgroundColor: 'white',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 2.23,
    shadowRadius: 2,
    elevation: 2,
    height: 60,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  container: { flex: 1 },
});
