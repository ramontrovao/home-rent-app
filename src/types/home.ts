import type { THomeType } from "./home-type";
import type { TOwner } from "./owner";

export type THome = {
  id: number;
  name: string;
  description: string;
  price: number;
  bedroomsQuantity: number;
  bathromsQuantity: number;
  locationCoordinates: string;
  imagesUri: string[];
  type: THomeType;
  owner: TOwner;
};
