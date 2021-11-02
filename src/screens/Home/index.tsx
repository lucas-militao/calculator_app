import React, { useState } from "react";

import { Display } from "../../components/Display";
import { NumberPad } from "../../components/NumberPad";
import { doMathOperation } from "../../utils/Operations";

import { Container } from "./styles";

export function Home() { 
  const [numberOnDisplay, setNumberOnDisplay] = useState('');
  const [action, setAction] = useState('');
  const [prevValue, setPrevValue] = useState(0);
  const [resultOfLastOperation, setResultOfLastOperation] = useState(0);

  function handleCButton() {
    if (numberOnDisplay.length !== 0) {
      //Pagar display
      setNumberOnDisplay("");
    } else if (action.length !== 0) {
      //Apagar operação e pôr no display último número inserido
      setAction("");
      setNumberOnDisplay(prevValue.toString());
      setPrevValue(0);
    } else {
      //Apagar último número inserido
      setPrevValue(0);
      setResultOfLastOperation(0);
    }
  }

  function handleCEButton() {
    //Apagar tudo
    setNumberOnDisplay("");
    setAction("");
    setPrevValue(0);
    setResultOfLastOperation(0);
  }

  function handleSignNumberButton() {
    //Mudar sinal do número no display
    let numberOnDisplayConverted = parseFloat(numberOnDisplay);
    setNumberOnDisplay(numberOnDisplayConverted > 0
      ? (-Math.abs(numberOnDisplayConverted)).toString()
      : Math.abs(numberOnDisplayConverted).toString());
  }

  function handleDecimalPointButton() {
    if (!numberOnDisplay.includes(',')) {
      setNumberOnDisplay(prevInput => prevInput + ',');
    }
  }

  function handleOperationButton(action: string) {
    let inputValueConverted = parseFloat(numberOnDisplay);
    setAction(action);
    setPrevValue(inputValueConverted);
    setNumberOnDisplay("");
  }

  function handleEqualButton() {
    let result = 0;
    if (resultOfLastOperation !== 0 && prevValue !== 0) {
      //o resultado da operação anterior e o último número inserido
      result = doMathOperation(resultOfLastOperation, prevValue, action);
      setResultOfLastOperation(result);
    } else if (prevValue !== 0 && numberOnDisplay.length !== 0) {
      //os dois últimos números inseridos
      let inputValueConverted = parseFloat(numberOnDisplay);

      result = doMathOperation(inputValueConverted, prevValue, action);
      setResultOfLastOperation(result);
    } else if (prevValue !== 0) {
      //o último número inserido
      result = doMathOperation(prevValue, prevValue, action);
      setResultOfLastOperation(result);
    }
    
    let resultConverted = isFloat(result) ? result.toFixed(3).toString() : result.toString();
    setNumberOnDisplay(resultConverted.length < 8 ? resultConverted : 'ERR');
  }

  function isFloat(value: number) {
    return (Number(value) === value && value % 1 !== 0);
  }

  function handlePressPad(value: string) {
    if (!isNaN(+value)) {
      //O valor de entrada é um número
      if (numberOnDisplay.length < 8) {
        //O número possui menos de 8 dígitos
        setNumberOnDisplay(lastInput => lastInput + value);
      }
    } else {
      //O valor de entrada é uma operação
      if (value === '=' && action.length !== 0) {
        handleEqualButton();
      } else if(value === 'C') {
        handleCButton();
      } else if(value === 'CE') {
        handleCEButton();
      } else if(value === '+/-') {
        handleSignNumberButton();
      } else if(value === ',') {
        handleDecimalPointButton();
      } else {
        if (action.length === 0) {
          handleOperationButton(value);
        }
      }
    }
  }

  return(
    <Container>
      <Display value={numberOnDisplay}/>
      <NumberPad pressNumberPad={handlePressPad}/>
    </Container>
  );
}