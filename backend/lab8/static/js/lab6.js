// var csrftoken = $.cookie('csrftoken');

// function csrfSafeMethod(method){
// 	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
// }


// function sameOrigin(url){
// 	var host=document.location.host;
// 	var protocol= document.location.protocol;
// 	var sr_origin = '//' + host;
// 	var origin = protocol + sr_origin;

// 	//Permitir cualquier esquema y estructura de la url 
// 	return (url == origin || url.slice(0,origin.length + 1 ) == origin + '/') ||
// 	       (url == sr_origin || url.slice(0,sr_origin.length+1) == sr_origin + '/') || 
// 			// Para cualquier url que no tenga un esquema definido 
// 			!(/^(\/\/|http:|https:).*/.test(url));
// }
	$.ajaxSetup({
		beforeSend:function(xhr,settings){
			// if(!csrfSafeMethod(settings.type) && sameOrigin(settings.url)){
			// 	//enviar el token aurls relativas 
			// 	//setear en la cabecera solo si el metodo garantiza CSRF 
			// 	//Usar el valor Csrftoken que propociona django 
			// 	xhr.setRequestHeader("X-CSRFToken",csrftoken);
			// }
		}
	});







$(document).ready(function(){
	//console.log('Hola Angel ');

	$("#getAllItems").on('click',function(){
$.ajax({
	url:'/items/ajax/',
	type:'GET',
	datatype:'json',
	success:function(data){
		data= $.parseJSON(data);
		for (var i = 0; i < data.length; i++){
			$.each(data[i].fields, function(key,value){
				$('#resultAllItems').append('<span>El valor es: <strong>'+ key + ' : ' + value +'</strong></span><br/>');
			});
		}
	},
	error:function(xhr,errmsg,err){
		alert(xhr.status + ":" + xhr.responseText);
	}
});

return false 
	});
});