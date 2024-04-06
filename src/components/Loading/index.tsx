import ContentLoader, { Circle, Rect } from 'react-content-loader/native';
import type { LoadingProps, TLoadingVariants } from './types';
import type { ReactElement } from 'react';
import { View } from 'react-native';

export const Loading = ({
  height = '100%',
  variant = 'rectangle',
  ...rest
}: LoadingProps) => {
  const LOADING_MODELS: Record<TLoadingVariants, ReactElement> = {
    rectangle: (
      <Rect
        width="100%"
        x="10"
        y="10"
        rx="20"
        ry="20"
        height={height}
        {...rest}
      />
    ),
    circle: <Circle cx="20" cy="20" r="20" {...rest} />,
  };

  return <ContentLoader>{LOADING_MODELS[variant]}</ContentLoader>;
};
