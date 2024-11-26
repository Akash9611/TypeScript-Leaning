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
user = {  
  name: "Akash",  
  age: 24,  
  isAuth: true,  
};  
