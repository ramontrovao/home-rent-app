import * as S from "./src/styles/App.styles";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/screens/Home/Home";
import { Header } from "./src/components/Header/Header";
import { ThemeProvider } from "styled-components/native";
import { DEFAULT_THEME } from "@/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <SafeAreaProvider>
        <NavigationContainer>
          <S.AppContainer>
            <Header />
            <Home />
          </S.AppContainer>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
