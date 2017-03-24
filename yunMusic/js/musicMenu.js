(function() {//自运行函数，避免变量冲突
	function playMenu(data) { //处理返回的json数据
		var music_menu_mod = $('#music_menu_mod').html();//模块定义在musicMenu.html中
		var $music_menu = $('#music_menu');
		for(var i = 0; i < data.length; i++) { //根据JSON数据创建元素
			$(music_menu_mod).find('.cont').text(data[i].playCount).end()
				.find('.pic img').attr('src', data[i].coverImgUrl).end()
				.find('p').text(data[i].name).end()
				.appendTo($music_menu)
		}
	}
	//---------
	playerAPI(playMenu) //APP.JS加载--
})()