$(document).ready(function(){
	$('#submit').on('click',function(){
		$.ajax({
			type:"get",
			url:"drinkinfo.json",
			dataType:"json",
			success:function(data){
				//$.each(data,function(){
					var drink = "<ul>";
					$.each(data,function(i,n){
						drink += "<li>" +n["optiontext"] + '</li>';
					});

					drink += '</li>';
					$("#message").append(drink);
				//});
			}
				//return false;


		});

		// $.post("drinkinfo.json",function(){
		// 		$.each(data,function(){
		// 			var drink = "<ul>";
		// 			$.each(data,function(i,n){
		// 				drink += "<li>" +n["optiontext"] + '</li>';
		// 			});

		// 			drink += '</li>';
		// 			$("#message").append(drink);
		// 		});

		// });
	});
});