import * as S from "./GallerySection.styles";
import { HOMES_MOCK } from "@/constants/mocks";
import { PreviewCard } from "./PreviewCard/PreviewCard";

export const GallerySection = () => {
  return (
    <S.GallerySectionContainer>
      <PreviewCard home={HOMES_MOCK[0]} />
    </S.GallerySectionContainer>
  );
};
