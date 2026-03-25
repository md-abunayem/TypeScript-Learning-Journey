/** 
 * Type Narrowing in TSX (TypeScript + React) means reducing a variable’s possible types to a more specific type using conditions like if, typeof, instanceof, or checks such as null.
*/

function printId(id: string | number){
    if (typeof id == "string"){
        return id.toUpperCase();
    }

    return id.toFixed(2);
}

/**
 * Here:
    id initially → string | number
    inside "string" condition → string
    inside else → number

TypeScript narrows the type automatically.
 */

function serveTea(msg? : string){
    if(msg){
        return `Serving ${msg}`;
    }

    return "Serving default tea";
}

/**
 * Exhaustive Type Narrowing in TypeScript means ensuring that all possible types in a union are handled.
    It is commonly used with switch statements and discriminated unions to guarantee that no case is missed.

This is very useful when building components in React using .tsx files.
 */

function orderTea(type: "green" | "black" | "herbal"){
    if(type === "green"){
       console.log("Serving green tea"); 
    }
    else if(type === "black"){
        console.log("Serving black tea");
    }
    else if(type === "herbal"){
        console.log("Serving herbal tea");
    }  
    
    return "Tea served";
}

console.log(orderTea("green"));


//instanceof example
class Dogg {
    bark(){
        console.log("Woof!");
    }
}

class Catt {
    meow(){
        console.log("Meow!");
    }
}

function makeSound(animal: Dogg | Catt){
    if(animal instanceof Dogg){
        animal.bark();
    }else if(animal instanceof Catt){
        animal.meow();
    }
}

let myPet = new Dogg();
makeSound(myPet);
    
// ------------------------------------------
//type keyword
/**
 * In TypeScript, the type keyword is used to create a custom type (type alias). It allows you to define the shape of variables, objects, functions, or unions so that your code becomes safer and easier to understand.
 
 type TypeName = definition;
 */

 type User = {
    name: string;
    age:number;
 }

 const userr : User = {
    name: "Alice",
    age: 30
 }

 //union type
 type Id = string | number;

 let userId: Id = "abc123";


 //funtion type
 type greetingsFunction = (name: string) => string

 const greett: greetingsFunction = (name) =>{
    return `Hello, ${name}!`;
 }

 //type of array
 type Numberr = number[];

 const valuew: Numberr = [1, 2, 3, 4, 5];



//object used in functionn
type Person = {
    name: string;
    age: number;
}

function isPerson(obj: any): obj is Person {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number"
    )
}

function sendPerson(obj: Person | string){
    if(isPerson(obj)){
        return `Person ${obj.name} is ${obj.age} years old.`;
    }
}

console.log(sendPerson({name: "Bob", age: 25}));


//Custom type in object
type Toyota = {
    price: "Normal";
    year: number;
}

type Honda = {
    price: "cheap";
    year: number;
}

type BMW = {
    price: "expensive";
    year: number;
}


type Car = Toyota | Honda | BMW;

function getCar(car: Car){
    switch(car.price){
        case "Normal":
            return `This is a Toyota from year ${car.year}`;
            break;

        case "cheap":
            return `This is a Honda from year ${car.year}`;
            break;
        case "expensive":
            return `This is a BMW from year ${car.year}`;
            break;
    }
}


//Another example with "in" keyword
type Admin = {
    role: string;
}
type Userr = {
    name: string;
}

function print(person: Admin | Userr){
    if("role" in person){
        console.log(`Admin role: ${person.role}`);
    }
}

print({role: "superadmin"});


//unknown when takin parameter but at the time of return it has a type
function processData(arr: unknown): string[] {
  if (typeof arr === "string") {
    return [arr];
  }

  return [];
}
