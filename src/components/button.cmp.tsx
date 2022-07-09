import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import SAText, { TextSAType } from './text.cmp';
import { ISAButton } from '../interfaces/interface';

const SAButton: FC<ISAButton> = ({ style, title, onPress, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      disabled={isDisabled}>
      <View style={styles.textContainer}>
        <SAText style={styles.text} type={TextSAType.normal}>
          {title}
        </SAText>
      </View>
    </TouchableOpacity>
  );
};

export default SAButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textContainer: { height: '100%', justifyContent: 'center' },
  text: {
    textAlign: 'center',
  },
});
