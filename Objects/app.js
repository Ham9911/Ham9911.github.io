//Assign 01
// var itemsArray = [
//     { name: 'juice', price: '50', quantity: '3' },
//     { name: 'cookie', price: '30', quantity: '9' },
//     { name: 'shirt', price: '880', quantity: '1' },
//     { name: 'pen', price: '100', quantity: '2' }
// ];
// var totals = [];
// for (var a = 0; a < itemsArray.length; a++) {
//     var sum = (Number(itemsArray[a].price) * Number(itemsArray[a].quantity));
//     console.log('The Price of ' + itemsArray[a].name + ' is: ' + sum);
//     totals[a] = sum;
// };

// var x = 0;
// for (var b = 0; b < totals.length; b++) {
//     x += totals[b];
// }
// console.log('The total of all products are ' + x);


//Assign 02
// var bioData = {
//     name: 'Hammad',
//     email: 'hammad@ham',
//     password: 12345,
//     age: 26,
//     gender: 'm',
//     city: 'karachi',
//     country: 'pakistan',
// };

// console.log("age" in bioData);
// console.log("country" in bioData);
// console.log("firstName" in bioData);
// console.log("lastName" in bioData);


//Assign 03
// function Record(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
// }

// var hammad = new Record('hammad', 26, 'm', 'hamm@gmail.com');
// var ebad = new Record('ebad', 22, 'm', 'ebd@gmail.com');
// var wahaj = new Record('Wahaj', 20, 'm', 'whj@gmail.com');
// var maham = new Record('Maham', 22, 'f', 'mhm@gmail.com');

// function Record(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
// }

// var user1 = new Record(document.getElementById('name').innerHTML, document.getElementById('age').innerHTML, document.getElementById('gender').innerHTML, document.getElementById('emai').innerHTML);