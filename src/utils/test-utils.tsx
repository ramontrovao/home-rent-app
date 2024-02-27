import type { ReactElement, ReactNode } from 'react';
import { type RenderOptions, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { DEFAULT_THEME } from '@styles/theme';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

export const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
