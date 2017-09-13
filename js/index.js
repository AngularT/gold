$(function(){
	$(".slide-next").on('click',function(){
		swiper.slideNext();
		clearInterval(indexDrop)
	});
	
	var d = "<div class='maple'>🍁<div>";
   	var indexDrop=setInterval(function () {
        var f = $(document).width();
//      console.log(f)
        var e = Math.random() * f; // 枫叶的定位left值
//      console.log(e)
        var o = 0.8 + Math.random(); // 枫叶的透明度
        var fon = 25 + Math.random() * 10; // 枫叶大小
        var l = e - 100 + 200 * Math.random(); // 枫叶的横向位移
        var k = 8000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        $(d).clone().appendTo(".maplebg").css({
            left: e + "px",
            top:'50px',
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: "550px",
            left: l + "px",
            opacity: 0.4,
        }, k, "linear", function () {
            $(this).remove()
        })
    }, 800)
})
