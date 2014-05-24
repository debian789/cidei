/* Programacion Orientada a Objetos */

function Person(firstName,lastName,profession,genre,ege,city){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession= profession;
	this.genre = genre;
	this.ege = ege;
	this.city = city;
	this.studies = [];
}


Person.prototype = {
	// muestra el contenido del constructor 
	constructor: Person,
	getFirstName: function(){
		console.log("El  primer nombre de la Persona es : " + this.firstName);
	},
	getLastName: function(){
		console.log("El apellido de la persona es : "+ this.lastName);
	},
	getProfession:function(){
		console.log("La profession de la person es : " + this.profession);
	},
	getGenre:function(){
		console.log("El genero de la persona es : " + this.genre);

	},
	getAge: function(){
		console.log("El la edad de la personaes : " + this.ege);

	},
	getCity:function(){
		console.log("La ciudad de la persona es : " + this.city);

	},
	getStudies: function(){

		// var i; 
		// for (i=0;i < this.studies.length ; i++){

		// }

		this.studies.forEach(function(data){
			console.log( "El estudio de la persona es :  " + data);
		});

	 // var i = 0;

		// for( i in this.studies ){
		// 	console.log("tiene estudiso en: " + this.studies(i));
		// }
	}
}







function Animal (name,genre,age,species,numberZoo,zooName){
	this.name = name;
	this.genre = genre;
	this.age = age;
	this.species = species;
	this.numberZoo = numberZoo;
	this.zooName = zooName;

}


Animal.prototype = {
	constructor: Animal,
	getName : function(){
		console.log("Nombre :" + this.name );
	},
	getGenre : function(){
		console.log("Genero :" + this.genre );
	},
	getSpecies : function(){
		console.log("Especie :" + this.species );
	},
	getNumberZoo : function(){
		console.log("Numero Zoo :" + this.numberZoo );
	},
	getZooName : function(){
		console.log("ZooName  :" + this.zooName );
	}

}

