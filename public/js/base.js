/**
 * 基于jquery实现
 */

$(function(){
	window.canPageFlash = 1;//控制是否能检测滑动事件
	window.currentPage = 0;//当前页面index

	initFirstPage();

	initEvent();

	initBlackBKLine();//初始化菜单线条

	/* 菜单栏出现控制 */
	$('.pt-page-left-top').on('click',function(){
		$('.pt-page-black').fadeIn('fast',function(){
			window.canPageFlash = 0;
		});
	})
	$('.pt-page-black .pt-close').on('click',function(){
		$('.pt-page-black').fadeOut('fast',function(){
			window.canPageFlash = 1;
		});
	});
})

function initEvent(){
	$(window).on('mousewheel DOMMouseScroll',function(e){
		if (window.canPageFlash){
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		    if (delta > 0) {  //向上滚

		    	var pagePre = $('.pt-current-page').prev(),
		    		pageNow = $('.pt-current-page');
		       	if (pagePre.length){
		       		resetPages();//重置页面
		       		window.canPageFlash = 0;
		       		pagePre.addClass('pt-page-rotatePullTop pt-current-page');
		       		pageNow.addClass('pt-page-rotatePushBottom');

		       		$('.pt-page-right span').eq(window.currentPage-1).addClass('active').siblings().removeClass('active');
		       		$('.pt-page-black .main .item').eq(window.currentPage-1).addClass('active').siblings().removeClass('active');

		       		switch(window.currentPage-1){
		       			case 0 : initFirstPage();break;
		       			case 1: initTwicePage();break;
		       			default : break;
		       		}

		       		var timeout = setTimeout(function(){
		       			pagePre.removeClass('pt-page-rotatePullTop');
		       			pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
		       			window.currentPage -= 1;
		       			window.canPageFlash = 1;
		       			clearTimeout(timeout);
		       		},600);
		       	}
		    } else if (delta < 0) { //向下滚

		        var pageNext = $('.pt-current-page').next(),
		    		pageNow = $('.pt-current-page');
		       	if (pageNext.length){
		       		resetPages();//重置页面
		       		window.canPageFlash = 0;
		       		pageNext.addClass('pt-page-rotatePullTop pt-current-page');
		       		pageNow.addClass('pt-page-rotatePushBottom');

		       		$('.pt-page-right span').eq(window.currentPage+1).addClass('active').siblings().removeClass('active');
		       		$('.pt-page-black .main .item').eq(window.currentPage+1).addClass('active').siblings().removeClass('active');

		       		switch(window.currentPage+1){
		       			case 1: initTwicePage();break;
		       			default : break;
		       		}

		       		var timeout = setTimeout(function(){
		       			pageNext.removeClass('pt-page-rotatePullTop');
		       			pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
		       			window.currentPage += 1;
		       			window.canPageFlash = 1;
		       			clearTimeout(timeout);
		       		},600);
		       	}
		    }
		}
	});

	$('.pt-page-black .main .item').on('click',function(){
		var that = $(this);
		if (!$(this).hasClass('active')){
			resetPages();//重置页面

			$('.pt-page-black').fadeOut('fast',function(){

				$('.pt-page-black .main .item').each(function(){//复原菜单所有框框
					$(this).children('a').children('.line-top').css('width',0);
					$(this).children('a').children('.line-right').css('height',0);
					$(this).children('a').children('.line-bottom').css('width',0);
					$(this).children('a').children('.line-left').css('height',0);
				});

				var pageNow = $('.pt-current-page'),
				    pageNext = $('.container .section').eq(that.index());
				pageNext.addClass('pt-page-rotatePullTop pt-current-page');
	       		pageNow.addClass('pt-page-rotatePushBottom');

	       		$('.pt-page-right span').eq(that.index()).addClass('active').siblings().removeClass('active');
	       		$('.pt-page-black .main .item').eq(that.index()).addClass('active').siblings().removeClass('active');

	       		switch(that.index()){
	       			case 0 : initFirstPage();break;
	       			case 1: initTwicePage();break;
	       			default : break;
	       		}

	       		var timeout = setTimeout(function(){
	       			pageNext.removeClass('pt-page-rotatePullTop');
	       			pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
	       			window.currentPage = that.index();
	       			window.canPageFlash = 1;
	       			clearTimeout(timeout);
	       		},600);
			});
		}
	})
}

