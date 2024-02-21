import { DEFAULT_THEME } from "@/styles/theme";
import * as S from "./MapSection.styles";
import MapView, { Marker } from "react-native-maps";
import { MapSectionProps } from "./MapSection.types";

export const MapSection = ({
  location: { latitude, longitude },
}: MapSectionProps) => {
  return (
    <S.MapContainer>
      <MapView
        provider="google"
        initialRegion={{
          latitude,
          longitude,
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
            latitude,
            longitude,
          }}
        />
      </MapView>
    </S.MapContainer>
  );
};
