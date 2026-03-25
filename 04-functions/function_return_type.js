//return output as number
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 7));
//return empty string
var getHello = function (s) {
    return "";
};
//void return type
var getVoid = function (str) {
    console.log("Hi!! this void return function, ", str);
};
getVoid("Nayem");
//Union types for returns
var getValue = function (myVal) {
    if (myVal > 50) {
        return true; //boolean
    }
    else {
        return "Value is ".concat(myVal); //string
    }
};
console.log(getValue(55));
//map funciton
var heros = ["Thor", "spiderman", "ironman"];
// const sentences = heros.map(hero => {
//     return `Hero is ${hero}`
// });
// console.log(sentences)
var sentences = heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
console.log(sentences);
//handle error
var handleError = function (msg) {
    throw new Error(msg);
};
handleError("Something went wrong");
/*
The never return type means:

This function never successfully returns a value — it either throws an error or runs forever (infinite loop).*/ 
