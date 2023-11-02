let array1 =['george', 'luke', 
1998, 15.98, true, false, null, undefined];

// console.log(array1);
// console.log(array1[1]);
// console.log(array1 [length-1]) //როცა არ იცის ელემენტების რაოდენობა

// array1.push('new value'); //მასივში ახალი ელემენტის დამატება
// console.log(array1);

// array1.push(prompt("enter new value")); ბაზისთვის ახალი ელემენტის დამატება მაგალითად
// console.log(array1);

// array1.pop('new value');  // ბოლო ელემენტის წაშლა 
// console.log(array1);

array1.push('new value');
array1.pop();
array1.pop();
array1.pop();
array1.pop();

array1.shift(); //ელემენტების წაშლა წინიდან
array1.shift(); 
array1.unshift("start value", "start value 2");  //ახალი ელემენტის დამატება თავში



array2 = ['Thomas', 'John', 'James', 'David', 'Yan', 'Paul', 'Ringo'];
let concatedArray = array1.concat(array2);
let sliceArray = array2.slice(2,5); // ნაწილებად გამოიტანს/დაყოფს ინდექსის მიხედვით.
// console.log(sliceArray);



let fruits = ['Apple', 'Banan', 'Orange', 'Pineapple', 'Mango' ];
// let splicedfruits = fruits.splice(2); //გამოიტანს ელემენტებს რაღაციდან (ამ შემთხვევაში მე-2 ინდექსი) ბოლომდე
// let splicedfruits = fruits.splice(2, 2); //ფრჩხილებში პირველი არის ინდექსი საიდან დაიწყოს გამოტანა და მეორე რიცხვი არის ელემენტების რაოდენობა მე-2-ს შემდგომ რამდენი გამოიტანოს
// console.log(splicedfruits);

// console.log(fruits.length);  //ელემენტების ოდენობა გამოაქვს (რაოდენობის დათვლას იწყებს 1-დან და არა-0-დან)

console.log(array2[array2.length-1]) //როცა არ ვიცი მასივი რამდენი ელემენტისგან შედგება და გვინდა ბოლო ელემენტის გამოტანა.

//console.log(array2.length);
// console.log(array2.splice(6)); (როცა არ ვიცი მასივში რამდენი ელემენტია, ჯერ გაიგებ სიგრძეს და მერე სპლაისით სიგრძეზე ერთი ელემენტით ნაკლები იქნება ბოლო ინდექსი)


