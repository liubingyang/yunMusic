//获取json数据
	function getUrlList(limit,callback){
		var server="http://musicapi.duapp.com/api.php"
		$.ajax({
			url:server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
			success:function(data){
				if(data.code==200){
					callback(data.playlists)
				}else{
					callback(false)
				}
			}
		});
	}
//动态显示json数据里的内容
	(function(){
		
		getUrlList(6,function(data){
			$("#loading").remove()
			if(!data){
				$("加载失败，请刷新").appendTo($("#commendList2"))
				return
			}
			var stm=$(".temp").html()
			for(var i=0;i<6;i++){
				var numplay=parseInt(data[i].playCount/10000)
				$(stm).find("div").html(numplay+"万").end()
				.find("img").attr("src",data[i].coverImgUrl).end()
				.find("p").html(data[i].name).end()
				.appendTo($("#commendList2"))
			}
			
		})	
	})()
//轮播图
$(function(){
	//获取静态的轮播图
	var $aLi=$("#banner ul li")
	$aLi.css({
		'position': 'absolute',
		"top":"0px"
	}).each(function(i){
		$(this).css({
			"left":i*16+"rem"
		})
	})
	//创建同等园钮
	$("<ol>").appendTo($("#banner"))
	for(var i=0;i<$aLi.length;i++){
		$("<li>").appendTo($("#banner ol"))
	}
	var count=0
	//点击触发图片
	$("ol li").each(function(i){
		$(this).on("click",function(e){
			count=i
			$("ul").css({"left":-count*16+"rem"})
			e.stopPropagation()
			clo()
		})
	})
	//轮播函数
	function clo(){
		$("#banner ol li").eq(count).css("background","red").siblings().css("background","gray")
	}
	function rund(){
		$("ul").css({"left":-count*16+"rem"})
		clo()
		count++
		if(count>=4)
		count=0
	}
	var timer;
	timer=setInterval(rund,3000);
	//鼠标悬停事件
	$aLi.hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(rund,3000);
	})
	//鼠标按下滑动拖拽
	$("ul li img").on("mousedown",function(e){
		e.preventDefault()
	})
	$("ul li").on('mousedown',function(e){
		e.stopPropagation()
		var index=$(this).index()
		var lastx=e.clientX
		onmousemove=function(e){
			var lit =e.clientX-lastx
			$("ul").css({"left":lastx+lit-index*320+"px"})
			lastx=e.clientX
		}
	})
	//鼠标松开自动滚到当前图片
	$("ul li").on("mouseup",function(e){
		e.stopPropagation()
		var index=$(this).index()
		var lit=$(this).parent().offset()[1]
		if(lit>160)
		$("ol li").eq(index+1).trigger("click")
		if(lit<-160)
		$("ol li").eq(index-1).trigger("click")
		
		$("ol li").eq(index).trigger("click")
		onmousemove=function(){
			return false
		}
	})
})
