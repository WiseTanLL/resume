/**
 * 基于jquery实现
 */

$(function(){
	window.canPageFlash = 1;//控制是否能检测滑动事件
	window.currentPage = 0;//当前页面index

	initEvent();

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
		       		window.canPageFlash = 0;
		       		pagePre.addClass('pt-page-rotatePullTop pt-current-page');
		       		pageNow.addClass('pt-page-rotatePushBottom');

		       		$('.pt-page-right span').eq(window.currentPage-1).addClass('active').siblings().removeClass('active');
		       		$('.pt-page-black .main .item').eq(window.currentPage-1).addClass('active').siblings().removeClass('active');

		       		var timeout = setTimeout(function(){
		       			pagePre.removeClass('pt-page-rotatePullTop');
		       			pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
		       			window.currentPage = $('.pt-current-page').index();
		       			window.canPageFlash = 1;
		       			clearTimeout(timeout);
		       		},600);
		       	}
		    } else if (delta < 0) { //向下滚
		        var pageNext = $('.pt-current-page').next(),
		    		pageNow = $('.pt-current-page');
		       	if (pageNext.length){
		       		window.canPageFlash = 0;
		       		pageNext.addClass('pt-page-rotatePullTop pt-current-page');
		       		pageNow.addClass('pt-page-rotatePushBottom');

		       		$('.pt-page-right span').eq(window.currentPage+1).addClass('active').siblings().removeClass('active');
		       		$('.pt-page-black .main .item').eq(window.currentPage+1).addClass('active').siblings().removeClass('active');

		       		var timeout = setTimeout(function(){
		       			pageNext.removeClass('pt-page-rotatePullTop');
		       			pageNow.removeClass('pt-page-rotatePushBottom pt-current-page');
		       			window.currentPage = $('.pt-current-page').index();
		       			window.canPageFlash = 1;
		       			clearTimeout(timeout);
		       		},600);
		       	}
		    }
		}
	});
}