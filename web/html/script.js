$(document).ready(function(){
	
	$(".util > img").hide();
	
	$(".util").hide();
	
	$(".util").each(function(index, element){
		var imgSrc = $(element).find("img").attr("src");
		$("#navbar table tr").prepend(
			$("<td>\
				<a>\
					<img src='" + imgSrc +"'>\
					<div><p>" + $(element).attr("id") + "</p></div>\
				</a>\
			</td>")
		);
	});
		
	$("#navbar a")
		.mouseenter(function(){
			var p = $(this).find("p")[0];
			$(p).fadeIn();
		})
		.mouseleave(function(){
			var p = $(this).find("p")[0];
			$(p).fadeOut();
		})
		.click(function(){
			var p = $(this).find("p")[0];
			var id = $(p).text();
			$("#content > div").each(function(index, element){
				if($(element).attr('id') == id)
					$(element).fadeIn();
				else
					$(element).hide();
			})
		})
	
	function getLibrary(){
		$.ajax({
			url: "php/get_videos_list.php",
			dataType: "json",
			success: function(data){
				console.log(data);
			}
		})
	}
});