/**
* @requires express
* @requires createServer
*/

var express     = require('express'),
path = require('path'),
app = express(),
http = require('http'),
server = http.createServer(app),
bodyParser = require('body-parser'),
//var cookieParser = require('cookie-parser');
port = 8585;

server.listen(port,function(){
	console.log('listen %d',port);
});


/**
* @memberof express for static files
*/
app.use(express.static(path.join(__dirname,'dist')));

//app.use(express.static(path.join(__dirname + 'dist')));


/**
* @memberof express
*
*/
app.use(bodyParser.json());

app.get('/',function(req,res){
	console.log('estoy aqui');
	res.sendfile(__dirname + '/index.html');
});


/**
* @param {object} req
* @param {object} res
*/
app.post('/values',function(req,res){
	/** @var {object} obj */
	var obj = {};
	console.log('body' + JSON.stringify(req.body));
	/** @return {object} return JSON object */
	res.send(req.body);
});
