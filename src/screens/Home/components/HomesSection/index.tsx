import { useHome } from "@hooks/useHome"
import { FilterSection } from "./components/FilterSection"
import { HomeListSection } from "./components/HomeListSection"
import { HomeTypeSection } from "./components/HomeTypeSection"
import { useState } from "react"
import type { THomeTypeNames } from "@type/home-type"

export const HomesSection = () => {
  const [selectedHomeType, setSelectedHomeType] = useState<THomeTypeNames | null>(null)
  const { getHomes, getHomeTypes } = useHome()

  const { data: homeTypesData } = getHomeTypes();
  const { data: homesData } = getHomes({ ...(selectedHomeType && { homeType: selectedHomeType }) })

  const handleSelectHomeType = (homeType: THomeTypeNames) => {
    setSelectedHomeType(homeType)
  }

  return (
    <>
      <FilterSection />
      {homeTypesData && <HomeTypeSection selectedHomeType={selectedHomeType} homeTypes={homeTypesData} onSelect={handleSelectHomeType} />}
      {homesData && <HomeListSection homes={homesData} />}
    </>
  )
}