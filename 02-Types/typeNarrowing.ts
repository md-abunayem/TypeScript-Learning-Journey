function getVal(kind: string | number){
    if( typeof kind === 'string'){
        return `Making ${kind} chai....`;
    }
    return `Chai order: ${kind}`;
}

function serveData( msg?: string){
    if(msg){
        return `Servig ${msg}`;
    }
    return `Serving default data`
}

function orderTea(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small cutting tea....`
    }
    if(size === "medium"){
        return `Medium cutting tea....`
    }
    if(size === "large"){
        return `Large cutting tea....`
    }

    return `Tea order: #${size}`;
}



class Cat {
    makeSound(){
        return `Some generic sound`;
    }
}

class Dog {
        makeSound(){
            return `Bark bark!`;
    }
}

function getAnimalSound( animal: Cat | Dog){
    if(animal instanceof Dog){
        return `Dog says: ${animal.makeSound()}`;
    }else if (animal instanceof Cat) {
        return `Cat says: ${animal.makeSound()}`;
    }
}

const cat = new Cat();
const dog = new Dog();

console.log(getAnimalSound(dog))
console.log(getAnimalSound(cat))


//Custom Type Guard
type TeaOrder = {
    type: string;
    sugar: number;
}

function isTeaOrder(obj: any): obj is TeaOrder {
    return (obj === 'object' && obj!== null && typeof obj.type === 'string' && typeof obj.sugar === 'number');   //return true or false
}

function serveOrder(item: TeaOrder | string){
    if(isTeaOrder(item)){
        return `Serving ${item.type} tea with ${item.sugar} sugar(s).`;
    }
}