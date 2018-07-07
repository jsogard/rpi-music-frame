$(document).ready(function(){
	
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
	
	
	setUp();
	
	/* --------------------------- */
	/*
	function setUpLibrary(library){
		
		console.log(library);

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
		
		$("#library tr:not(:first-child)")
			.mouseenter(function(){
				$(this).addClass("highlight");
			})
			.mouseleave(function(){
				$(this).removeClass("highlight");
			})


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
				$($(this).parent()[0]).addClass("highlight");
				$("#browse #song-dropdown")
					.css({
						"left": event.pageX + "px",
						"top": event.pageY + "px"
					})
					.mouseleave(function(){
						$(this).hide();
					})
					.show();
			});
		
		$("#browse #song-dropdown #play-next")
			.click(function(){
				$.post("php/play.php", {"song_id":selected_song, "action":"next"});
			});
		
		$("#browse #song-dropdown #play-now")
			.click(function(){
				$.post("php/play.php", {"song_id":selected_song, "action":"now"});
			});
		
		$("#browse #song-dropdown #queue")
			.click(function(){
				$.post("php/play.php", {"song_id":selected_song, "action":"queue"});
			});
		
	}
	
//	$.get("php/library.php", function(data){setUpLibrary(data);}, "json");
	
	var library = [ { "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" },{ "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" }, { "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" },{ "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" }, { "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" },{ "title": "Something Good", "artist": "Alt-J", "duration": "00:03:41", "last_played": "2018-01-30 04:10:13", "id": "1" }, { "title": "Sons", "artist": "CONCORDE", "duration": "00:03:44", "last_played": "2018-01-30 04:18:00", "id": "2" }, { "title": "Nobody Speak feat. Run The Jewels", "artist": "DJ Shadow", "duration": "00:03:52", "last_played": "2018-01-30 04:19:21", "id": "3" }, { "title": "Acid Rain", "artist": "Lorn", "duration": "00:02:52", "last_played": "2018-01-30 04:20:15", "id": "4" } ];
	
	setUpLibrary(library);
	
	/* --------------------------- */
	
	function setUpControl(){
		
		function displayPlay(play){
			if(play){
				$("#play").show();
				$("#pause").hide();
			} else {
				$("#play").hide();
				$("#pause").show();
			}
		}
		
		function setTime(curr_sec, total_sec){
			
			$("#played-track").animate({ "width": (curr_sec * 100 / total_sec) + "%" }, 1000, 'linear');
			
			$("#curr-time").text(sec2MS(curr_sec));
			$("#end-time").text(sec2MS(total_sec));
			
		}
		
		function setCurrentSong(title, artist){
			
			$("#current-song")
				.text(title);

			$("#current-artist")
				.text(artist);
		}
		
		function update(){
			$.get("php/curr.php", function(data){
				
				/*
				song_id
				title
				artist
				is_paused
				current_sec
				maximum_sec
				*/
				
				setCurrentSong(data[1], data[2]);
				displayPlay(data[3] == 'true');
				setTime(parseInt(data[4]), parseInt(data[5]));
			});
		}
		
		//setInterval(function(){ update(); }, 1000);
		
		$("#stop")
			.click(function(){
//				$.post("php/playback.php", {"action":"stop"}, update, "json");
			});
		
		$("#pause")
			.click(function(){
//				$.post("php/playback.php", {"action":"pause"}, update, "json");
			});
		
		$("#play")
			.click(function(){
//				$.post("php/playback.php", {"action":"play"}, update, "json");
			});
		
		$("#next")
			.click(function(){
//				$.post("php/playback.php", {"action":"next"}, update, "json");
			});
		
		$("#mute")
			.click(function(){
//				$.post("php/mute.php");
			});
		
		$("#quiet")
			.click(function(){
//				$.post("php/quiet.php");
			});
		
		$("#loud")
			.click(function(){
//				$.post("php/loud.php");
			});
		
	}
	
	setUpControl();
	
	/* --------------------------- */
	
	$("input:file").change(function(){
		
		var fileName = (this.files.length > 0 ? this.files[0].name : "Choose a file...");
		$("#fileContainer strong").html(fileName);
	})
	
});