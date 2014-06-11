var logic = require('./logic');

function dividir(a,b){
	if(b > 0 ){
		return a/b;

	}else{
		return 'no calculable '
	}
next();
}


exports.get = function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});

	res.end(logic.page('Dividir',logic.navbar(),
		[
			(!isNaN(req.a)) ? 
			('<p>{a} / {b} = {res} </p>')
			.replace('{a}',req.a)
			.replace('{b}',req.b)
			.replace('{res}',dividir(req.a, req.b)) 
			
			: '',
			'<p>Ingrese un numero para calcular</p>',
			'<form action="/division" name="division" method="get">',
			'A: <input type="text" name="a" />',
			'B: <input type="text" name="b" />',
			'<input type="submit" value="calcular"/>',

			'</form>'
		].join('\n'))
	);
}