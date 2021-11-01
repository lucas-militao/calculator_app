import React from "react";
import { TextInputProps } from "react-native";

import { Container, NumberInput } from "./styles";

type Props = TextInputProps;

export function Display({
  ...rest
}: Props) {
  return(
    <Container>
      <NumberInput
        editable={false}
        maxLength={8}
        {...rest}
      />
    </Container>
  );
}