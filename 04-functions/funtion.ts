//accept number
function addTwo(num: number){
    return num + 2;
}

console.log(addTwo(4))


//accept string only as parameter
const getUpper = (val: string) =>{
    return val.toUpperCase()
}

console.log(getUpper("Nayem"));


//get some differents types of parameter
let signUp = (name: string, email: string, isPaid: boolean)=>{

}
signUp("Nayem", "nayem@gmail.com", false)


//use default parameter
const loginUser = (name: string, email: string, isPaid: boolean = false)=>{

}

loginUser("Nayem", "naye455m@gmail.com")


