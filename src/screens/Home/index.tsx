import { Header } from '@components/Header';
import { useHome } from '@/hooks/useHome';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../Loading';
import { BestForYouSection } from './components/BestForYouSection';
import { FilterSection } from './components/FilterSection';
import { HomeListSection } from './components/HomeListSection';
import { HomeTypeSection } from './components/HomeTypeSection';
import * as S from './styles';

export const Home = () => {
  const insets = useSafeAreaInsets();
  const { getHomes, getHomeTypes } = useHome();

  const { data: homesData, isLoading: isHomesLoading } = getHomes();
  const { data: homeTypesData, isLoading: isHomeTypesLoading } = getHomeTypes();

  const isLoading =
    isHomeTypesLoading || isHomesLoading || !homesData || !homeTypesData;

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && homesData && (
        <S.HomeContainer>
            <View
              style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
            >
              <Header />

              <FilterSection />
              <HomeTypeSection homeTypes={homeTypesData} />
              <HomeListSection homes={homesData} />
              <BestForYouSection homes={homesData} />
            </View>
        </S.HomeContainer>
      )}
      
      <StatusBar style="auto" />
    </>
  );
};
