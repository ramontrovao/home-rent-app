import type { THomeType, THomeTypeNames } from "@type/home-type";

export interface HomeTypeSectionProps {
  homeTypes: THomeType[]
  selectedHomeType?: THomeTypeNames | null,

  onSelect: (homeType: THomeTypeNames) => void
}