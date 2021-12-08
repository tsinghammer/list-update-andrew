import { FieldWithUpdateInfo, Update } from '../types';

export interface ExternalTrade {
  market: string;
  tradeId: string;
  underlying: string;
  tso: string;
  bs: string;
  quantity: number;
  price: number;
  priceUpdate: Update;
  currency: string;
  tradeTimeUtc: string;
  portfolio: string;
  text: string;
  info: string;
  updated: boolean;
}
