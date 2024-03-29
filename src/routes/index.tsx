import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Product } from '@screens/Product';
import type { TNavigatorParams } from './types';

const { Navigator, Screen } = createNativeStackNavigator<TNavigatorParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
};
