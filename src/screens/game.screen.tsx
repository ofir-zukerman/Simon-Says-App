import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import SAText, { TextSAType } from '../components/text.cmp';
import SASimonGame from '../components/saimon_game.cmp';
import { useState } from 'react';
import SAPopup from '../components/popup.cmp';
import { theme } from '../assets/theme/theme';

const GameScreen: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [filcker, setFilcker] = useState<number>(0);
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isSimonTurn, setIsSimonTurn] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
        style={{ flex: 1 }}>
        <View style={styles.header}>
          <SAText style={styles.headerText} type={TextSAType.medium}>
            Game
          </SAText>
        </View>

        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <SAText type={TextSAType.big} style={styles.title}>
              Score:
            </SAText>
            <SAText type={TextSAType.big}>{score}</SAText>
          </View>
          {isGameOver && (
            <SAPopup
              isGameOver={isGameOver}
              score={score}
              setIsGameOver={setIsGameOver}
              setScore={setScore}
            />
          )}
          <View style={[styles.rowStyle, styles.circleContainer]}>
            <SASimonGame
              score={score}
              setScore={setScore}
              filcker={filcker}
              setFilcker={setFilcker}
              isGameStart={isGameStart}
              setIsGameStart={setIsGameStart}
              isGameOver={isGameOver}
              setIsGameOver={setIsGameOver}
              isSimonTurn={isSimonTurn}
              setIsSimonTurn={setIsSimonTurn}
              isButtonDisabled={isButtonDisabled}
              setIsButtonDisabled={setIsButtonDisabled}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: { marginEnd: 10, fontWeight: 'bold' },
  circleContainer: {
    backgroundColor: 'black',
    marginTop: '25%',
    height: Dimensions.get('screen').height / 2.2,
    width: '100%',
    borderRadius: 200,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 5,
  },
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
    elevation: 5,
    height: 60,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: theme.primary,
  },
});
