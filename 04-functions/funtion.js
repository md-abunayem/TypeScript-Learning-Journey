//accept number
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(4));
//accept string only as parameter
var getUpper = function (val) {
    return val.toUpperCase();
};
console.log(getUpper("Nayem"));
//get some differents types of parameter
var signUp = function (name, email, isPaid) {
};
signUp("Nayem", "nayem@gmail.com", false);
//use default parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Nayem", "naye455m@gmail.com");
