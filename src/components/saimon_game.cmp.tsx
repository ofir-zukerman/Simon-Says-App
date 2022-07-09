import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SAButton from './button.cmp';
import { firstRowArray, secondRowArray } from '../mock/mockButtons';
import { randomNumbers } from '../utils/random_numbers.utils';
import { SAButtonColor } from './button_color.cmp';
import { ISASimonGame } from '../interfaces/interface';
import Sound from 'react-native-sound';
// import sound1 from '../assets/sounds/sound1.mp3';

let sequenceArray: number[] = [];
let mySequenceArray: number[] = [];

Sound.setCategory('Playback');

const SASimonGame: React.FC<ISASimonGame> = ({
  score,
  setScore,
  filcker,
  setFilcker,
  isGameStart,
  setIsGameStart,
  setIsGameOver,
  isSimonTurn,
  setIsSimonTurn,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const simonTurn = (seq: number[]) => {
    sequenceArray.push(randomNumbers(1, 4));
    setIsGameStart(true);
    setIsSimonTurn(true);
    setIsButtonDisabled(true);
    let index = 0;
    const TimerPlay = setInterval(() => {
      setFilcker(seq[index]);
      firstRowArray[seq[index] - 1] &&
        firstRowArray[seq[index] - 1]?.playSound();
      secondRowArray[seq[index] - 3] &&
        secondRowArray[seq[index] - 3].playSound();
      setTimeout(() => {
        setFilcker(0);
      }, 200);
      ++index;
      if (index > seq.length) {
        clearInterval(TimerPlay);
        setFilcker(0);
        setIsSimonTurn(false);
      }
    }, 700);
  };

  const playerTurn = (idButton: number) => {
    mySequenceArray.push(idButton);

    let isPlayerCurrect = true;
    for (let i = 0; i < mySequenceArray.length; i++) {
      if (mySequenceArray[i] !== sequenceArray[i]) {
        setIsGameStart(false);
        setIsSimonTurn(false);
        setFilcker(0);
        setIsGameOver(true);
        // setScore(0);
        mySequenceArray = [];
        sequenceArray = [];
        isPlayerCurrect = false;
        setIsButtonDisabled(false);
        break;
      }
    }
    if (mySequenceArray.length === sequenceArray.length && isPlayerCurrect) {
      mySequenceArray = [];
      setScore(score + 1);
      simonTurn(sequenceArray);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {firstRowArray.map(obj => {
          return (
            <SAButtonColor
              obj={obj}
              key={obj.id}
              filcker={filcker}
              handlePlayerPress={playerTurn}
              isGameStart={isGameStart}
              isSimonTurn={isSimonTurn}
            />
          );
        })}
      </View>
      <SAButton
        onPress={() => simonTurn(sequenceArray)}
        title={
          isGameStart
            ? isSimonTurn
              ? 'Simon turn'
              : 'Your turn'
            : 'Start Game'
        }
        style={styles.startButton}
        isDisabled={isButtonDisabled}
      />
      <View style={[styles.row, { marginTop: 20 }]}>
        {secondRowArray.map(obj => {
          return (
            <SAButtonColor
              obj={obj}
              key={obj.id}
              filcker={filcker}
              handlePlayerPress={playerTurn}
              isGameStart={isGameStart}
              isSimonTurn={isSimonTurn}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SASimonGame;

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: 'white',
    shadowColor: 'white',
    borderWidth: 15,
    borderColor: 'black',
    position: 'absolute',
    top: 75,
    left: 75,
    zIndex: 9,
  },
  row: {
    flexDirection: 'row',
  },
  container: { alignSelf: 'center' },
});
