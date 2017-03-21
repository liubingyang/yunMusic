$(function(){
	var $nav=$('#nav').children();
	$nav.click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	var $playBtn=$('.btns').children();
	$playBtn.click(function(){
		$(this).addClass('hidden').siblings().removeClass('hidden')
	})
	var $timeLine=$('.time_line');
	var $lineCrol=$('.line_crol');
	var $lineRed=$('.line_red');
	var $lineEmpty=$('.line_empty');
	var lineLeft=0;//进度
	var col=false;//判断鼠标是否按下
	$lineCrol.on('mousedown',function(){
		col=true;
	})
	$(document).on('mouseup',function(){
		col=false;
	})
	$timeLine.on('mousemove',function(e){
		if(!col){
			return;
		}
		
		lineLeft=e.clientX-$timeLine.offset().left-8
		console.log(lineLeft)
		if(lineLeft<-10){lineLeft=-10}
		if(lineLeft>$timeLine.width()-20){lineLeft=$timeLine.width()-20}
		$lineCrol.css('left',lineLeft)
		$lineRed.css('width',lineLeft)
	})
	
	var $playTime=$('.play_time');
	setInterval(function(){
		$playTime.html('00:00')
	},100)
})
