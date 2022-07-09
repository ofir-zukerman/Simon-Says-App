export const randomNumbers = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