function initBlackBKLine(){
	$('.pt-page-black .main .item').on('mouseover',function(){
		if (!$(this).hasClass('active')){
			$(this).children('a').children('.line-top').css('width',($(this).children('a').width() + 64) + 'px');
			$(this).children('a').children('.line-right').css('height',($(this).children('a').height() + 108) + 'px');
			$(this).children('a').children('.line-bottom').css('width',($(this).children('a').width() + 64) + 'px');
			$(this).children('a').children('.line-left').css('height',($(this).children('a').height() + 108) + 'px');
		}
	});
	$('.pt-page-black .main .item').on('mouseleave',function(){
		if (!$(this).hasClass('active')){
			$(this).children('a').children('.line-top').css('width',0);
			$(this).children('a').children('.line-right').css('height',0);
			$(this).children('a').children('.line-bottom').css('width',0);
			$(this).children('a').children('.line-left').css('height',0);
		}
	});
}

function initFirstPage(){
	var textTime = setTimeout(function(){
		showText();
		drawCircle();
		clearTimeout(textTime);
	},3000);

	$('#nextMore').unbind('click').on('click',function(){
		$('.pt-page-black .main .item').each(function(){//复原菜单所有框框
			$(this).children('a').children('.line-top').css('width',0);
			$(this).children('a').children('.line-right').css('height',0);
			$(this).children('a').children('.line-bottom').css('width',0);
			$(this).children('a').children('.line-left').css('height',0);
		});

		resetPages();
		initTwicePage();

		var _pageNow = $('.pt-current-page'),
		    _pageNext = $('.container .section').eq(1);
		_pageNext.addClass('pt-page-rotatePullTop pt-current-page');
   		_pageNow.addClass('pt-page-rotatePushBottom');

   		$('.pt-page-right span').eq(1).addClass('active').siblings().removeClass('active');
   		$('.pt-page-black .main .item').eq(1).addClass('active').siblings().removeClass('active');

   		var timeout = setTimeout(function(){
   			_pageNext.removeClass('pt-page-rotatePullTop');
   			_pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
   			window.currentPage = 1;
   			window.canPageFlash = 1;
   			clearTimeout(timeout);
   		},600);
	});

	initParticles();//初始化粒子
}

