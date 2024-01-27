import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { Home } from './views/Home/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

registerRootComponent(App)
