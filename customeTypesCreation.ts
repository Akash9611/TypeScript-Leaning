// Creating Custom Type / Type Aliases


// type is a keyword provided by TypeScript to create custom types

// Example 1 - In Object Type Definition //For better understanding compare this file with ArrayTypes.ts
type User = {
  name: string;
  age: number;
  isAuth: boolean;
};

let user: User; // When you define/create the custom type you can use it wherever you want like this assignment or aliases

user = {
  name: "Akash",
  age: 24,
  isAuth: true,
};

// Example 2- In Union Type Definition // For better understanding compare this file with combiningTypesUnionTypes.ts
type stringOrNum = string | number;
let userID: stringOrNum = "akash123"; // here we can use it custom type definition like this as union/combination types
userID = 1234;

//Example 3- Function Definition // For better understanding compare this file with functionTypesInNestedFunction.ts
function addition(a: number, b: number): number {
  // function with return type defined as number
  const result = a + b;
  return result;
}

type AddFun = (a: number, b: number) => number;

function calculate(
  a: number,
  b: number,
  calcFun: AddFun //This is the nested function type definition for parameter and return value
) {
  calcFun(a, b);
}

calculate(10, 20, addition);
