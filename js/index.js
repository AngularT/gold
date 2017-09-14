$(function(){
	$(".slide-next").on('click',function(){
		swiper.slideNext();
		clearInterval(indexDrop)
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
			},2500)
			setTimeout(function(){
				$(".model-person").addClass('animated slideInLeft')
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
	},5500)
	
//	function dropLeg(){
//		var d = "<div class='maple'>🍁<div>";
//	   	var indexDrop=setInterval(function () {
//	        var f = $(document).width();
//	//      console.log(f)
//	        var e = Math.random() * f; // 枫叶的定位left值
//	//      console.log(e)
//	        var o = 0.8 + Math.random(); // 枫叶的透明度
//	        var fon = 25 + Math.random() * 10; // 枫叶大小
//	        var l = Math.random()*window.innerWidth; // 枫叶的横向位移
//	        var k = 3000 * Math.random()+3000;
//	        var deg = Math.random() * 360; // 枫叶的方向
//	        var t=Math.random()*3+0.9;
//	        $(d).clone().appendTo(".maplebg").css({
//	            right: "0.9rem",
//	            top:'0.7rem',
//	            opacity: o,
//	            transform: "rotate(" + deg + "deg)",
//	            "font-size": fon,
//	        }).animate({
//	            top: t+"rem",
//	            right: l + "px",
//	            opacity: 0.5,
//	        }, k, "linear", function () {
//	            $(this).remove()
//	        })
//	    }, 500)
//	}
})
