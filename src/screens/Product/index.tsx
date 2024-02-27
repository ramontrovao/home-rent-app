import { HOMES_MOCK } from '@constants/mocks';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DescriptionSection } from './components/DescriptionSection';
import { GallerySection } from './components/GallerySection';
import { MapSection } from './components/MapSection';
import { OwnerSection } from './components/OwnerSection';
import { PriceSection } from './components/PriceSection';
import * as S from './styles';

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
