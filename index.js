// 1
// function printUppercaseMessage (message) {
//   console.log(message.toUpperCase());
// }

// myMessage = `I'm on a path to becoming a JS developer!`;

// printUppercaseMessage(myMessage);



// 2


// function addAndPrint (x, y) {
    
//   console.log(x * y);
// }

// addAndPrint(4,5);

// 3

// 	const sayHello = (name, surname) => {
//   console.log('Hello, ' + name + ' ' + surname + '!');
// };
// sayHello();


// 4


// const sum = (x,y) => {
//     return x + y;
// }

// console.log(sum(210, 210));

// 5


// 	const animals = [{
//   type: 'Dog',
//   name: 'Rex',
// }, {
//   type: 'Horse',
// }];
// console.log(animals.length);
// animals.push({type: 'Cat', name: 'Murka'});
// console.log(animals.length);


// 6

// const numbers = [1, 2, 3, 4];

// console.log(numbers);

// numbers.push (5,6,7,8,9)
// console.log(numbers);


// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

const array1 = [1,2,3,4,5,6,7,8,9];
const array2 = [1,2,3,4,5,6];
function getCommonElements(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
      console.log(array1[i]);
    }

  for (let i = 0; i < array2.length; i++) {
      console.log(array2[i]);
    }
}
