import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { ISAPopup } from '../interfaces/interface';
import SAText, { TextSAType } from './text.cmp';
import SAButton from './button.cmp';
import { useAppDispatch } from '../redux_store/actions';
import { setPlayer } from '../redux_store/reducers';
import { theme } from '../assets/theme/theme';

const SAPopup: React.FC<ISAPopup> = ({ setScore, score, setIsGameOver }) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [isWithoutName, setIsWithoutName] = useState<boolean>(false);

  const handlePressConfirm = () => {
    if (name) {
      setIsWithoutName(false);
      setScore(0);
      const gameOverObj = {
        name: name,
        score: score,
        date: `${new Date().getDate()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`,
      };
      dispatch(setPlayer([gameOverObj]));
      setIsGameOver(false);
    } else {
      setIsWithoutName(true);
    }
  };

  const handlePressCancel = () => {
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <SAText type={TextSAType.big} style={styles.title}>
          GAME OVER
        </SAText>
        <SAText type={TextSAType.normal} style={styles.subTitle}>
          You have reached {score} points, that's nice! now can save your score,
          please write your name
        </SAText>
        <TextInput
          onChangeText={setName}
          value={name}
          style={[
            styles.input,
            !isWithoutName && { marginBottom: 20 },
            {
              borderWidth: isWithoutName ? 4 : 1,
              borderColor: isWithoutName ? 'red' : 'black',
            },
          ]}
          placeholder="Name"
        />
        {isWithoutName && (
          <SAText type={TextSAType.normal} style={styles.error}>
            Please write your name
          </SAText>
        )}
        <View style={styles.buttonContainer}>
          <SAButton
            title="Cancel"
            onPress={handlePressCancel}
            style={[styles.button, { width: 100 }]}
          />
          <SAButton
            title="Confirm"
            onPress={handlePressConfirm}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default SAPopup;

const styles = StyleSheet.create({
  container: {
    zIndex: 99,
    position: 'absolute',
    alignItems: 'center',
    top: Dimensions.get('screen').height / 4,
    left: Dimensions.get('screen').width / 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 9,
    shadowRadius: 15,
    elevation: 10,
  },
  title: { color: theme.body },
  subTitle: { color: theme.body, marginTop: 10, textAlign: 'center' },
  modal: {
    backgroundColor: theme.primary,
    height: 300,
    width: 330,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    padding: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.body,
    borderRadius: 10,
    height: 40,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    height: 40,
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
    minWidth: 200,
    backgroundColor: theme.body,
  },
  error: { color: 'red', marginBottom: 10 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
});
