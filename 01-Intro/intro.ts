//TypeScript just a development tool

console.log("Nayem");

const user = {
    name:"Nayem",
    age: 23
}

console.log(user.name)


// console.log(user.age)  //it will give error, But in js it will give undefined as output


//function

const greet=(name: string):string =>{
    return `Hello ${name}`
}

greet("Nayem");


// greet(false);  provide error because we have defined the type of name as string, but in js it will work and give output as Hello false