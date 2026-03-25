// `unknown` in TypeScript
//
// `unknown` is a safer alternative to `any`.
// It means: "I don’t know the type yet."
//
// Key Idea:
// - You CANNOT use a value of type `unknown` directly
// - You MUST check or assert its type before using it
//

//any is a type that can hold any value, and you can use it directly without any type checking or assertion. It allows you to perform operations on values of any type, but it can lead to runtime errors if you try to use a value in a way that is not compatible with its actual type.
let newValue: any;
newValue = "This is a string";
newValue = 123; // can be assigned any value
newValue = [1,2,3];

newValue.toUpperCase(); // No error at compile time, but will cause a runtime error if newValue is not a string


//unknown is a type that can hold any value, but you cannot use it directly without type checking or assertion. It forces you to perform type checks or assertions before using the value, making it safer than `any` because it prevents unintended operations on values of unknown types.
let value: unknown;
value =  [1,2,3]; // can be assigned any value
value = "Hello"; // can be assigned any value
value = 42; // can be assigned any value

//value.toUpperCase(); // Error: Object is of type 'unknown'.

// But you cannot use it directly without type checking or assertion

// Type checking with typeof
if (typeof value === "string") {
    console.log(value.length); // Now TypeScript knows value is a string
}