function initTwicePage(){
	var _svg2 = Snap('#pt-page2-svg');
	var _time1 = setTimeout(function(){
		drawPoint(_svg2,50,60,'Creative','12px');
		clearTimeout(_time1);
	},200);
	var _time2 = setTimeout(function(){
		drawPoint(_svg2,400,10,'Change','12px');
		clearTimeout(_time2);
	},400);
	var _time3 = setTimeout(function(){
		drawPoint(_svg2,280,400,'Design','12px');
		clearTimeout(_time3);
	},600);
	var _time4 = setTimeout(function(){
		drawPoint(_svg2,780,300,'Idea','12px');
		clearTimeout(_time4);
	},800);

	$('#pt-page2-first').fadeIn('fast', function() {
		drawButton('#pt-page2-svg',180,60,($('#pt-page2-svg').width() - 180)/2,$('#pt-page2-svg').height()/2 + 100,toNextFirst);
	});
}
function toNextFirst(){
	$('#pt-page2-first').fadeOut('fast',function(){
		$('#pt-page2-twice').fadeIn('fast',function(){
			drawButton('#pt-page2-svg',180,60,($('#pt-page2-svg').width() - 180)/2,$('#pt-page2-svg').height()/2 + 200,toNextTwice);
		});
	});
	$('#pt-page2-svg').html('');
}
function toNextTwice(){
	$('#pt-page2-twice').fadeOut('fast', function() {
		$('#pt-page2-svg').html('');
		$('#pt-page2-third').fadeIn('fast');
	});
}
function showText(){
	$('#pt-ctx1').attr('width', $('#pt-page1-svg').width());
	$('#pt-ctx1').attr('height', $('#pt-page1-svg').height());
	var cvs = document.getElementById('pt-ctx1'),
		ctx = cvs.getContext('2d'),
		str = 'WELCOME TO SURIMAY',
		j = 0,
		times = new Array();

	ctx.fillStyle = '#fff';
	ctx.font = 'bold 42px STKaiti';
	ctx.clearRect(0,0,cvs.width,cvs.height);

	// ctx.fillText(str, (cvs.width-ctx.measureText(str).width)/2 , (cvs.height - 42)/2);
	for (var i=0; i<str.length;i++){
		times[i] = setTimeout(function(){
			if (str[j]){
				ctx.fillText(str[j],(cvs.width - ctx.measureText(str).width)/2 + ctx.measureText(str.substr(0,j)).width, (cvs.height - 42)/2);
			}
			clearTimeout(times[j]);
			j++;
		},i*50);
	}
}
function drawCircle(){
	$('#pt-page1-svg').html('');
	var svg = Snap('#pt-page1-svg');
	drawPoint(svg, $('#pt-page1-svg').width()/2 - 250, $('#pt-page1-svg').height()/2 + 100 , 'APP UI' ,'8px');
	var time1 = setTimeout(function(){
		drawPoint(svg, $('#pt-page1-svg').width()/2 - 100, $('#pt-page1-svg').height()/2 + 250 , 'WEB UI' ,'12px');
		clearTimeout(time1);
	},200);
	var time2 = setTimeout(function(){
		drawPoint(svg, $('#pt-page1-svg').width()/2 + 130, $('#pt-page1-svg').height()/2 + 130 , '动效设计','8px');
		clearTimeout(time2);
	},400);
	var time3 = setTimeout(function(){
		drawPoint(svg, $('#pt-page1-svg').width()/2 + 180, $('#pt-page1-svg').height()/2 + 50 ,'ICON','8px');
		clearTimeout(time3);
	},600);
}
function drawPoint(svg,x,y,text,fontSize){
	svg.paper.circle(x, y,3).attr({
		fill: '#51e5ff',
		opacity: 1
	});
	var p = svg.paper.circle(x, y,6).attr({
		fill: '#51e5ff',
		opacity: 0.5
	});

	if (text){
		var t1 = svg.paper.text(x + 10, y + 3 , text);
		t1.attr('fill', '#d4d7db');
		t1.attr('fontSize' , fontSize);
	}

	pointCircle(p);
}
function pointCircle(p){
	p.animate({
		r: 8,
		opacity: 0
	}, 1000 , mina.linear,function(){
		p.attr('r',3);
		p.attr('opacity',1);
		pointCircle(p);
	});
}
function resetPages(){
	/*page1*/
	var cvs = document.getElementById('pt-ctx1'),
		ctx = cvs.getContext('2d');
	ctx.clearRect(0,0,cvs.width,cvs.height);
	$('#pt-page1-svg').html('');
	$('#pt_particles').html('');

	/*page2*/
	$('#pt-page2-svg').html('');
	$('#pt-page2-twice').fadeOut('fast');
	$('#pt-page2-third').fadeOut('fast');
}
/**
 * 初始化粒子
 * @return {[type]} [description]
 */
