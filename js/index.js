$(function(){
	$(".slide-next").on('click',function(){
		swiper.slideNext();
	});
	var overLeg=$(".mt-leg");
	var addLoad=setInterval(function(){
		if($(".pace-inactive").css('display')=='none'){
			clearInterval(addLoad);
			$(".model-title").addClass('animated fadeInDown');
			$(".model-yun").addClass('animated fadeInUp');
			$(".model-tong").addClass('tong-animate');
			document.getElementsByClassName('mt-leg')[5].addEventListener('animationend',function(){
				$(".model-person").addClass('animated slideInLeft');
			});
			document.getElementsByClassName('model-person')[0].addEventListener('animationend',function(){
				$(".model-word").css({
						'animation':'wordShow .4s linear',
						'animation-fill-mode':'forwards'
				})
			})
			setTimeout(function(){
				overLeg.removeClass();
				overLeg.eq(0).addClass('mt-leg over1 animated shake')
				overLeg.eq(1).addClass('mt-leg over2 animated shake')
				overLeg.eq(2).addClass('mt-leg over3 animated shake')
				overLeg.eq(3).addClass('mt-leg over4 animated shake')
				overLeg.eq(4).addClass('mt-leg over5 animated shake')
				overLeg.eq(5).addClass('mt-leg over6 animated shake')
			},3000)
	};
	document.getElementsByClassName("model-word")[0].addEventListener('animationend',function(){
		$(".slide-next").fadeIn(400,function(){
			var nextbtnShow2=setTimeout(function(){
				$(".slide-next").addClass('flash');
				clearTimeout(nextbtnShow2);
			},500)
		})
	})
//	var nextbtnShow1=setTimeout(function(){
//		$(".slide-next").fadeIn(400,function(){
//			var nextbtnShow2=setTimeout(function(){
//				$(".slide-next").addClass('flash');
//				clearTimeout(nextbtnShow2);
//			},500)
//		})
//		clearTimeout(nextbtnShow1);
//	},6000)
})
})