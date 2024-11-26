// Combining Type Union Types (Alternative Types)

/* This line of code is declaring a variable `userID` with a type union of `string | number`. This
means that the `userID` variable can hold values of either type `string` or type `number`.
Initially, it is assigned a string value `"abcd1"`, and later it is reassigned to a number value
`123`, which is allowed due to the type union definition. */

let userID: string | number = "abcd1"; // By using this type definition we can accept both string and number values in same variable
userID = 123