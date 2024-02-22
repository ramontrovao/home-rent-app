import * as S from "./styles";
import { StatusBar } from "expo-status-bar";
import { FilterSection } from "./components/FilterSection";
import { HomeTypeSection } from "./components/HomeTypeSection";
import { HOMES_MOCK, HOME_TYPES_MOCK } from "@/constants/mocks";
import { HomeListSection } from "./components/HomeListSection";
import { BestForYouSection } from "./components/BestForYouSection";
import { Header } from "@/components/Header/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <S.HomeContainer>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Header />

        <FilterSection />
        <HomeTypeSection homeTypes={HOME_TYPES_MOCK} />
        <HomeListSection homes={HOMES_MOCK} />
        <BestForYouSection homes={HOMES_MOCK} />
      </View>

      <StatusBar style="auto" />
    </S.HomeContainer>
  );
};
