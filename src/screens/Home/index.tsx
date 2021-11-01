import React, { useState } from "react";

import { Display } from "../../components/Display";
import { NumberPad } from "../../components/NumberPad";

import { Container } from "./styles";

export function Home() {
  const [userInput, setUserInput] = useState('');

  function handlePressNumberPad(value: string) {
    if (userInput.length < 8) {
      setUserInput((prevState) => prevState + value);
    }
  }

  return(
    <Container>
      <Display value={userInput}/>
      <NumberPad pressNumberPad={handlePressNumberPad}/>
    </Container>
  );
}