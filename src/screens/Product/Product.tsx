import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./Product.styles";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { DescriptionSection } from "./components/DescriptionSection/DescriptionSection";
import { HOMES_MOCK } from "@/constants/mocks";

const HOME_MOCK = HOMES_MOCK[0];

export const Product = () => {
  const insets = useSafeAreaInsets();

  return (
    <S.ProductContainer
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <GallerySection />
      <DescriptionSection description={HOME_MOCK.description} />
    </S.ProductContainer>
  );
};
