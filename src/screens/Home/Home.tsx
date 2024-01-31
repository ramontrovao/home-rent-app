import { StatusBar } from "expo-status-bar";
import * as S from "./Home.styles";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { HomeTypeSection } from "./components/HomeTypeSection/HomeTypeSection";

export const Home = () => {
  const homeTypes = [
    {
      name: "Hotel",
      id: 1,
    },
    {
      name: "Apartment",
      id: 2,
    },
    {
      name: "House",
      id: 3,
    },
    {
      name: "AirBnb",
      id: 4,
    },
  ];

  return (
    <S.MainContainer>
      <FilterSection />
      <HomeTypeSection homeTypes={homeTypes} />

      <StatusBar style="auto" />
    </S.MainContainer>
  );
};