function initParticles(){
	$('#pt_particles').html('');
	particlesJS('pt_particles',
	  {
	    "particles": {
	      "number": {
	        "value": 110,
	        "density": {
	          "enable": true,
	          "value_area": 800
	        }
	      },
	      "color": {
	        "value": "#ffffff"
	      },
	      "shape": {
	        "type": "circle",
	        "stroke": {
	          "width": 0,
	          "color": "#000000"
	        },
	        "polygon": {
	          "nb_sides": 5
	        },
	        "image": {
	          "src": "img/github.svg",
	          "width": 100,
	          "height": 100
	        }
	      },
	      "opacity": {
	        "value": 0.5,
	        "random": false,
	        "anim": {
	          "enable": false,
	          "speed": 1,
	          "opacity_min": 0.1,
	          "sync": false
	        }
	      },
	      "size": {
	        "value": 1,
	        "random": true,
	        "anim": {
	          "enable": false,
	          "speed": 20,
	          "size_min": 0.1,
	          "sync": false
	        }
	      },
	      "line_linked": {
	        "enable": true,
	        "distance": 40,
	        "color": "#fff",
	        "opacity": 1,
	        "width": 1
	      },
	      "move": {
	        "enable": true,
	        "speed": 3,
	        "direction": "none",
	        "random": false,
	        "straight": false,
	        "out_mode": "out",
	        "attract": {
	          "enable": false,
	          "rotateX": 600,
	          "rotateY": 1200
	        }
	      }
	    },
	    "interactivity": {
	      "detect_on": "canvas",
	      "events": {
	        "onhover": {
	          "enable": true,
	          "mode": "grab"
	        },
	        "onclick": {
	          "enable": true,
	          "mode": "push"
	        },
	        "resize": true
	      },
	      "modes": {
	        "grab": {
	          "distance": 120,
	          "line_linked": {
	            "opacity": 1
	          }
	        },
	        "bubble": {
	          "distance": 400,
	          "size": 40,
	          "duration": 2,
	          "opacity": 8,
	          "speed": 3
	        },
	        "repulse": {
	          "distance": 300
	        },
	        "push": {
	          "particles_nb": 4
	        },
	        "remove": {
	          "particles_nb": 2
	        }
	      }
	    },
	    "retina_detect": true,
	    "config_demo": {
	      "hide_card": false,
	      "background_color": "#b61924",
	      "background_image": "",
	      "background_position": "50% 50%",
	      "background_repeat": "no-repeat",
	      "background_size": "cover"
	    }
	  }
	);
}

/**
 * 画出按钮
 * @param  {[type]} svgId      [description]
 * @param  {[type]} width      [description]
 * @param  {[type]} height     [description]
 * @param  {[type]} xp         [description]
 * @param  {[type]} yp         [description]
 * @param  {[type]} clickthing [description]
 * @return {[type]}            [description]
 */
function drawButton(svgId,width,height,xp,yp,clickthing){
	var svg2 = Snap(svgId),
		w = width,
		h = height,
		x = xp,
		y = yp,
		gr1 = svg2.paper.gradient('l(0,0,1,1)rgba(19,69,108,0)-#52e4fe-rgba(19,69,108,0)');
	var p1 = svg2.paper.polyline([x,y,x + w,y,x+w,y+h,x,y+h,x,y]).attr({
		stroke: gr1,
		strokeWidth : 1,
		gradientUnits: 'userSpaceOnUse',
		fill: 'rgba(255,255,255,0)',
		cursor: 'pointer'
	});
	var p2 = svg2.paper.polyline([x+3,y+8,x+8,y+3,x+w-3,y+3,x+w-3,y+h-8,x+w-8,y+h-3,x+3,y+h-3,x+3,y+8]).attr({
		stroke: 'rgba(82,228,254,0.3)',
		opacity: 0.3,
		strokeWidth: 1,
		fill: 'rgb(82,228,254)',
		cursor: 'pointer'
	});
	var p3 = svg2.paper.polyline([x,y,x+5,y,x,y+5,x,y]).attr({
		stroke: 'rgba(82,228,254,1)',
		strokeWidth: 1,
		fill: 'rgba(82,228,254,1)'
	});
	var p4 = svg2.paper.polyline([x+w,y+h-5,x+w,y+h,x+w-5,y+h,x+w,y+h-5]).attr({
		stroke: 'rgba(82,228,254,1)',
		strokeWidth: 1,
		fill: 'rgba(82,228,254,1)'
	});
	var text1 = svg2.paper.text(x+w/2-28,y+h/2+6,'查看更多').attr({
		fontSize: '14px',
		fill: '#fff',
		cursor: 'pointer'
	});
	p2.hover(function(){
		this.animate({
			opacity: 1
		},50,mina.linear);
	},function(){
		this.animate({
			opacity: 0.3
		},50,mina.linear);
	});
	text1.hover(function(){
		p2.animate({
			opacity: 1
		},50);
	},function(){
		p2.animate({
			opacity: 0.3
		},50);
	});
	if (clickthing && typeof clickthing == 'function'){
		p2.click(function(){
			clickthing();
		});
		text1.click(function(){
			clickthing();
		});
	}
}