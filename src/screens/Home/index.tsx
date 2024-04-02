import { Header } from '@components/Header';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BestForYouSection } from './components/BestForYouSection';
import { FilterSection } from './components/FilterSection';
import { HomeListSection } from './components/HomeListSection';
import { HomeTypeSection } from './components/HomeTypeSection';
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <S.HomeContainer>
          <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
          >
            <Header />

            <FilterSection />
            <HomeTypeSection />
            <HomeListSection />
            <BestForYouSection />
          </View>
      </S.HomeContainer>

      <StatusBar style="light" />
    </>
  );
};
