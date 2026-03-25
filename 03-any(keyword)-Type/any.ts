/*
Do not use any(recommended)->
any is a TypeScript type that tells the compiler:
“I don’t care about the type of this variable — it can be anything.”
*/


let value: any;

value = 34;           //number
value = "Hello";      //string
value = true;         //boolean
value = {             //object
    name: "Nayem"
}

//When you use any, TypeScript stops type checking for that variable.




//alternative best way
let value1: number | string;

value1 = 42;
value1 = "Hello"
// value1 = true;     // ❌ TypeScript will give an error

