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
		var abc = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"],
		    voca = ["a","e","i","o","u"],
		    temp = [],
		    j = 0,
		    bandera = false;

		    
		while( j  < abc.length ){

			for(var i = 0; i <  voca.length; i ++){
				if(voca[i] == abc[j]){
					bandera = true; 
				}
			}

			if(bandera == false){
				temp.push(abc[j]); 	

			}else {
				bandera= false;
			}

			i = 0;
			j++;
		}

	console.log(temp);
	}

}