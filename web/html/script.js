$(document).ready(function(){
	
	function dropZeros(time){
		var i = 0;
		while(i < time.length && (time.charAt(i) == '0' || time.charAt(i) == ':')){ i++; };
		return time.substr(i);
	}
	
	/* --------------------------- */
	
	function setUp(){
//		$(".util > img").hide();
	
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

		var library_sort = {
			column : null,
			desc : null
		};
		$("#library th")
			.click(function(){
				var column = $(this)[0].className;
				if(column == undefined) return;
				var rows = $("#library tr.song");
				var mult = 1;
				if(library_sort.column == column && library_sort.desc == true) mult = -1;
				library_sort.column = column;
				library_sort.desc = (mult == 1);
				rows.sort(function(a, b){
					return ($(a).find("." + column)[0].innerHTML).localeCompare($(b).find("." + column)[0].innerHTML) * mult;
				});
				rows.each(function(index, element){
					$("#library").append(element);
				});
			})
		
		
	}
	
	setUp();
	
	/* --------------------------- */
	
	function setUpLibrary(library){

		for(var i = 0; i < library.length; i++){
			var item = library[i];
			var song = $("<tr></tr>");
			song.addClass("song")
			song.attr("id", item.id);
			song.append($("<td class='song-col'>" + item.title + "</td>"));
			song.append($("<td class='action-col'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></td>"));
			song.append($("<td class='artist-col'>" + item.artist + "</td>"));
			song.append($("<td class='length-col'>" + dropZeros(item.duration) + "</td>"));


			$("#library").append(song);
		}


		$("#library .song")
			.mouseenter(function(){
				$($($(this)[0]).find("i")[0]).show();
			})
			.mouseleave(function(){
				$($($(this)[0]).find("i")[0]).hide();
			})
		
		var selected_song = null;

		$("#library .action-col")
			.click(function(event){
				selected_song = $(this).parent().attr("id");
				$("#browse #song-dropdown")
					.css({
						"left": event.clientX + "px",
						"top": event.clientY + "px"
					})
					.mouseleave(function(){
						$(this).hide();
					})
					.show();
			});
		
		$("#browse #song-dropdown #play-next")
			.click(function(){
				$.post("php/play_next.php", {"video_id":selected_song});
			});
		
		$("#browse #song-dropdown #play-now")
			.click(function(){
				$.post("php/play_now.php", {"video_id":selected_song});
			});
		
		$("#browse #song-dropdown #queue")
			.click(function(){
				$.post("php/queue.php", {"video_id":selected_song});
			});
		
	}
	
//	$.get("php/library.php", setUpLibrary(data));
	
	var library = [ { "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" },{ "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" } ];
	
	setUpLibrary(library);
	
	/* --------------------------- */
	
	function setUpControl(){
		
		function playNotPause(play){
			if(play){
				$("#play").show();
				$("#pause").hide();
			} else {
				$("#play").hide();
				$("#pause").show();
			}
		}
		
		function setTime(time){
			$("curr-time").text("00:00:00");
			$("#played-track").css({ "width": "0%" });
		}
		
		function setCurrentSong(curr_song){
			
			var curr_song = {
				"title": "Something Good",
				"artist": "Alt-J",
				"duration": "00:03:41"
			};
			
			curr_song.duration = dropZeros(curr_song.duration);
			
			$("#current-song")
				.text(curr_song.title);

			$("#current-artist")
				.text(curr_song.artist);

			$("#end-time")
				.text(curr_song.duration);
		}
		
		function update(){
			$.get("php/time.php", setTime(data));
			$.get("php/is_play.php", playNotPause(data));
			$.get("php/curr.php", setCurrentSong(data));
		}
		
		//setInterval(function(){ update(); }, 1000);
		
		$("#stop")
			.click(function(){
				$.post("php/stop.php");
				$("#curr-time").text("00:00");
				$("#played-track").css({"width": "0%"});
				playNotPause(false);
			});
		
		$("#pause")
			.click(function(){
				$.post("php/pause.php");
				playNotPause(true);
			});
		
		$("#play")
			.click(function(){
				$.post("php/pause.php");
				playNotPause(false);
			});
		
		$("#next")
			.click(function(){
				$.post("php/next.php");
				update();
			});
		
		$("#mute")
			.click(function(){
				$.post("php/mute.php");
			});
		
		$("#quiet")
			.click(function(){
				$.post("php/quiet.php");
			});
		
		$("#loud")
			.click(function(){
				$.post("php/loud.php");
			});
		
	}
	
	setUpControl();
	
	/* --------------------------- */
	
	$("input:file").change(function(){
		
		var fileName = (this.files.length > 0 ? this.files[0].name : "Choose a file...");
		$("#fileContainer strong").html(fileName);
	})
	
});