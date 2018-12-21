//顶部悬浮
var cover = document.getElementsByClassName('aaaa')[0];
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

// 轮播图
var center1 = document.getElementsByClassName('center1')[0];
var lunbo = document.getElementsByClassName('lunbo')[0];
var zuojiantou = document.getElementById('zuojiantou');
var youjiantou = document.getElementById('youjiantou');
var oNavlist = document.getElementById('nav').children;
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            (function (attr) {
                if (attr == "opacity") {
                    var now = parseInt(getStyle(obj, attr) * 100);
                    var dest = json[attr] * 100;
                } else {
                    var now = parseInt(getStyle(obj, attr));
                    var dest = json[attr];
                }
                var speed = (dest - now) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (now != dest) {
                    flag = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
        if (flag) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}
var index = 1;
var timer;
var isMoving = false;
center1.onmouseover = function () {
    animate(zuojiantou, {
        opacity: 0.6
    })
    animate(youjiantou, {
        opacity: 0.6
    })
    clearInterval(timer); //图片停止滚动
}
center1.onmouseout = function () {
    animate(zuojiantou, {
        opacity: 0
    })
    animate(youjiantou, {
        opacity: 0
    })
    timer = setInterval(next, 3000); //图片开始接着滚动
}
youjiantou.onclick = next;
zuojiantou.onclick = prev;
function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(lunbo, {
        left: -800 * index
    }, function () {
        if (index == 7) {
            lunbo.style.left = '-800px';
            index = 1;
        }
        isMoving = false;
    });
}
function prev() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(lunbo, {
        left: -800 * index
    }, function () {
        if (index == 0) {
            lunbo.style.left = '-4800px';
            index = 6;
        }
        isMoving = false;
    });
}
for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].index = i;
    oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(lunbo, {
            left: -800 * index
        });
    }
}
function navmove() {
    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
    }
    if (index > 6) {
        oNavlist[0].className = "active";
    } else if (index <= 0) {
        oNavlist[5].className = "active";
    } else {
        oNavlist[index - 1].className = "active";
    }
}
timer = setInterval(next, 3000);
//公告
var ul9 = document.getElementsByClassName('ul9')[0];
ul9.style.top = '0px';
function gun(){
	ul9.style.top = parseInt(ul9.style.top) -1 + 'px';
	if(parseInt(ul9.style.top) < -351){
		ul9.style.top = '0px';
	}
}
time = setInterval(gun,20);
ul9.onmouseout = function(){
	time = setInterval(gun,20);
}
ul9.onmouseover = function(){
	clearInterval(time);
}
//充值
var input3 = document.getElementsByClassName('input3')[0];
var money = document.getElementsByClassName('money')[0];
input3.onchange = function(){
	money.innerHTML = '￥' + input3.value;
}
//右面滑动出来
var hua1 = document.getElementsByClassName('hua1')[0];
var hua2 = document.getElementsByClassName('hua2')[0];
var hua3 = document.getElementsByClassName('hua3')[0];
var hua4 = document.getElementsByClassName('hua4')[0];
var serweima = document.getElementsByClassName('serweima')[0];
hua1.onmouseover = function (){
    hua1.style.right = '0px';
}
hua1.onmouseout = function (){
    flag1 = 1;
    hua1.style.right = '-89px';
}
hua2.onmouseover = function (){
    hua2.style.right = '0px';
}
hua2.onmouseout = function (){
    hua2.style.right = '-89px';
}
hua3.onmouseover = function (){
    hua3.style.right = '0px';
    serweima.src="../img/erwei.png"; 
    serweima.classList.remove("serweima");
    serweima.classList.add("erweima");
}

hua3.onmouseout = function (){
    hua3.style.right = '-89px';
    serweima.src="../img/serwei.png";
    serweima.classList.remove("erweima");
    serweima.classList.add("serweima");
}
hua4.onmouseover = function (){
    hua4.style.right = '0px';
}
hua4.onmouseout = function (){
    hua4.style.right = '-89px';
} 

