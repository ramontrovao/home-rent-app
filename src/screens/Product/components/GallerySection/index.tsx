import { HOMES_MOCK } from '@constants/mocks';
import { DEFAULT_THEME } from '@styles/theme';
import { useState } from 'react';
import { TouchableOpacity, type ListRenderItem } from 'react-native';
import { PreviewCard } from './PreviewCard';
import * as S from './styles';
import type { GallerySectionProps } from './types';

export const GallerySection = ({ home }: GallerySectionProps) => {
  const [imageSelectedIndex, setimageSelectedIndex] = useState(0);
  const images = home.imagesUri;
  const selectedImage = images[imageSelectedIndex];

  const renderImages: ListRenderItem<string> = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setimageSelectedIndex(index)}>
        <S.GalleryImage
          testID={`gallery-image-${index}`}
          isSelected={imageSelectedIndex === index}
          source={{ uri: item }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <S.GallerySectionContainer>
      <PreviewCard selectedImage={selectedImage} home={HOMES_MOCK[0]} />

      <S.GalleryContainer>
        <S.GalleryTitle>Gallery</S.GalleryTitle>

        <S.GallerySlider
          data={images}
          renderItem={renderImages}
          contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.MD }}
          keyExtractor={(imageUri) => imageUri}
          horizontal
        />
      </S.GalleryContainer>
    </S.GallerySectionContainer>
  );
};
