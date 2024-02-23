import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { DEFAULT_THEME } from '@/styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigator } from '@/routes/router';

export default function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
