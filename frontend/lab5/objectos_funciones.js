/* Objectos y funciones  */

var myObject = new Object();
var myObject = {};

//los array tambien son objectos 
var lotter = [2,46,7,64]


profile = {
	firstName : "Angel",
	lastName :"Suescun",
	phone :"3434343"
}

console.log(profile);
console.log(profile.lastName)

for (key in profile ){
	console.log(profile[key])
}

//profile.forEach(function(a){ console.log(a)});

// funciones 

function test(){
	console.log("hola");
}

test();

// uso de funcion anonima 
chao = function(){
	console.log("hola mundo ");
}

chao();