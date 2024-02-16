import { Home } from "@/screens/Home/Home";
import { Product } from "@/screens/Product/Product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { TNavigatorParams } from "./router.types";

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
