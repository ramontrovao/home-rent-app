import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TNavigatorParams = {
  home: undefined;
  product: {
    id: number;
  };
};

export type TStackNavigationProps = NativeStackNavigationProp<TNavigatorParams>;
