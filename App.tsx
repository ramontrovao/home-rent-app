import { NavigationContainer } from '@react-navigation/native';

import { TanstackProvider } from '@/contexts/TanstackProvider';
import { StackNavigator } from '@/routes';
import { DEFAULT_THEME } from '@styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <TanstackProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </TanstackProvider>
    </ThemeProvider>
  );
}
