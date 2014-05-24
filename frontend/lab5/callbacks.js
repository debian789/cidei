// un callback es una funcion que por parametro se le envia otra
// funcion y la funcion que lo recibe espera que se ejecute esa funcion 


function alg(miCallback){
	miCallback();


}

algo(function(){
	console.log("esto es un callback");
})


function otroCalback(miCallback){
	miCallback("un argumento ");
}

otroCalback(function(unvalor)){
	console.log("algo se imprie y es : " unvalor);
}