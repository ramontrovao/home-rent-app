import { Header } from '@components/Header';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BestForYouSection } from './components/BestForYouSection';
import { HomesSection } from './components/HomesSection';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <S.HomeContainer>
          <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
          >
            <Header />

            <HomesSection />
            <BestForYouSection />
          </View>
      </S.HomeContainer>

      <StatusBar style="light" />
    </>
  );
};
