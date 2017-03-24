
//主模块
//-------------------------------------------


function getParamByUrl() {//获取地址href值
	var url=window.location.href;
   var index = url.split("#");
   return index[1];
}
//---------------------------------------------
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
//---------------------------------------------------------
function playerAPI(callback) { //获取playerListAPI
	if(cachetime()){//判断是否缓存
		callback(JSON.parse(localStorage.playlists))//反序列化
	}
	
	$.ajax({
		url: "data/playlist.json",
		success: function(data) {
			if(data.code == 200) {
				localStorage.playlists=data.playlists.toString();//数据序列换存入缓存
				localStorage.cachetime=new Date().getTime();
				callback(data.playlists)
			}
		}
	});
}
//---------------------------------------------------------
function cachetime(){//判断缓存条件
	if(!localStorage.playlists)
	console.log(1)
	return false;
	if(new Date().getTime()-localStorage.cachetime>10*1000)
	console.log(2)
	return false;	
	console.log(3)
	return true;
}

//------------------------------------------------------------
$(function() { //加载头部及播放器模块
		route('header', $('header'))
		route('player', $('footer'))
	
		window.onhashchange=function(){//页面hash值改变时候执行
		route(getParamByUrl(), $('#share'))
	}
})