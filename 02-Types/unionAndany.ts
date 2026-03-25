//union
let subs: number | string;

//making custom data type
let apiRequestStatus: "pending" | "success" | 'error';

let airLineSeat: 'aisle' | 'middle' | 'window' = "aisle";

const orders = ["12", "23", "34", "45", "56", "67"];
// let currentOrder; //any type
let currentOrder: string | undefined;
for(let order of orders){
    if(order === "34"){
        currentOrder = order;
    }
}
console.log(currentOrder);