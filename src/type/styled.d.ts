import 'styled-components';

import type { DEFAULT_THEME } from '@styles/theme';

export type TDefaultTheme = typeof DEFAULT_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends TDefaultTheme {}
}
