import type { TouchableOpacityProps } from 'react-native';

export interface HomeTypeCardProps extends TouchableOpacityProps {
  homeType: string;
  isSelected?: boolean;
}

export interface HomeTypeCardContainerStyledProps {
  isSelected: boolean;
}
