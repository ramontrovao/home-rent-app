import { StatusBar } from "expo-status-bar";
import * as S from "./Home.styles";
import { FilterSection } from "./components/FilterSection/FilterSection";

export const Home = () => {
  return (
    <S.MainContainer>
      <FilterSection />

      <StatusBar style="auto" />
    </S.MainContainer>
  );
};
