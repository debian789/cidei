$(document).ready(function (argument) {


$("#verde").on('click',function(event){
	$('.textA').addClass('rojo');
	//debugger;
	event.preventDefault();
}); 


$("#rojo").on('click',function(event){
	$('.textB').addClass('verde');
	//debugger;
	event.preventDefault();
}); 



})