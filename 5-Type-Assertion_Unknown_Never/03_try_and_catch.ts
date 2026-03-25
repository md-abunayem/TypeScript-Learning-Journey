// try...catch with `any` in TypeScript
//
// By default, the `error` in catch is `unknown` (safe).
// But you can explicitly type it as `any` if you want.
//
// Syntax:
try {
  // risky code
} catch (error: any) {
  console.log(error.message); // ✔ allowed without checking
}
//
// Example:
try {
  throw new Error("Something went wrong");
} catch (error: any) {
  console.log(error.message); // No type check needed
}


//with type guard
try {

}catch(error){
    if (error instanceof Error){
        console.log(error.message); // TypeScript knows error is an Error
    }
    console.log("Error: ", error); // error is still unknown here
}



const data: unknown = "This is a string";
const strData: string = data as string; // Type assertion to string
console.log(strData.length); // Now we can use string methods without error  


 