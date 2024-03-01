import { TAddress } from './address';
import type { THomeType } from './home-type';
import { TLocation } from './location';
import type { TOwner } from './owner';

export type THome = {
  id: number;
  name: string;
  description: string;
  price: number;
  bedroomsQuantity: number;
  bathromsQuantity: number;
  homeType: THomeType
  address: TAddress;
  imagesUri: string[];
  type: THomeType;
  owner: TOwner;
  location: TLocation;
};
