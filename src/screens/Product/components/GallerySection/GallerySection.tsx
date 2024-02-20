import * as S from "./GallerySection.styles";
import { HOMES_MOCK } from "@/constants/mocks";
import { PreviewCard } from "./PreviewCard/PreviewCard";
import { FlatList, type ListRenderItem, TouchableOpacity } from "react-native";
import { useState } from "react";
import { DEFAULT_THEME } from "@/styles/theme";

export const GallerySection = () => {
  const [imageSelectedIndex, setimageSelectedIndex] = useState(0);
  const selectedImage = HOMES_MOCK[0].imagesUri[imageSelectedIndex];

  const renderImages: ListRenderItem<string> = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setimageSelectedIndex(index)}>
        <S.GalleryImage isSelected={imageSelectedIndex === index} src={item} />
      </TouchableOpacity>
    );
  };

  return (
    <S.GallerySectionContainer>
      <PreviewCard selectedImage={selectedImage} home={HOMES_MOCK[0]} />

      <S.GalleryContainer>
        <S.GalleryText>Gallery</S.GalleryText>

        <S.GallerySlider
          data={HOMES_MOCK[0].imagesUri}
          renderItem={renderImages}
          contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.MD }}
          keyExtractor={(imageUri) => imageUri}
          horizontal
        />
      </S.GalleryContainer>
    </S.GallerySectionContainer>
  );
};
