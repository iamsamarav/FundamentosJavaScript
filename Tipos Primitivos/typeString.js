//Example Type String

const myFirstString = "Hello, World";
const mySecondString = 'Hello, User';

console.log(myFirstString+" "+mySecondString);

const name = "Samara";
console.log(`Hello, ${name}`);

let alterMyString = myFirstString.replace("World", "Alura");
console.log(alterMyString);

console.log(alterMyString.charAt(5))
console.log(alterMyString.charCodeAt(6))
console.log(alterMyString.codePointAt(4))
console.log(alterMyString.endsWith("Alura"))
console.log(alterMyString.includes("Alura", [7,12]))
console.log(alterMyString.indexOf("Alura"))
console.log(alterMyString.lastIndexOf("Alura"))