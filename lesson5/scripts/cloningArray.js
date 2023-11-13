//array cloning methods

let originalArray = ['arrple', 'orange', 'banana', 'mango', 'grapes'];
let copiedArray1 = originalArray.slice();
copiedArray1.pop();

// let badCopy = originalArray;
// badCopy.pop();

console.log(originalArray);
// Console.log(copiedArray1);

// copiedArray2 = [...originalArray];

// let isDataArray= array.isArray(originalArray);
// let copiedArray2 = array.from(originalArray);

// console.log(copiedArray2);

let copiedArray4 = [].concat(originalArray);
console.log(copiedArray4);



