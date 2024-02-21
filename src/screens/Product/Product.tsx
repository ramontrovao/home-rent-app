import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./Product.styles";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { DescriptionSection } from "./components/DescriptionSection/DescriptionSection";
import { HOMES_MOCK } from "@/constants/mocks";
import { OwnerSection } from "./components/OwnerSection/OwnerSection";
import { MapSection } from "./components/MapSection/MapSection";
import { PriceSection } from "./components/PriceSection/PriceSection";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const HOME_MOCK = HOMES_MOCK[0];

export const Product = () => {
  const insets = useSafeAreaInsets();

  return (
    <S.ProductContainer>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <GallerySection home={HOME_MOCK} />
        <DescriptionSection description={HOME_MOCK.description} />
        <OwnerSection owner={HOME_MOCK.owner} />
        <MapSection location={HOME_MOCK.location} />
        <PriceSection price={HOME_MOCK.price} />
      </View>

      <StatusBar style="auto" />
    </S.ProductContainer>
  );
};
