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
  const [error, setError] = useState(false);

  function handlePressPad(value: string) {
    if (!isNaN(+value)) {
      //O valor de entrada é um número
      if (numberOnDisplay.length < 8 && !error) {
        setNumberOnDisplay(lastInput => lastInput + value);
      }
    } else {
      //O valor de entrada é uma operação
      if (value === '=' && action.length !== 0 && !error) {
        //Igualdade e ação armazenada

        let result = 0;
        if (resultOfLastOperation !== 0 && prevValue !== 0) {
          //o resultado da operação anterior e o último número inserido
          
          result = doMathOperation(resultOfLastOperation, prevValue, action);
          // setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
        } else if (prevValue !== 0 && numberOnDisplay.length !== 0) {
          //os dois últimos números inseridos
          
          let inputValueConverted = parseInt(numberOnDisplay);
          result = doMathOperation(inputValueConverted, prevValue, action);
          // setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
        } else if (prevValue !== 0) {
          //o último número inserido

          result = doMathOperation(prevValue, prevValue, action);
          // setNumberOnDisplay(result.toString());
          setResultOfLastOperation(result);
        }

        let resultConverted = result.toString();
        setNumberOnDisplay(resultConverted.length < 8 ? resultConverted : 'ERR');
        
      } else if(value === 'C') {
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
          setOperationConcluded(false);
        }

      } else if(value === 'CE') {
        //Apagar tudo
        setNumberOnDisplay("");
        setAction("");
        setPrevValue(0);
        setResultOfLastOperation(0);
        setOperationConcluded(false);
        setError(false);
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