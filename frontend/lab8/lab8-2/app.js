var http = require('http'),
	logic = require('./logic');

var server = http.createServer(function(req, res){
	logic.loadParameters(req,res,undefined);

	if(req.requrl.pathname === '/' ){
		require('./home').get(req,res);
	}else if (req.requrl.pathname === '/squared'){
		require('./squared').get(req,res);
	}else if (req.requrl.pathname === '/division'){
		require('./division').get(req,res);
	}else{
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.end("Error 404" + req.url);
		
	}
});

//se levanta el servidor por el puerto 3333
//en el navegador se pone http://127.0.0.1:3333
server.listen(3434);
console.log('Server en el puerto 3434');