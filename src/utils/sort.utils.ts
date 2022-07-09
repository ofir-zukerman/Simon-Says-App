export const bubbleSortMinToMax = <T>(arr: T[], key: string) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if ((arr as any)[j][key] > (arr as any)[j + 1][key]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
