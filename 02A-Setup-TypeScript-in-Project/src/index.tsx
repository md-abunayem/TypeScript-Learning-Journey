function greet(person: string): string {
    return `Hello ${person}`;
}

const username: string = "Nayem";
console.log(greet(username)); // it will give output as Hello Nayem

// console.log(greet(123)); // it will give error because we have defined the type of person as string, but in js it will work and give output as Hello 123