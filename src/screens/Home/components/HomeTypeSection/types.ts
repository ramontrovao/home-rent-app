import type { THomeType, THomeTypeNames } from "@type/home-type";

export interface HomeTypeSectionProps {
  homeTypes: THomeType[];
  selectedHomeType: THomeTypeNames | null
  onChangeHomeType: (homeType: THomeTypeNames) => void
}
