/* This code snippet demonstrates the concepts of TypeScript inference and explicit type annotation. */

// TypeScript Inference
let userName = "Akash"; //Automatically set type as string

userName = 34; // This line throw error because typescript uses strict type definition


// The following code doesn't throw any error because it will fallback under the JavaScript code and the email doesn't know which type it has to explicitly prefer and it allows any types to be stored.  
let email;
email = "akash@gmail.com"
email =34;
//To resolve this above problem -We use Explicit type definition in TypeScript as follows
// Explicit Type Definition
let companyName: string;
companyName = "Akash";

// OR
let companyName2:string = "Akash";