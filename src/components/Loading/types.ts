import type { RectProps } from 'react-native-svg';

export type TLoadingVariants = 'rectangle' | 'circle';

export interface LoadingProps extends RectProps {
  variant?: TLoadingVariants;
}
