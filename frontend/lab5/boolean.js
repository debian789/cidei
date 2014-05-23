/* Variables y elementos del tipo Booleano */

var verdadero = true;
var falso = false;

/* elementos de comparacion */

/* igual (== )*/
console.log(1 == 1);
/* correccion de tipos  */
console.log("1" == 1); // convierte de "1"  a 1 
console.log(1 == true);
console.log(0 == false);
console.log("" == 0); // convierte "" a 0
console.log(0 == ""); // convierte "" a 0 

console.log("    " == 0 ); // convierte "    " a 0

//declaracion de un objecto 
var x = {};
var y = x; 

console.log(" es la comparacion de los objecto : "  + (x == y) );

/* Igualdad estricta  (===)  no hace correcpcion de tipos */
console.log("1" === 1);
console.log("" === 0 );

var w = {};
var z = w; 


// comparacion no estricta de no igual (!=) 
console.log("comparacion no estricta " +  ("" != 0 ));

// comparacion estricta de no igual (!==)
console.log("comparacion estricta " +  ("" !== 0 ));

/* Flujos logicos */
console.log(" ------------- flujos logicos ------------- ");

console.log(true && true )
console.log(true && false )
console.log(false  && true )
console.log(false && false  )

// operador del tipo OR 
console.log("tabla basica del OR ")
console.log(true || true  );
console.log(true || false );
console.log(false || true );
console.log(false || false );


console.log(" es la comparacion de los objecto de manera estricta : "  + (x ===  y) );
