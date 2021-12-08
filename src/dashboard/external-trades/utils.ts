import { getRandomBoolean, getRandomUpdate } from '../../common/utils';
import { Update } from '../types';
import { ExternalTrade } from './types';

export const createListItems = (itemsCount: number): ExternalTrade[] => {
  const fakeArray = [];
  for (let i = 0; i < itemsCount; i++) {
    fakeArray.push(i);
  }

  return fakeArray.map((x) => ({
    market: `Market ${x}`,
    tradeId: `Trade-${x}`,
    underlying: 'An underlying',
    tso: 'TTG',
    bs: 'B/S',
    quantity: x * 10,
    price: x * 100,
    priceUpdate: Update.NoChange,
    currency: 'EUR',
    tradeTimeUtc: new Date().toUTCString(),
    portfolio: `LIKR_${x}`,
    text: 'Some text',
    info: 'Some info',
    updated: false,
  }));
};

export const updateItemsRandomly = (
  items: ExternalTrade[]
): ExternalTrade[] => {
  items.forEach((item) => {
    item.updated = getRandomBoolean();
    item.priceUpdate = getRandomUpdate();
  });

  return items;
};
