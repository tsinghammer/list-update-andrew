import { Update } from '../dashboard/types';

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomBoolean = (): boolean => {
  const result = getRandomInt(2);
  return result === 1;
};

export const getRandomUpdate = (): Update => {
  const result = getRandomInt(3);

  switch (result) {
    case 0:
      return Update.Up;
    case 1:
      return Update.Down;
    default:
      return Update.NoChange;
  }
};
