/* Alcances de las variables en las funciones */

// Variables global 

var a = "a";

  function levelb(){
	var b="b";

	function levelc (){
		var c = "c";
		function leveld(){
			var a = "aa";
			var d = "d";
			console.log(a + b + c + d);
		}
		leveld();
		console.log(a + b + c );

	}
	levelc();
	console.log(a + b );
}

levelb();



// function hola (){
// 	function saludar(da){
// 		console.log(" hola : "+ da)
// 	}
// 	var sal; 
// 	return {
// 	   sal: function(){ }

// 	}
// }


// hola.sal(78);