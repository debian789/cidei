function Suma(a,b) {
	this.a = a;
	this.b = b; 



}



Suma.prototype = {
	constructor: Suma ,
	getA : function(){
		console.log("A  :" + this.a);
	},
	getB : function(){
		console.log("B : " + this.b);
	},
	getResult : function(){
		return this.a+ this.b;
	}


}