// Hello, you!

// function hello(name){
//     console.log(`Hello, ${name}!`);
// }
// hello("Hunter")

// Hello, you! Part 2

// function hello(name){
//     if (name.length > 0){
//         console.log(`Hello ${name}!`);
//     }
//     else{
//         console.log("Hello, world!");
//     }
// }

// hello("")

// Madlib

// function madlib(name, subject){
//     var lib = `${name}'s favorite subject in school is ${subject}.`
//     return lib
// }
// var fillOut = madlib("Anushka", "art")
// console.log(fillOut);

// Tip Calculator

// function tipAmount(billTotal, los){
//     if(los == "good"){
//         tip = billTotal * 0.2
//     }
//     else if(los == "fair"){
//         tip = billTotal * 0.15
//     }
//     else if(los == "bad"){
//         tip = billTotal * 0.1
//     }
//     return tip
// }

// var tipped = tipAmount(100, "good")

// var tipped = tipAmount(40, "fair")

// console.log(tipped);

// Tip Calculator 2

// function totalAmount(billTotal, los){
//     if(los == "good"){
//         tip = billTotal * 0.2
//     }
//     else if(los == "fair"){
//         tip = billTotal * 0.15
//     }
//     else if(los == "bad"){
//         tip = billTotal * 0.1
//     }
//     var totalPaid = billTotal + tip
//     return totalPaid
// }

// var paid = totalAmount(100, "good")

// var paid = totalAmount(40, "fair")

// console.log(paid);

// Tip Calculator 3

// function splitAmount(billTotal, los , numPeople){
//     if(los == "good"){
//         tip = billTotal * 0.2
//     }
//     else if(los == "fair"){
//         tip = billTotal * 0.15
//     }
//     else if(los == "bad"){
//         tip = billTotal * 0.1
//     }
//     var totalPerson = (billTotal + tip) / numPeople
//     return totalPerson
// }

// var paidPerson = splitAmount(100, "good", 5)

// var paidPerson = splitAmount(40, "fair", 2)

// console.log(paidPerson);