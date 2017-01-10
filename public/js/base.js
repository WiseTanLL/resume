/**
 * 基于jquery实现
 */

$(function(){
	$(window).on('mousewheel',function(e){
		// if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
  //           if (e.wheelDelta > 0) { //当滑轮向上滚动时
  //               alert("滑轮向上滚动");
  //           }
  //           if (e.wheelDelta < 0) { //当滑轮向下滚动时
  //               alert("滑轮向下滚动");
  //           }
  //       } else if (e.detail) {  //Firefox滑轮事件
  //           if (e.detail> 0) { //当滑轮向上滚动时
  //               alert("滑轮向上滚动");
  //           }
  //           if (e.detail< 0) { //当滑轮向下滚动时
  //               alert("滑轮向下滚动");
  //           }
  //       }
  			console.log(e);
	})
})