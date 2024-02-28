import { Header } from '@components/Header/Header';
import { HOMES_MOCK, HOME_TYPES_MOCK } from '@constants/mocks';
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
