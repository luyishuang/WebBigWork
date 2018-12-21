//顶部悬浮
var cover = document.getElementsByClassName('header')[0];
window.onscroll = function(){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	if(st > 180){
		cover.style.position = 'fixed';
		cover.style.paddingBottom = '18px';
	}else{
		cover.style.position = 'static';
		cover.style.paddingBottom = '0';
	}
}
//化妆品净含量 您已选择
var wu = document.getElementsByClassName('wu')[0];
var er = document.getElementsByClassName('er')[0];
var duigou = document.getElementsByClassName('duigou');
var hanliang = document.getElementsByClassName('hanliang')[0];
er.onclick = function(){
	duigou[0].style.opacity = 0;
	duigou[1].style.opacity = 10;
	wu.style.border = 'none';
	er.style.border = '1px solid #fe0d4a';
	hanliang.innerHTML = '"'+ parseInt(er.innerHTML) + 'ml' + '"';
}
wu.onclick = function(){
	duigou[0].style.opacity = 10;
	duigou[1].style.opacity = 0;
	er.style.border = 'none';
	wu.style.border = '1px solid #fe0d4a';
	hanliang.innerHTML = '"'+ parseInt(wu.innerHTML) + 'ml' + '"';
}
//数量
var button2 = document.getElementsByClassName('button2')[0];
var button3 = document.getElementsByClassName('button3')[0];
var input2 = document.getElementsByClassName('input2')[0];
button2.onclick = function(){
	if(input2.value > 1){
		input2.value = input2.value - 1;
	}
	if(input2.value == 5){
		button2.style.cursor = 'pointer';
		button3.style.cursor = 'not-allowed';
	} 
	if(input2.value == 1){
		button2.style.cursor = 'not-allowed';
		button3.style.cursor = 'pointer';
	} 
}
button3.onclick = function(){
	if(input2.value < 5){
		input2.value = parseInt(input2.value) + 1;
	}
	if(input2.value == 5){
		button2.style.cursor = 'pointer';
		button3.style.cursor = 'not-allowed';
	} 
	if(input2.value == 1){
		button2.style.cursor = 'not-allowed';
		button3.style.cursor = 'pointer';
	} 
}
//加入购物车
var button5 = document.getElementsByClassName('button5')[0];
var da = document.getElementsByClassName('da')[0];
var jiagou = document.getElementsByClassName('jiagou')[0];
var button6 = document.getElementsByClassName('button6')[0];
var button7 = document.getElementsByClassName('button7')[0];
var guan = document.getElementsByClassName('guan')[0];
button5.onclick = function(){
	da.style.display = 'inline';
	jiagou.style.display = 'inline';
}
function guandiao(){
	da.style.display = 'none';
	jiagou.style.display = 'none';
}
button6.onclick = guandiao;
button7.onclick = guandiao;
guan.onclick = guandiao;
//防晒
var tu = document.getElementsByClassName('tu')[0];
var tutu = document.getElementsByClassName('tutu')[0];
var tu2 = document.getElementsByClassName('tu2')[0];
var tu3 = document.getElementsByClassName('tu3')[0];
var zuo = document.getElementsByClassName('zuo')[0];
var you = document.getElementsByClassName('you')[0];
tutu.style.left = '0px';
tu2.onmouseover = function(){
	tutu.style.left = '0px';
	tu2.style.border = '2px solid #ff9003';
	tu3.style.border = '2px solid #fff';
}
tu3.onmouseover = function(){
	tutu.style.left = '-408px';
	tu3.style.border = '2px solid #ff9003';
	tu2.style.border = '2px solid #fff';
}
function dianji(){
	if(tutu.style.left == '0px'){
		tutu.style.left = '-408px';
		tu3.style.border = '2px solid #ff9003';
		tu2.style.border = '2px solid #fff';
	}else{
		tutu.style.left = '0px';
		tu2.style.border = '2px solid #ff9003';
		tu3.style.border = '2px solid #fff';
	}
}
zuo.onclick = dianji;
you.onclick = dianji;
//放大镜
var tu = document.getElementsByClassName('tu')[0];
var rongqi = document.getElementsByClassName('rongqi')[0];
var Bimg = document.getElementsByClassName('Bimg')[0];
// var Bimg1 = document.getElementsByClassName('Bimg1')[0];
var slider = document.getElementsByClassName('slider')[0];
//给左侧的小图绑定移入移出移动事件
tu.onmouseover = function(){
	if(tutu.style.left == '0px'){
		Bimg.src="../img/pp0.jpeg";
	}
	else{
		Bimg.src="../img/pp1.jpeg";
	}
	slider.style.display = 'block';
	rongqi.style.display = 'block';
}
tu.onmouseout = function(){
	slider.style.display = 'none';
	rongqi.style.display = 'none';
}
tu.onmousemove = function(ev){
	var ev = ev||window.event;
	var stt = document.documentElement.scrollTop || document.body.scrollTop;
	//根据鼠标位置计算放大镜的位置
	var left = ev.clientX - tu.offsetLeft - slider.offsetWidth/2;
	var top = ev.clientY - tu.offsetTop - slider.offsetHeight/2 +stt;
  	var maxLeft = tu.offsetWidth - slider.offsetWidth;
  	var maxTop = tu.offsetHeight - slider.offsetHeight;
  	left = left>maxLeft?maxLeft:left<0?0:left;
  	top = top>maxTop?maxTop:top<0?0:top;
  	//设置放大镜的位置
  	if(tutu.style.left == '0px'){
		slider.style.left = left + 'px';
  		slider.style.top = top + 'px';
	}
	else{
	  	slider.style.left = left + 408 + 'px';
	  	slider.style.top = top  + 'px';
	}
  	//根据左侧的放大镜的位置去计算右侧大图的移动比例
  	var w = left/maxLeft;
  	var h = top/maxTop;
  	//计算大图的最大移动范围
  	var BimgLeft = rongqi.offsetWidth - Bimg.offsetWidth;
  	var BimgTop = rongqi.offsetHeight - Bimg.offsetHeight;
  	//计算大图的距离，设置位置
  	Bimg.style.left = w*BimgLeft + 'px';
  	Bimg.style.top = h*BimgTop + 'px';
 }


