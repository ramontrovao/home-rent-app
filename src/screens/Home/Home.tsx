import { StatusBar } from "expo-status-bar";
import * as S from "./Home.styles";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { HomeTypeSection } from "./components/HomeTypeSection/HomeTypeSection";

export const Home = () => {
  return (
    <S.MainContainer>
      <FilterSection />
      <HomeTypeSection />

      <StatusBar style="auto" />
    </S.MainContainer>
  );
};
