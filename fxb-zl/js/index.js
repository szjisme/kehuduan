$(function(){
	function myContent(){
		var winW = $(window).width()-222;
		var winH = $(window).height()-80;
		var w = winW+'px';
		var h = winH+'px';
		console.log(w)
		console.log(h)
		$(".aside-right").css("width", w);
		$(".aside-right").css("height", h);
		$('.nav').css('width',w);
		$('.main-box').css('width',w);
	};
	myContent();
	$(window).resize(function(){
		myContent();
	});
	var flag = 1;
	$('.platform-list li').click(function(){
		var arr2 = $('.platform-list li').find('img');
		for(var i = 0;i<arr2.length;i++){
			var index = arr2[i]['dataset']['link'];
			console.log(index);
			arr2[i].src = index;
		}
		console.log(arr2);
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
//		console.log($(this))
		var link = $(this).find('img').data('newlink');
		var src = $(this).find('img').attr('src',link);
		var arr = $('.platform-list');
		console.log(arr);
		$(".platform").slideUp();
		$('.more').removeClass('more-rotate');
		flag = 1;
	})
	$(".all").click(function(){
		if(flag ==1 ){
			$(".platform").slideDown();
			$('.more').addClass('more-rotate');
			flag = 2;
		}else{
			$(".platform").slideUp();
			$('.more').removeClass('more-rotate');
			flag = 1;
		}
	});
	$('.accountlist li').click(function(){
		$(this).addClass('addcolor').siblings().removeClass('addcolor');
	})
})
