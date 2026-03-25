// `never` in TypeScript
//
// `never` represents a value that NEVER occurs.
// It is used when a function does not return anything at all
// (not even undefined).
//
// Key Idea:
// - `never` = "this will never happen / never return"
//

type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return;
    }else if(role === "user"){
        console.log("Redirect to user homepage");
        return;
    }

    role;    //becomes superadmin here, but we don't handle it
}


// Example 1: Function that always throws error
function neverReturns(): never {
    throw new Error("This function never returns");
}

// Example 2: Infinite loop
function infiniteLoop(): never {
  while (true) {}
}