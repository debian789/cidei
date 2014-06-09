$(document).ready(function(){

	var nombre,email,password,alimento=[],precioTotal,tipoPago,city,cantidad=0;	
	$('.error').hide();
	
	$('.name').blur(function(){
		var data = $('.name').val();
		var len = data.length;

		if(len < 1){
			$('.name').next().show();
			$('.password').attr('disabled',true);
			$('.confpass').attr('disabled',true);
			$(this).parent().find('.error').show().text("Nombre requerido");
		}else{
			$(this).css('background','green');
			$('.name').next().hide();
			$(this).parent().find('.error').hide();
			$('.password').removeAttr('disabled');
			$('.confpass').removeAttr('disabled');
			nombre = $(this).val();
		}		
	});


	$('.email').blur(function(){
		var self = $(this);
		var data = $('.email').val();

		var len = data.length;

		if(len < 1){
			$('.email').next().show();
			$('.password').attr('disabled',true);
			$('.confpass').attr('disabled',true);
			$('input[type=checkbox]').attr('disabled',true);
			$('input[type=radio]').attr('disabled',true);
			$('#city').attr('disabled',true);



		}else{

			if(valid_email(data)){
				//$('.error').hide();
				$(this).parent().find('.error').hide();

				//localStorage.setItem('email',data);
				//$('.result').text("el correo almacenado es : " + localStorage.getItem('email'));
				$(this).css('background','green');
				$('.password').removeAttr('disabled');
				$('.confpass').removeAttr('disabled');
				$('input[type=checkbox]').removeAttr('disabled');
				$('input[type=radio]').removeAttr('disabled');
				$('#city').removeAttr('disabled');

				email = $(this).val();

			}else{
				//console.log('estoy aqui');
				self.parent().find('.error').show();
				self.parent().find('.error').text("Ingrese una direccion de correo valida");
				$('.password').attr('disabled',true);
				$('.confpass').attr('disabled',true);
				$('input[type=checkbox]').attr('disabled',true);
				$('input[type=radio]').attr('disabled',true);
				$('#city').attr('disabled',true);
				
			//$('.email').next().hide();
			//$('.password').removeAttr('disabled');
			//$('.confpass').removeAttr('disabled');
		}

	}		
});



$('.password').blur(function(){
	var data = $('.password').val();

	var len = data.length;

	if(len < 1){
		$('.password').next().show();
		$('.confpass').attr('disabled',true);

	}else{
			//$(this).css('background','green');

			$('.password').next().hide();
			$('.confpass').removeAttr('disabled');
		}



	});

$('.confpass').blur(function(){
	if($('.password').val() !== $('.confpass').val()){
		$('.password').css('background','white');
		$(this).css('background','white');
		$('input[type=checkbox]').attr('disabled',true);
		$('input[type=radio]').attr('disabled',true);
		$('#city').attr('disabled',true);
		$(this).parent().find('.error').show().text("password incorrecto");
	}else{
		$(this).css('background','green');
		$('.password').css('background','green');
		$('input[type=checkbox]').removeAttr('disabled');
		$('input[type=radio]').removeAttr('disabled');
		$('#city').removeAttr('disabled');
		$('.confpass').next().hide();
			$(this).parent().find('.error').hide();//text("password incorrecto");
			password = $(this).val();
		}
	});

// $('.calcular').blur(function(){

// });

$('input[type=checkbox]').click(function(){

	cantidad=0;
	$('form').find('input[type=checkbox]:checked').each(function(){
		if($(this).is('input[type=checkbox]:checked')){

			cantidad = cantidad + parseInt($(this).val());
			$(this).parent().find('.resultado').text("Valor : "+ cantidad);


		}
	});


	if($('input:checked').length == 0){
		$(this).parent().find('.resultado').text("Valor : 0");


	}
});





$('input[type=radio]').click(function(){

	tipoPago = $('input[type=radio]:checked').attr('id');
		//debugger;
		

	});

$('select').blur(function(){

	var count = $('select option:selected').val();

	if(count === "0"){
		$('p.result').hide();
		$('.error').show();
		$('.error').text("deber seleccionar uno ");

	}else{
		var selecOption="";

		$('.select option:selected').each(function(){
			selecOption += $(this).text()+",";
			city= $(this).val();
			//	debugger;
		});

		$('.error').hide();
		$('p.result').show();

			//$('p.result').text("Ud. Selecciona el alimento : " + $('select option:selected').text());
			$('p.result').text("Ud. Selecciona el alimento : " +selecOption);
		}



		//tipoPago = $(this).attr('name');
		//debugger;
	});






$('.button').on('click',function(){




//  	var nombre,email,password,alimento=[],precioTotal,tipoPago,city,cantidad=0;
//  if(!nombre.length == 0 ){

// }
// }else{

// }

localStorage.setItem('nombre',nombre);
localStorage.setItem('email',email);
localStorage.setItem('password',password);
localStorage.setItem('cantidad',cantidad);
localStorage.setItem('tipoPago',tipoPago);
localStorage.setItem('city',city);



alert("Nombre : "+ localStorage.getItem('nombre') +"\n"+
	"Email : " + localStorage.getItem('email')+"\n"+
	"Tipo Pago : " + localStorage.getItem('tipoPago')+"\n"+
	"Ciudad : "+localStorage.getItem('city')+"\n"

	);
// var  ema = localStorage.getItem('email')
// var  pas = localStorage.getItem('password')
// var  can = localStorage.getItem('cantidad')
// var  tip = localStorage.getItem('tipoPago')
// var  cit = localStorage.getItem('city')

// alert()




event.preventDefault();
	//return false;
});












function valid_email(email){
	var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
	return pattern.test(email);

}

});
