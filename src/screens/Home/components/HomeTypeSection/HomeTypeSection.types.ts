export type THomeType = {
  name: string;
  id: number;
};

export interface HomeTypeSectionProps {
  homeTypes: THomeType[];
}

export interface HomeTypeContainerStyledProps {
  isSelected: boolean;
}
