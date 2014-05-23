var d, minutes, time, hours, message;

// Utilizamos el objeto Date de JS 

d= new Date();

hours = d.getHours();
minutes = d.getMinutes();

console.log(typeof(hours));
console.log(typeof(minutes));

if (hours < 10 ){
	hours = "0"+ hours ; // convierte en estring "hours "
} else {
	hours.toString();

}


console.log("hora :" + 	hours);

if(minutes < 10 ){
	minutes = "0"+minutes;
}else {
	minutes.toString();

}

console.log("minutos : " + (minutes));


time= Number(hours + minutes);

console.log(typeof(time));
console.log("horas :" + time);

if(time >= 0000 && time < 1200 ){
	console.log("Buenos dias ");
}else if (time >= 1200 && time < 1700){
	console.log("Buenas tardes");
}else if (time > 1700  && time <=  2359 ){
	console.log("Buenas noches");
}

