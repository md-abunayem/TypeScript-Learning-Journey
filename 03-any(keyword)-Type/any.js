/*
Do not use any(recommended)->
any is a TypeScript type that tells the compiler:
“I don’t care about the type of this variable — it can be anything.”
*/
var value;
value = 34; //number
value = "Hello"; //string
value = true; //boolean
value = {
    name: "Nayem"
};
//When you use any, TypeScript stops type checking for that variable.
//alternative best way
var value1;
value = 42;
value = "Hello";
value = true;
