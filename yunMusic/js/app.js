function UrlSearch() {
	var name, value;
	var str = location.href; //取得整个地址栏
	var num = str.indexOf("?")
	str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

	var arr = str.split("&"); //各个参数放到数组里
	for(var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if(num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}  
	}
}
var Request = new UrlSearch(); //实例化
alert(Request.name);

function route(m, n, fn) { //加载模块（模块名，位置）
	$.ajax({
		type: "get",
		url: "pages/" + m + ".html",
		success: function(data) {
			n.append(data)
			fn && fn();
		}
	});
}
$(function() {
	route('header', $('header'), function() {
		$.ajax({
			type: "get",
			url: "js/index.js",
			success: function(data) {
				$('head').append(data)
			}
		});
	});

	route('player', $('footer'))
})