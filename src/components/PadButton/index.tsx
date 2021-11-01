import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { 
  Container,
  Title
} from "./styles";

interface Props extends RectButtonProps{
  value: string;
  pressDigit: (value: string) => void;
}

export function PadButton({
  value,
  pressDigit,
  ...rest
}: Props) {

  return (
    <Container
      onPress={() => pressDigit(value)}
      underlayColor="#FFFFFF"
      activeOpacity={.5} 
      value={value} 
      {...rest}>
      <Title>{value}</Title>
    </Container>
  )
}