import { StatusBar } from "expo-status-bar"
import * as S from "./Home.styles"

export const Home = () => {
  return (
    <S.MainContainer>
      <S.Text>Home screen</S.Text>
      <StatusBar style="auto" />
    </S.MainContainer>
  )
}