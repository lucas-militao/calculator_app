import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  value: string;
}

export const Container = styled(RectButton)<Props>`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: #242529;
  
  ${({ value }) => (!isNaN(+value)) && css`
    background-color: #191a1c;
  `};
  ${({ value }) => (value === '=') && css`
    background-color: #267e94;
  `};
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  color: #969ea5;
`;