import * as S from "./GallerySection.styles";
import { HOMES_MOCK } from "@/constants/mocks";
import { PreviewCard } from "./PreviewCard/PreviewCard";
import { type ListRenderItem, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { DEFAULT_THEME } from "@/styles/theme";
import MapView, { Marker } from "react-native-maps";

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
        <S.GalleryTitle>Gallery</S.GalleryTitle>

        <S.GallerySlider
          data={HOMES_MOCK[0].imagesUri}
          renderItem={renderImages}
          contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.MD }}
          keyExtractor={(imageUri) => imageUri}
          horizontal
        />
      </S.GalleryContainer>

      <S.MapContainer>
        <MapView
          provider="google"
          initialRegion={{
            latitude: -20.21863943939567,
            longitude: -40.26249804541726,
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: DEFAULT_THEME.BORDER_RADIUS.LG,
          }}
        >
          <Marker
            coordinate={{
              latitude: -20.21863943939567,
              longitude: -40.26249804541726,
            }}
          />
        </MapView>
      </S.MapContainer>

      <S.PriceContainer>
        <S.PriceContainerLeftWrapper>
          <S.PriceTitle>Price</S.PriceTitle>

          <S.PriceContent>Rp. 2.500.000.000 / Year</S.PriceContent>
        </S.PriceContainerLeftWrapper>

        <S.RentButton>
          <S.RentText>Rent Now</S.RentText>
        </S.RentButton>
      </S.PriceContainer>
    </S.GallerySectionContainer>
  );
};
