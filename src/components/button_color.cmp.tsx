import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ISAButtonColor } from '../interfaces/interface';

export const SAButtonColor: React.FC<ISAButtonColor> = ({
  obj,
  filcker,
  isGameStart,
  handlePlayerPress,
  isSimonTurn,
}) => {
  const handleOnPress = () => {
    obj.playSound();
    handlePlayerPress(obj.id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          transform: [{ rotate: obj.rotateSide }],
          backgroundColor:
            filcker === obj.id ? obj.flicker : obj.backgroundColor,
        },
        (obj.id === 1 || obj.id === 3) && { marginEnd: 20 },
      ]}
      disabled={!isGameStart || isSimonTurn}
      onPress={handleOnPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 140,
    borderBottomRightRadius: 140,
    borderWidth: 2,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 6,
    elevation: 5,
  },
});
