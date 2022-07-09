import { StyleProp, TextStyle } from 'react-native';
import Sound from 'react-native-sound';

export interface IButtonArray {
  id: number;
  backgroundColor: string;
  flicker: string;
  rotateSide: string;
  playSound: () => Sound;
}

export interface ISASimonGame {
  score: number;
  setScore: (value: number) => void;
  filcker: number;
  setFilcker: (value: number) => void;
  isGameStart: boolean;
  setIsGameStart: (value: boolean) => void;
  isGameOver: boolean;
  setIsGameOver: (value: boolean) => void;
  isSimonTurn: boolean;
  setIsSimonTurn: (value: boolean) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (value: boolean) => void;
}

export interface ISAButtonColor {
  obj: IButtonArray;
  filcker: number;
  isGameStart: boolean;
  handlePlayerPress: (value: number) => void;
  key: number;
  isSimonTurn: boolean;
}

export interface ISAPopup {
  isGameOver: boolean;
  setIsGameOver: (value: boolean) => void;
  score: number;
  setScore: (value: number) => void;
}

export interface ISAButton {
  style?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
}

export interface IGameScore {
  player: IPlayerList[];
}

export interface IPlayerList {
  score: number;
  name: string;
  date: string;
}
