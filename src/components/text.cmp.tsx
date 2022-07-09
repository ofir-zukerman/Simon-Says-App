import React from 'react';
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native';

export enum TextSAType {
  normal = 'normal',
  medium = 'medium',
  big = 'big',
}

interface ITextSA {
  type: TextSAType;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const SAText: React.FC<ITextSA> = ({ type, style, children }) => {
  if (type === TextSAType.normal) {
    return <Text style={[style, styles.normal]}>{children}</Text>;
  }
  if (type === TextSAType.medium) {
    return <Text style={[style, styles.medium]}>{children}</Text>;
  }
  if (type === TextSAType.big) {
    return <Text style={[style, styles.big]}>{children}</Text>;
  }
  return <Text style={style}>{children}</Text>;
};

export default SAText;

const styles = StyleSheet.create({
  normal: {
    fontSize: 18,
  },
  medium: {
    fontSize: 24,
  },
  big: {
    fontSize: 36,
  },
});
