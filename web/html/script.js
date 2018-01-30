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
	
	var library = [ { "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" } ];
	
//	$.ajax({
//		url: "php/library.php",
//		success: function(data){
//			console.log(data);
//		}
//	})
	
	for(var i = 0; i < library.length; i++){
		var item = library[i];
		var song = $("<tr></tr>");
		song.addClass("song")
		song.attr("id", item.id);
		song.append($("<td>" + item.title + "</td>"));
		song.append($("<td>" + item.artist + "</td>"));
		song.append($("<td>" + item.duration + "</td>"));
		
		
		$("#library").append(song);
	}
	
});