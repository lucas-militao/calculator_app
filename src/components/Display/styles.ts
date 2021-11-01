import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 20%;
`;

export const NumberInput = styled.TextInput`
  font-size: ${RFValue(40)}px;
  color: black;

  text-align: right;
`;