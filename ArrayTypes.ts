/* This code snippet demonstrates the usage of Array Types and Object Types in TypeScript. */
// Array Types and Object Types

//Array Definition method 1
let sports: Array<string>;
sports = ["Cricket", "Football", "Tennis"];

// Array Definition method 2
let id: string[]; // we can also define other types of arrays like - number[], and boolean[]
id = ["akash1", "akash2", "user3"];

// Array Of Object Type Definition
let userInfo: { name: string; age: number }[];
userInfo = [
  { name: "akash", age: 24 },
  { name: "shivay", age: 25 },
  { name: "ram", age: 1000 },
];

//Object Type Definition
let user: {
  name: string;
  age: number;
  isAuth: boolean;
};

user = {
  name: "Akash",
  age: 24,
  isAuth: true,
};
