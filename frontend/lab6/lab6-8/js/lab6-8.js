$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();

	$('.submit').bind('click',function(event){
		
		var count = $('select option:selected').val();
		//console.log(count);

		if(count === "0"){
			$('p.result').hide();
			$('.error').show();
			$('.error').text("deber seleccionar uno ");

		}else{
			var selecOption="";

			$('.select option:selected').each(function(){
					selecOption += $(this).text()+",";
			});

			$('.error').hide();
			$('p.result').show();

			//$('p.result').text("Ud. Selecciona el alimento : " + $('select option:selected').text());
			$('p.result').text("Ud. Selecciona el alimento : " +selecOption);
		}
	event.preventDefault();

	});
	
});
