// Defining Function Type inside Nested Function
//Nested Function Type definition inside as parameter function

function addition(a: number, b: number): number {
  // function with return type defined as number
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFun: (a: number, b: number) => number //This is the nested function type definition for parameter and return value
) {
  calcFun(a, b);
}

calculate(10, 20, addition);
