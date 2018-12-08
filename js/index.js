$(function(){
	function myContent(){
		var winW = $(window).width()-218;
		var winH = $(window).height()-80;
		var w = winW+'px';
		var h = winH+'px';
//		 $(".aside-right").css("width", w);
//		 $(".aside-right").css("height", h);
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
	$('.testbtn').click(function(){
		$('.shadow').css('display','block');
		$('.fxb-shadow').css('display','block');
	})
//	发布检测
	$('.close-btn').click(function(){
		$('.shadow').css('display','none');
		$('.test-box').css('display','none');
	})
	$('.testing').click(function(){
		$('.fxb-shadow').css('display','none');
		$('.test-box').css('display','block');
	})
	function swipersrcoll(){
		$(".swiper-container").each(function(){
		    new Swiper(this,{
		          loop: true,
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
			autoplay: true,
	
			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true//修改swiper的父元素时，自动初始化swiper
	     });
	});
	}
	$('.test li').mouseenter(function(){
		var dom = $('.pic-swiper');
		var m = $('.test').offset().top;
		var n = $(this).offset().top;
		var g = n - m;
//		console.log(n);
//		console.log(g);
		if(dom){
			if(g>=70){
				$(this).find('.pic-swiper').css('display','block')
				$(this).find('.pic-swiper').css('top','-100px')
				$(this).find('.pic-swiper').css('right','30px')
				swipersrcoll();
			}else{
				console.log(1)
				$(this).find('.pic-swiper').css('display','block')
				$(this).find('.pic-swiper').css('top','24px')
				$(this).find('.pic-swiper').css('right','30px')
				swipersrcoll();
			}
		}
		
	})
	$('.test li').mouseleave(function(){
		var dom = $('.pic-swiper');
		if(dom){
			$(this).find('.pic-swiper').css('display','none')
		}
	})
//	底部悬浮
	function mydom(){
		var parent1 = $('.text-test');
		var parent2 = $('.pic-test')
		$('.text-test .below').each(function(){
			var index = $(this).index();
			if(index>4){
				var dom = $(this).clone(true);
				dom.addClass('child');
				dom.attr('data-index',index)
//				console.log(dom[0])
			}
			 parent1.append(dom);
		})
		$('.pic-test .below').each(function(){
			var index = $(this).index()
			if(index>4){
				var dom = $(this).clone(true);
				dom.addClass('child');
				dom.attr('data-index',index)
//				console.log(dom[0])
			}
			parent2.append(dom);
		})
	}
	mydom();
	function add(){
		var leng = $('.text-test .child').length;
		var leng2 = $('.pic-test .child').length;
//		console.log(leng);
		$('.text-test .child').each(function(){
			var num = leng--;
			$(this).css({
				'padding-left':'30px',
				'position':'fixed',
				'left':'0',
				'bottom':228+num*37+'px',
				'background':'#fff',
//				'z-index':'99999'
			})
		})
		$('.pic-test .child').each(function(){
			var num = leng2--;
			$(this).css({
				'padding-right':'130px',
				'position':'fixed',
				'right':'0',
				'bottom':228+num*37+'px',
				'background':'#fff',
//				'z-index':'99999'
			})
		})
	}
	add();
	$(".scrollbox").scroll(function() {
	  $('.text-test .child').each(function(){
	  	var data = $(this).data('index');
//	  	console.log(data)
	  	var top = $(this).offset().top;
	  	console.log('top:'+top)
	  	var top2 = $('.text-test li').eq(data).offset().top;
	  	console.log(top2)
	  	if(top2-top<=2){
	  		$(this).css('display','none')
	  	}
	  })
	  $('.pic-test .child').each(function(){
	  	var data = $(this).data('index');
//	  	console.log(data)
	  	var top = $(this).offset().top;
	  	console.log('top:'+top)
	  	var top2 = $('.pic-test li').eq(data).offset().top;
	  	console.log(top2)
	  	if(top2-top<=2){
	  		$(this).css('display','none')
	  	}
	  })
	});
})
