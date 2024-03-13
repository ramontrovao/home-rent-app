import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DescriptionSection } from './components/DescriptionSection';
import { GallerySection } from './components/GallerySection';
import { MapSection } from './components/MapSection';
import { OwnerSection } from './components/OwnerSection';
import { PriceSection } from './components/PriceSection';
import * as S from './styles';
import { TNavigatorParams } from '@/routes/types';
import { useHome } from '@/hooks/useHome';
import { Loading } from '../Loading';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Product = ({
  route,
}: NativeStackScreenProps<TNavigatorParams, 'product'>) => {
  const { id } = route.params;
  const { getHome } = useHome();
  const { data: homeData, isLoading } = getHome(id);

  const insets = useSafeAreaInsets();

  return (
    <>
      {!isLoading && homeData && (
        <S.ProductContainer>
          <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
          >
            <GallerySection home={homeData} />
            <DescriptionSection description={homeData.description} />
            <OwnerSection owner={homeData.owner} />
            <MapSection location={homeData.location} />
            <PriceSection price={homeData.price} />
          </View>

          <StatusBar style="auto" />
        </S.ProductContainer>
      )}

      {isLoading && <Loading />}
    </>
  );
};
