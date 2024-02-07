import { StatusBar } from "expo-status-bar";
import * as S from "./Home.styles";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { HomeTypeSection } from "./components/HomeTypeSection/HomeTypeSection";
import { HOMES_MOCK, HOME_TYPES_MOCK } from "@/constants/mocks";
import { HomeListSection } from "./components/HomeListSection/HomeListSection";
import { BestForYouSection } from "./components/BestForYouSection/BestForYouSection";

export const Home = () => {
  return (
    <S.MainContainer>
      <FilterSection />
      <HomeTypeSection homeTypes={HOME_TYPES_MOCK} />
      <HomeListSection homes={HOMES_MOCK} />
      <BestForYouSection homes={HOMES_MOCK} />

      <StatusBar style="auto" />
    </S.MainContainer>
  );
};
