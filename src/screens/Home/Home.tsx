import { StatusBar } from "expo-status-bar";
import * as S from "./Home.styles";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { HomeTypeSection } from "./components/HomeTypeSection/HomeTypeSection";
import { HOME_TYPES_MOCK } from "@/constants/mocks";

export const Home = () => {
  return (
    <S.MainContainer>
      <FilterSection />
      <HomeTypeSection homeTypes={HOME_TYPES_MOCK} />

      <StatusBar style="auto" />
    </S.MainContainer>
  );
};
