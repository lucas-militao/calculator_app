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
  const [operationConcluded, setOperationConcluded] = useState(false);

  function handlePressPad(value: string) {
    if (numberOnDisplay.length < 8 && !isNaN(+value)) {
      if (!operationConcluded) {
        if (numberOnDisplay.length === 0 && value !== '0') {
          setNumberOnDisplay((prevState) => prevState + value);
        } else {
          setNumberOnDisplay((prevState) => prevState + value);
        }
      } else if (operationConcluded) {
        setNumberOnDisplay(value);
        setOperationConcluded(false);
      }
    } else {
      //Botão de operação apertado
      if (value === '=' && action.length !== 0) {
        //Igualdade e ação armazenada
        if (resultOfLastOperation !== 0 && prevValue !== 0) {
          //o resultado da operação anterior e o último número inserido
          
          let result = doMathOperation(resultOfLastOperation, prevValue, action);
          setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
          setOperationConcluded(true);
        } else if (prevValue !== 0 && numberOnDisplay.length !== 0) {
          //os dois últimos números inseridos
          
          let inputValueConverted = parseInt(numberOnDisplay);
          let result = doMathOperation(inputValueConverted, prevValue, action);
          setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
          setOperationConcluded(true);
        } else if (prevValue !== 0) {
          //o último número inserido

          let result = doMathOperation(prevValue, prevValue, action);
          setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
          setOperationConcluded(true);
        }
      } else if(value === 'C') {
        if (numberOnDisplay.length !== 0) {
          //Pagar display
          setNumberOnDisplay("");
        } else if (action.length !== null) {
          //Apagar operação e pôr no display último número inserido
          setAction("");
          setNumberOnDisplay(prevValue.toString());
          setPrevValue(0);
        } else {
          //Apagar último número inserido
          setPrevValue(0);
          setResultOfLastOperation(0);
          setOperationConcluded(false);
        }
      } else if(value === 'CE') {
        //Apagar tudo
        setNumberOnDisplay("");
        setAction("");
        setPrevValue(0);
        setResultOfLastOperation(0);
        setOperationConcluded(false);
      } else {
        if (action.length === 0) {
          let inputValueConverted = parseInt(numberOnDisplay);
          setAction(value);
          setPrevValue(inputValueConverted);
          setNumberOnDisplay("");
        }
      }
    }
    
  }

  return(
    <Container>
      <Display value={numberOnDisplay}/>
      <NumberPad pressPad={handlePressPad}/>
    </Container>
  );
}