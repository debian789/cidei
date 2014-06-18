var socket = io.connect('http://192.168.2.226:8585');

// en conexion con el servidor, pregunta el respectivo nombre de usuario y una devulucion anonima de llamado 

socket.on('connect',function(){
	//llamado  el evento, function 'adduser' y le enviamos un parametro ingresado por el prompt

	socket.emit('adduser',prompt('Cual es su nombre de usuario'));
});


// evento que esta escuchando la invocacion de 'updatechat'

socket.on('updatechat',function(username,data){
	$('#conversation').append('<b> ' + username +'</b> '+data + '<br />');
});

//Evento que esta eschando la invocacion de 'updateusers', este actualiza la lista de usuarios 

socket.on('updateusers',function(data){
	$('#users').empty();

	$.each(data,function(key,value){
		$('#users').append('<div> '+key+'</div>');
	});
});


$(document).ready(function(){
	$('#datasend').click(function(){
		var message = $('#data').val();
		// indicale al servidor que ejecute el evento 'sendchat' y se le envian dos parametros 

		socket.emit('sendchat',message);
	});


	// cuando el usuario utiliza la techa ENTER

	$('#data').keypress(function(event){
		if(event.which === 13){
			$(this).blur();
			$('#datasend').focus().click();

		}
	})
});