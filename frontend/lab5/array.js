/* Arrays */

var myArray = new Array(); // traes los todos lo objectos del objecto array 

var myArray = [];


myArray = [1,3,3,4,45,6,5,56,6,6];

console.log(myArray[4])

//push agregar elemento al final de array 
	myArray.push(10); 
console.log(myArray);
	myArray.push("hola mundo ");
console.log(myArray);

// pop elimina el ultimo elemento del array 

myArray.pop();
console.log(myArray);

// inverse invierte al orden del array 
console.log(myArray.reverse());

// shift elimina el primer elemento 
myArray.shift();

console.log(myArray)
// sort , organizar el array 

console.log(myArray.sort());

var mySecondArry = ["hola munod","string ","cidei"]
console.log(mySecondArry.sort());

// splice 

var tasks = ["Hola mundo", "Hola cidei", "Chao"]

console.log(tasks);

tasks.splice(1,1,"Chao cidei ");
tasks.splice(1,1,"Chao cidei ", "jajja","ched");

console.log(tasks);
