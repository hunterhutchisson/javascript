//1. positive numbers
// arr = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
// let arrPos = arr.filter(num=> num >= 0)
// console.log(arrPos);

//2. even numbers
// arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9]
// let arrEven = arr.filter(num=> num % 2 == 0)
// console.log(arrEven);

//3. square the numbers
// arrRoot = [1, 2, 3, 4, 5, 6 ,7, 8, 9]
// let arrSq = arrRoot.map(num=> num ** 2)
// console.log(arrSq);

//4. Cities 1
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let coolCities = cities.filter(city=> city.temperature<70)
// console.log(coolCities);

//5. Cities 2
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let cityNames = cities.map(city=> city.name)
// console.log(cityNames);

//6. Good Job!
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(element => console.log(`Good Job, ${element}`));

//7. Sort an array
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort()
// console.log(people);

//8. Sort an array, 2
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// let peopleLength = people.sort((a, b)=> b.length - a.length)
// console.log(peopleLength);

//9. Sort an array,3
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];
// function sum(array){
//     let sum = 0
//     for (let index = 0; index < array.length; index++) {
//         sum += array[index];
        
//     }
//     return sum
// }
// let arrSum = arr.sort((a, b)=> sum(a) - sum(b))
// console.log(arrSum);

// // using reducer
// let reducer = (previousValue, currentValue) => previousValue + currentValue;
// let summed = arr.sort((a, b)=> a.reduce(reducer) - b.reduce(reducer))
// console.log(summed);




//10. 3 times
// function fun () {
//     console.log(`Hello, World!`);
// }
// function call3Times(fun) { 
//     fun(); fun(); fun(); 
// }
// call3Times(fun)

//11. n times
// function fun () {
//     console.log(`Hello, World!`);
// }
// function callNTimes (number, fun){
//     for (let index = 0; index < number; index++) {
//         fun()
        
//     }
// }
// callNTimes(5, fun)

//12.
// function sum(arr){
//     let reducer = (previousValue, currentValue) => previousValue + currentValue;
//     console.log( arr.reduce(reducer)); 
// }
// sum([1, 2, 3])

//13. Acronym
