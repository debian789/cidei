$(document).ready(function(){

	$('#info').hide();


	function Validate(){};

	Validate.prototype = {
		email:function(email){
			var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(email);
		},
		userid:function(uid){
			var pattern = new RegExp(/^[0-9]+$/);
			return pattern.test(uid);

		}
	}

	$('#nid').focus(function(){
		$(this).addClass('inputs');
	});

	$('#username').focus(function(){
		$(this).addClass('inputs');
	});

	$('.password').focus(function(){
		$(this).addClass('inputs');
	});
	$('.conf-password').focus(function(){
		$(this).addClass('inputs');
	});

	$('.nid-error').addClass('error');
	$('.nid-error').hide();


	$('.user-error').addClass('error');
	$('.user-error').hide();


	$('.password-error').addClass('error');
	$('.password-error').hide();


	$('.conf-password-error').addClass('error');
	$('.conf-password-error').hide();


	$('.email-error').addClass('error');
	$('.email-error').hide();



	$('.food-error').addClass('error');
	$('.food-error').hide();


	$('.pay-error-error').addClass('error');
	$('.pay-error-error').hide();



	$('.city-error').addClass('error');
	$('.city-error').hide();



	$('#buttons #info').remove();

	$('.button').bind('click',function(event){
		var validate = new Validate();
		var data = $('#nid').val();

		if(validate.userid(data)){
			$('#nid').next().hide();
			$('.nid-error').next().hide();
			localStorage.setItem('nid',data);
			//$('.nid-error').text('Id correcto ');

		}else {
			$('input#nid').addClass('error');
			$('.nid-error').next().show();
			$('.nid-error').text('Indique su documento de Identidad');
			event.preventDefault();
		}


		var data = $('#username').val();
		var len = data.length;

		if(len < 1 && data === ""){
			$('#username').next().show();
			$('.user-error').next().show();
			$('.user-error').text('Indique su(s) Nombre(s) y Apellido(s)');
			event.preventDefault();

		}else{
			$('#username').next().show();
			$('.user-error').hide();
			localStorage.setItem('username',data);
			//$('.user-error').text('usuario correcto ');
			

		}

		var data = $('.password').val();
		var len = data.length;

		if(len < 1 && data == ""){
			$('.password').next().show();
			$('.password-error').next().show();
			$('.password-error').text('Ingrese una contrasena ');
			event.preventDefault();

		}else{
			$('.password').next().hide();
			$('.password-error').next().hide();
			localStorage.setItem('password',data);
			//$('.password-error').text('passwor correcto ');

		}

		var confdata = $('.conf-password').val();
		var len = confdata.length;

		if(len < 1 && len !== ""){
			$('.conf-password').next().show();
			$('.conf-password-error').next().show();
			$('.conf-password-error').text('Confirme lacontrasena ');
			event.preventDefault();

		}else{
			$('.conf-password').next().hide();
			$('.conf-password-error').next().hide();
			if( $('.password').val() !== $('.conf-password').val() ){
				$('.conf-password').next().show();
				$('.conf-password-error').next().show();
				$('.conf-password-error').text('la contrasena No es Igual  ');
				event.preventDefault();

			}else{
				$('.conf-password').next().hide();
				$('.conf-password-error').next().hide();
			}
		//localStorage.setItem('conf-password',data);


	}



	var data = $('.emailadd').val();

	
	if(validate.email(data)){
		$('.emailadd').next().hide();
		$('.emailadd-error').hide();
		$('.email-error').text(' Email Correcto ')
		localStorage.setItem('email',data);


	}else{
		$('.emailadd').next().show();
		$('.email-error').next().show();
		$('.email-error').text('El email es incorrecto !');
		event.preventDefault();
	}

	var count = 0, meals = {};

	$('#checkboxes').find(':checked').each(function(){
		if($(this).is(':checked')){
			count += parseInt($(this).val());
			/*
			var a ={};
			a.food = "pizza";
			a['food'] ='pizza';
			*/
			meals[$(this).attr('name')] = parseInt($(this).val());
		}
	});


	if(count === 0 ){
		$('.food-error').css({'margin':50}).show();
		$('.food-error').text('Debe seleccionar un alimento ');
		event.preventDefault();
		
	}else{
		//$('.food-error').text('selecconar ');

		$('.food-error').hide();
		$('.food-total').show();
		$('.food-total').text('El total de la compra: $'+count+'M/Cte');

		localStorage.setItem('total',count);
		localStorage.setItem('meals',JSON.stringify(meals));
	}

	count = 0;
	$('#radios').find(':radio').each(function(){
		if( $(this).is(':checked') ){
			count++;
			localStorage.setItem('paymode', $(this).val() );
		}
	});


	if(count === 0 ){
		$('.pay-error').css({'margin-left':50}).show();
		$('.pay-error').text('Debe seleccionar un mode de pago ')
	}else{
		$('.pay-error').hide();
	}

	count = $('select option:selected').val();

	if( count == "0"){
		$('.city-error').show();
		$('.city-error').text('Debe seleccionar una Ciudad');
	}else{
		$('.city-error').hide();
		localStorage.setItem('city',count);
		// $('#buttons').append(
		// 	'<a id="info" href="#openModal">Ver detalles del pedido </a>'
		// 	);
		$('#info').css({'display':"initial"})
		$('.inputs').removeClass('error');
		$('.inputs').addClass('success');

	}

	//event.preventDefault();
});


$(document).on('click','#info',function(){
	$('#openModal ').html('<div> <a href="#close" title="Close" class="close">X</a></div>');
	$('#openModal > div ').append(
		'<h2>detalles de pedido </h2>'+
		"<ul>"+
		"<li>Su documento de identiedad es " + localStorage.getItem('nid') + '</li>'+
		"<li>Su nombre es" + localStorage.getItem('username')+'</li>'+
		"<li>Su email es" + localStorage.getItem('email')+ '</li>'+
		"<li id='listMeals'>Los alimentos que solicita son:" + '<ul></ul></li>'+
		'<li>El modo de pago es :' + localStorage.getItem('paymode') + '</li>'+
		'<li>la ciudad donde vive es:' + localStorage.getItem('city') + '</li>'+
		'</ul>'

		);

	var meals = JSON.parse(localStorage.getItem('meals'));

	$.each(meals,function(key,value){
		$("#listMeals > ul" ).append('<li>El producto ' + key + 'cuesta $' + value + 'm/Ctc</li>');
	});


});





});
