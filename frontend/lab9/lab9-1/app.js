var express     = require('express'),
	app         = express(),
	http        = require('http'),
	server      = http.createServer(app),
	io          = require('socket.io').listen(server);
server.listen(8585);

app.use(express.static(__dirname));
//Rutas que se manejas 
app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});




// variable usernames para los usuarios conectados 
var usernames = {};

io.sockets.on('connection',function(socket){
	// cuando el cliente, browser, emite el evento 'sendchat', este debe escuchar y ejecutar 
	socket.on('sendchat',function(data){
		// le enviamos 'emit' al cliente que ejecuta 'updatechat' con dos parametros 'socket.username' y 'data'
		io.sockets.emit('updatechat',socket.username,data);
	});

	socket.on('adduser',function(username){
		//almacenamiento del nombre de usuario en la sesion de toma de info del cliente
		socket.username = username;
		//adicionamos el usuario 'socket.username' al objeto 'usernames' 
		usernames[username] = username;
		//enviamos al cliente el objeto con la listas de usuarios en el objeto 'usernames'
		socket.broadcast.emit('updatechat','SERVER ',username + 'Esta conectado');

		// enviamos peticion al mismo cliente de la petcion con la conexion de el mismo
		socket.emit('updatechat','SERVER','Ustes esta conectado');

		// acutalizamos la slita de usuarios en el chat, en el cliente 
		io.sockets.emit('updateusers',usernames);

	});

	//cuando el usuario se desconecta 
	socket.on('disconnect',function(){
		delete usernames[socket.username];
		//actualizamos la de usuarios en el cliente 
		io.sockets.emit('updateusers',usernames);

		//envio global de la actualizcion de la lista de clientes conectados 
		socket.broadcast.emit('updatechat','SERVER',socket.username + 'esta desconectado');
	});
});

