type Order = {
    type: string;
    sugar: boolean;
};

function makeTea(order: Order) {
    console.log(`Making a ${order.type} tea with${order.sugar ? '' : 'out'} sugar.`);
}

makeTea({type: 'green', sugar: true});


function makeCoffee(order: Order) {
    console.log(`Making a ${order.type} coffee with${order.sugar ? '' : 'out'} sugar.`);
}



type Personn = {
  name: string;
  age: number;
};

class Student implements Personn {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

