# TypeScript Learning

## Type Inference and Explicit Type Annotation/Definition

### 1. Inference-

It will take type by assigned value type. Ex- If value string it will take type string

> let variable_name = value  

For Example  
> `let userName = "Akash"`

### 2. Explicit-

Define type explicitly when creating variable.

> let variable_name: string;  
variable_name = value  
`OR`  
> let variable_name: string = value;  

For Example  
> `let userName: string = "Akash"`

## Basic Primitive Data Types in TypeScript

1. string
2. number
3. boolean

## How to invoke the TypeScript Compiler

run the following command to run the typeScript code of specific file. After running this command it will generate the JavaScript code by converting the TypeScript file code and also throw error in terminal if there is any error in TypeScript file code.

> npx tsc filename.ts

## Combining Type Union Types (Alternative Types)
To accept only required multiple type definition.

>let variable_name: `string | number` = value;  

For Example  
>`let userID: string | number = "abcd1";`  
`userID = 123`  

This line of code is declaring a variable `userID` with a type union of `string | number`. This
means that the `userID` variable can hold values of either type `string` or type `number`.
Initially, it is assigned a string value `"abcd1"`, and later it is reassigned to a number value
`123`, which is allowed due to the type union definition.

## Array Type and Object Type Definition
/* This code snippet demonstrates the usage of Array Types and Object Types in TypeScript. */

Array Definition method 1
> let sports: Array<string>;  
sports = ["Cricket", "Football", "Tennis"];

Array Definition method 2
> let id: string[];  
id = ["akash1", "akash2", "user3"];  
// we can also define other types of arrays like - number[], and boolean[]  

Array Of Object Type Definition
> let userInfo: { name: string; age: number }[];  
<br>
userInfo = [  
  { name: "akash", age: 24 },  
  { name: "shivay", age: 25 },  
  { name: "ram", age: 1000 },  
];  

Object Type Definition
> let user: {  
  name: string;  
  age: number;  
  isAuth: boolean;  
};   
<br> 
user = {  
  name: "Akash",  
  age: 24,  
  isAuth: true,  
};  


## Adding Types to Functions - Parameter & Return Value Types
We can assign Types to a function parameters and return value

> function add(a: number, b: number) {  
  const result = a + b;  
  return result;  
}  
add(10, 20);  

By default above function will take the number as return type. But here is example that how we can also explicitly specify the return type to a particular function.  
We can also define return types as `undefined, void (means empty) and string, boolean`.

> function add1(a: number, b: number): number {  
  const result = a + b;  
  return result;  
}  
add1(1, 2);  


## Defining Function Types
Defining Function Type inside Nested Function Or Nested Function Type definition inside as parameter function

>function addition(a: number, b: number): number {  
  // function with return type defined as number  
  const result = a + b;  
  return result;  
}    
<br>
function calculate(  
  a: number,  
  b: number,  
  calcFun: (a: number, b: number) => number //This is the nested parameterized function type definition for parameter and return value  
) {  
  calcFun(a, b);  
}
<br>  
calculate(10, 20, addition);  


## Create Custom Types
**type :-** `type` is a keyword provided by TypeScript to create custom types

Example 1 - In Object Type Definition //For better understanding compare this file with ArrayTypes.ts
> `type User = {`  
  name: string;  
  age: number;  
  isAuth: boolean;  
};  
<br>
`let user: User;` // When you define/create the custom type you can use it wherever you want like this assignment or aliases  
<br>
user = {  
  name: "Akash",  
  age: 24,  
  isAuth: true,  
};  

Example 2- In Union Type Definition // For better understanding compare this file with combiningTypesUnionTypes.ts
>`type stringOrNum = string | number;`  
let userID: stringOrNum = "akash123"; // here we can use it custom type definition like this as union/combination types  
userID = 1234;  

Example 3- Function Definition // For better understanding compare this file with functionTypesInNestedFunction.ts
>function addition(a: number, b: number): number {
  // function with return type defined as number  
  const result = a + b;  
  return result;  
}  
<br>
`type AddFun = (a: number, b: number) => number;`  
<br>
function calculate(  
  a: number,  
  b: number,  
  calcFun: AddFun //This is the nested function type definition for parameter and return value  
) {  
  calcFun(a, b);  
}  
<br>
calculate(10, 20, addition);
