# TypeScript Learning

## Type Inference and Explicit Type Annotation/Definition

### 1. Inference-

It will take type by assigned value type. Ex- If value string it will take type string

> let variable_name = value  
> `For Example`  
> `let userName = "Akash"`

### 2. Explicit-

Define type explicitly when creating variable.

> let variable_name: string;  
> variable_name = value  
> `OR`  
> let variable_name: string = value;  
> `For Example`  
> `let userName: string = "Akash"`

## Basic Primitive Data Types in TypeScript

1. string
2. number
3. boolean

## How to invoke the TypeScript Compiler

run the following command to run the typeScript code of specific file. After running this command it will generate the JavaScript code by converting the TypeScript file code and also throw error in terminal if there is any error in TypeScript file code.

> npx tsc filename.ts

