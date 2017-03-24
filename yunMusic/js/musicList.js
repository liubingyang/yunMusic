$(function() {
	$(window).on("scroll", function() {
		var scrollTop = $(document).scrollTop();
		$("#header").css("background", "rgba(255,0,0," + scrollTop / 200 + ")");

		if(scrollTop >= 100) {
			$("#header p").html("歌单名称")
		} else if(scrollTop <= 100) {
			$("#header p").html("歌单")
		}
	})
	
	function playListAPI(callback){
		$.ajax({
			url:"../data/detail.json",
			success:function(data){
				console.log(data)
				callback(data.playlist)
			}
		});
	}
	function addMusicList(data){
		var $mansion=$('.mansion');
		var $musicItem=$('$music_item').html();
		for(var i=0;i<data.tracks.length;i++){
			$musicItem.find('.num').text(i+1).end()
			.find('.music_name').text(data.tracks[i].name).end()
			.find('.ar_name').text(data.tracks[i].ar[0].name).end()
			.appendTo($mansion)
		}
		
	}
})