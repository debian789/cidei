// un callback es una funcion que por parametro se le envia otra
// funcion y la funcion que lo recibe espera que se ejecute esa funcion 


function alg(miCallback){
	miCallback();


}

alg(function(){
	console.log("esto es un callback");
})


function otroCalback(miCallback){
	miCallback("un argumento ");
}

otroCalback(function(unvalor){
	console.log("algo se imprie y es : " + unvalor);
});


function algoOcurre(callback1,callback2,callback3){
	//pasa la primer vez 
	callback1('Primer paso');

	//siguiente  callback 
	callback2("Segundo paso");

	//y por ultimo 
	callback3("ultimo y tercer paso");
}

//llmada y uso de  los multiples Callbacks para 'algoOcurre'
algoOcurre(
	function(paso1){
		console.log(paso1)
	},
	function(paso2){
		console.log(paso2)
	},
	function(paso3){
		console.log(paso3)
	});