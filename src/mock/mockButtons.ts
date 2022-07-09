import Sound from 'react-native-sound';
import { IButtonArray } from '../interfaces/interface';

let sound1 = new Sound('sound1.mp3', Sound.MAIN_BUNDLE);
let sound2 = new Sound('sound2.mp3', Sound.MAIN_BUNDLE);
let sound3 = new Sound('sound3.mp3', Sound.MAIN_BUNDLE);
let sound4 = new Sound('sound4.mp3', Sound.MAIN_BUNDLE);

export const firstRowArray: IButtonArray[] = [
  {
    id: 1,
    backgroundColor: 'green',
    flicker: 'lightgreen',
    rotateSide: '180deg',
    playSound: () => sound1.play(),
  },
  {
    id: 2,
    backgroundColor: 'red',
    flicker: '#FF7F7F',
    rotateSide: '-90deg',
    playSound: () => sound2.play(),
  },
];
export const secondRowArray: IButtonArray[] = [
  {
    id: 3,
    backgroundColor: 'yellow',
    flicker: 'lightyellow',
    rotateSide: '90deg',
    playSound: () => sound3.play(),
  },
  {
    id: 4,
    backgroundColor: 'blue',
    flicker: 'lightblue',
    rotateSide: '0deg',
    playSound: () => sound4.play(),
  },
];
