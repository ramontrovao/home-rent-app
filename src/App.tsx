import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { Home } from './views/Home/Home';
import { Header } from './components/Header/Header';
import * as S from "./App.styles"

export default function App() {
  return (
    <NavigationContainer>
    <S.AppContainer>
    <Header />
      <Home />
    </S.AppContainer>
    </NavigationContainer>
  );
}

registerRootComponent(App)
