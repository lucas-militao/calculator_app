export function doMathOperation(value1: number, value2: number, action: string) {
  switch (action) {
    case '+':
      return sum(value1, value2);
    case '-':
      return subtraction(value1, value2)
    case 'X':
      return multiplication(value1, value2)
    case '/':
      return division(value1, value2)
    default:
      break;
  }
}

function sum(value1: number, value2: number) {
  return value1 + value2;
}

function subtraction(value1: number, value2: number) {
  return value1 - value2;
}

function division(value1: number, value2: number) {
  return value1 / value2;
}
function multiplication(value1: number, value2: number) {
  return value1 * value2;
}

