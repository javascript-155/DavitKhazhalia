//string managment method in javascript

const sampleString = "This is a sample string";

//length
const sampleStringLength = sampleString.length;
console.log(sampleStringLength);


//toUpperCase and toLowerCase

const upperCaseString = sampleString.toLocaleUpperCase();
console.log(upperCaseString);

const lowerCaseString = sampleString.toLocaleLowerCase();
console.log(lowerCaseString);

//indexOf
const indexOfs = sampleString.indexOf("s");
console.log(indexOfs);

// lastindexOf

const lastIndexOfs = sampleString.lastIndexOf("s");
console.log(lastIndexOfs);

//charAt
const charAt3 = sampleString.charAt(3);
console.log(charAt3);

//slice

const slicestring = sampleString.slice(3,7);
console.log(slicestring);

//replace
const replaceString = sampleString.replace("sample", "new");
console.log(replaceString);

//replaceAll
const replaceAllString = sampleString.replaceAll ("a", "A")
console.log(replaceAllString);

//split
const splitString = sampleString.split (" ");
console.log(splitString);

//Array to string
const arrayToString = splitString.join("-");
console.log(arrayToString);

//count occurence of specific char in string   კონკრეტული სიმბოლო რამდენჯერ მეორდება სტრიქონში
console.log(sampleString.split("s"));
const countSoccurence = sampleString.split("s").length-1;
console.log(countSoccurence);


