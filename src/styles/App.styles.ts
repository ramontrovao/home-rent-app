import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const AppContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND_100};
`;
