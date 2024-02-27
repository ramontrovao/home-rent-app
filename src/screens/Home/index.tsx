import * as S from './styles';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeTypeSection } from './components/HomeTypeSection';
import { HomeListSection } from './components/HomeListSection';
import { BestForYouSection } from './components/BestForYouSection';
import { FilterSection } from './components/FilterSection';
import { Header } from '@components/Header/Header';
import { HOMES_MOCK, HOME_TYPES_MOCK } from '@constants/mocks';

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <S.HomeContainer>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Header />

        <FilterSection />
        <HomeTypeSection homeTypes={HOME_TYPES_MOCK} />
        <HomeListSection homes={HOMES_MOCK} />
        <BestForYouSection homes={HOMES_MOCK} />
      </View>

      <StatusBar style="auto" />
    </S.HomeContainer>
  );
};
