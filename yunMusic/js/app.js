function gitUrl(){
	
}

function route(m, n) { //加载模块（模块名，位置）
	$.ajax({
		type: "get",
		url: "pages/" + m + ".html",
		success: function(data) {
			n.append(data)
			$.ajax({ //先加载页面，再执行JS文件
				url: "js/" + m + ".js",
				datatype: 'script'
			});
		}
	});
}

function playerAPI(callback) { //获取playerListAPI
	$.ajax({
		url: "data/playlist.json",
		success: function(data) {
			if(data.code == 200) {
				callback(data.playlists)
			}
		}
	});
}

function playlists(data) { //处理返回的json数据
//	for(var i = 0; i < data.length; i++) {
//		$('<div id="itm">' + data[i].playCount + '<div></div><img src=' + data[i].coverImgUrl + '/><p>' + data.name + '</p></div>').appendTo($('#share'))
//	}
}
$(function() { //加载头部及播放器模块
	if(!localStorage.count) {
		localStorage.count = 0;

	}
	localStorage.count++;
	if(localStorage.count == 1) {
		route('header', $('header'))
	} else {
		route('header', $('header'))
		route('player', $('footer'))
	}
	playerAPI(playlists) //
	
	window.onhashchange=function(){//页面hash值改变时候执行
		
		console.log(window.location.href)
	}

})