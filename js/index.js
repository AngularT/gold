$(function(){
	$(".slide-next").on('click',function(){
		swiper.slideNext();
		clearInterval(indexDrop)
	});
	var addLoad=setInterval(function(){
		if($(".pace-inactive").css('display')=='none'){
			clearInterval(addLoad);
			$(".model-tong").addClass('tong-animate');
		}
	},100)
	var nextbtnShow1=setTimeout(function(){
		$(".slide-next").fadeIn(800,function(){
			var nextbtnShow2=setTimeout(function(){
				$(".slide-next").addClass('animated shake');
				clearTimeout(nextbtnShow2);
			},1000)
		})
		clearTimeout(nextbtnShow1);
	},5000)
	
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
