$(document).ready(function(){
	$('.error').hide();



	$('.submit').click(function(event){
		$('.infobox').each(function(){
		//alert("d");
		var data = $(this).val();
		var len = data.length;


		if(len < 1){

			if($(this).attr('name') == "userid"){

				$(this).parent().find('.error').show().text("Por favor ingreso el usuario ");
			}else if($(this).attr('name') == "password"){
				$(this).parent().find('.error').show().text("Por favor ingrese el password ");
			}

		}else{
			$(this).parent().find('.error').hide();
		}
		





	});


		event.preventDefault();
	});
});