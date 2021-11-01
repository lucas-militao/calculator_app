import React from "react";
import { View } from "react-native";

import { PadButton } from "../PadButton";

import {
  ButtonsLane,
  Container
} from './styles';

interface Props {
  pressPad: (value: string) => void;
}

export function NumberPad({
  pressPad: pressNumberPad
}: Props) {

  return(
    <Container>
      <ButtonsLane>
        <PadButton value="C" pressDigit={pressNumberPad}/>
        <PadButton value="CE" pressDigit={pressNumberPad}/>
        <PadButton value="%" pressDigit={pressNumberPad}/>
        <PadButton value="/" pressDigit={pressNumberPad}/>
      </ButtonsLane>

      <ButtonsLane>
        <PadButton value="7" pressDigit={pressNumberPad}/>
        <PadButton value="8" pressDigit={pressNumberPad}/>
        <PadButton value="9" pressDigit={pressNumberPad}/>
        <PadButton value="X" pressDigit={pressNumberPad}/>
      </ButtonsLane>

      <ButtonsLane>
        <PadButton value="4" pressDigit={pressNumberPad}/>
        <PadButton value="5" pressDigit={pressNumberPad}/>
        <PadButton value="6" pressDigit={pressNumberPad}/>
        <PadButton value="-" pressDigit={pressNumberPad}/>
      </ButtonsLane>

      <ButtonsLane>
        <PadButton value="1" pressDigit={pressNumberPad}/>
        <PadButton value="2" pressDigit={pressNumberPad}/>
        <PadButton value="3" pressDigit={pressNumberPad}/>
        <PadButton value="+" pressDigit={pressNumberPad}/>
      </ButtonsLane>

      <ButtonsLane>
        <View style={{ flex: 2 }}>
          <PadButton value="0" pressDigit={pressNumberPad}/>
        </View>
        <PadButton value="," pressDigit={pressNumberPad}/>
        <PadButton value="=" pressDigit={pressNumberPad}/>
      </ButtonsLane>
    </Container>
  );
}