function Sumatoria (datoArray){
	this.datoArray = datoArray;
}

Sumatoria.prototype = {
	constructor : Sumatoria,
	getSuma:function(){
		var i= 0, temp = 0 ;

		for(i=0 ; i < this.datoArray.length; i++  ){

			temp  +=  this.datoArray[i] ;
		}
		return temp;
	},
	getMultiplicacion:function(){
		var i= 0 , temp = 1 ;
		for(i=0 ; i < this.datoArray.length; i++  ){

			temp  *=  this.datoArray[i] ;
		}
		return temp;
	},
	getAbc : function(){
		var abc = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","z"];

		var voca = ["a","e","i","o","u"];

		var temp = [];

var j = 0;
		while( j  < voca.length ){

			j++;

			for(var i = 0; abc.length; i ++){
				if(voca[j] === abc[i]){
					console.log( abc[i]);
				}
			}

		}


		// for ( var i = 0 ; i < voca.length; i++  ){
		// 	for ( var j = 0; j < abc.length;j++){
		// 	//	while( j < voca.length ){					
		// 			if (voca[j] === abc[i])
		// 			{
		// 			}else {
		// 				temp.push(abc[i]);						
		// 			}
		// 	}
		// 	//console.log(temp)
		// }
		console.log(temp);
	}

}