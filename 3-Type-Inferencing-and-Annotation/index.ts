/**
Type Inference in TypeScript:
    Type Inference means TypeScript automatically detects the type based on the assigned value.

You do not need to write the type manually.
**/

let age = 25;
let uaername = "John";
let isStudent = true;

// TypeScript infers the types as follows:
// age: number
// name: string
// isStudent: boolean


/**
Type Annotation in TypeScript:
    Type Annotation means you explicitly declare the type of a variable, parameter, or function return value.

You manually tell TypeScript what the type should be.
 **/

let stdAge: number = 34;
let stdName: string = "Alice";
let isEnrolled: boolean = false;

/** 
Here:
    : number
    : string
    : boolean

are type annotations.
*/

//Function example with type annotations
function add(a: number, b: number): number {
  return a + b;
}