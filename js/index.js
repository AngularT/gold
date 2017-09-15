$(function(){
	$(".slide-next").on('click',function(){
		swiper.slideNext();
		if(swiper.activeIndex==1){
			nextpage=1;
		}
//		clearInterval(indexDrop)
	});
	var overLeg=$(".mt-leg");
	var addLoad=setInterval(function(){
		if($(".pace-inactive").css('display')=='none'){
			clearInterval(addLoad);
			$(".model-title").addClass('animated fadeInDown');
			$(".model-yun").addClass('animated fadeInUp');
			$(".model-tong").addClass('tong-animate');
			setTimeout(function(){
				overLeg.removeClass();
				overLeg.eq(0).addClass('mt-leg over1 animated shake')
				overLeg.eq(1).addClass('mt-leg over2 animated shake')
				overLeg.eq(2).addClass('mt-leg over3 animated shake')
				overLeg.eq(3).addClass('mt-leg over4 animated shake')
				overLeg.eq(4).addClass('mt-leg over5 animated shake')
				overLeg.eq(5).addClass('mt-leg over6 animated shake')
			},3000)
			setTimeout(function(){
				$(".model-person").addClass('animated slideInLeft');
				setTimeout(function(){
					$(".model-word").css({
						'animation':'wordShow .3s linear',
						'animation-fill-mode':'forwards'
					})
				},1000)
			},3000)
		}
	},100)
	var nextbtnShow1=setTimeout(function(){
		$(".slide-next").fadeIn(400,function(){
			var nextbtnShow2=setTimeout(function(){
				$(".slide-next").addClass('flash');
				clearTimeout(nextbtnShow2);
			},500)
		})
		clearTimeout(nextbtnShow1);
	},6000)

})
