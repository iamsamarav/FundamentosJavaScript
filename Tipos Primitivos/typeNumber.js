const myNumber = 3;

const  firstNumber = 1;
const secondNumber = 2;

//Example type Number

const mathematicalOperationFirst = firstNumber + secondNumber;
const mathematicalOperationSecond = firstNumber - secondNumber;
const mathematicalOperationThird = firstNumber * secondNumber;
const mathematicalOperationFourth = firstNumber / secondNumber;

const mathematicalOperation = [mathematicalOperationFirst, mathematicalOperationSecond, mathematicalOperationThird, mathematicalOperationFourth];

mathematicalOperation.map((data) => console.log(data))

//Example type Number Float

const numberFloatFirst = 0.5;
const numberFloatTwo = .5;

const numberArray = [numberFloatFirst, numberFloatTwo]
console.log(numberArray)

//Example NaN

const alura = "Alura"
console.log = (alura * numberFloatFirst)