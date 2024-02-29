import { Header } from '@components/Header';
import { HOME_TYPES_MOCK } from '@constants/mocks';
import { useHome } from '@hooks/useHome';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BestForYouSection } from './components/BestForYouSection';
import { FilterSection } from './components/FilterSection';
import { HomeListSection } from './components/HomeListSection';
import { HomeTypeSection } from './components/HomeTypeSection';
import * as S from './styles';

export const Home = () => {
  const insets = useSafeAreaInsets();
  const { getAllHomes } = useHome();
  const { data: homesData, isLoading } = getAllHomes();

  return (
    <>
      {isLoading && (
        <S.LoadingContainer>
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}

      {!isLoading && homesData && (
        <S.HomeContainer>
          {!isLoading && homesData && (
            <View
              style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
            >
              <Header />

              <FilterSection />
              <HomeTypeSection homeTypes={HOME_TYPES_MOCK} />
              <HomeListSection homes={homesData} />
              <BestForYouSection homes={homesData} />
            </View>
          )}

          <StatusBar style="auto" />
        </S.HomeContainer>
      )}
    </>
  );
};
