import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./Product.styles";
import { GallerySection } from "./components/GallerySection/GallerySection";

export const Product = () => {
  const insets = useSafeAreaInsets();

  return (
    <S.ProductContainer
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <GallerySection />
    </S.ProductContainer>
  );
};
