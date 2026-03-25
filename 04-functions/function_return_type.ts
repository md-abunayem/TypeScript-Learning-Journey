
//return output as number
function add(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(4, 7));

//return empty string
const getHello = (s: string):string =>{
    return "";
}


//void return type
const getVoid = (str: string): void=>{
    console.log("Hi!! this void return function, ", str)
}
getVoid("Nayem");


//Union types for returns
const getValue = (myVal: number) : boolean | string =>{
    if(myVal > 50){
        return true;  //boolean
    }else{
        return `Value is ${myVal}`//string
    }
}

console.log(getValue(55));




//map funciton
const heros = ["Thor"    , "spiderman", "ironman"];

// const sentences = heros.map(hero => {
//     return `Hero is ${hero}`
// });
// console.log(sentences)

const sentences = heros.map((hero): string => {
    return `Hero is ${hero}`
});
console.log(sentences)



//handle error
const handleError = (msg: string): never=>{
    throw new Error(msg)
}
handleError("Something went wrong")


/*
The never return type means:

This function never successfully returns a value — it either throws an error or runs forever (infinite loop).*/