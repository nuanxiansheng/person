$(function () {
	$('#menu li').on('click',function () {
		for (var i=0;i <$('#menu li').length;i++) {
			$('#menu li').eq(i).find('div').css('background-position',i*-200+"px top");
		}
		var a = $(this).index();
		$(this).find('div').css("background-position",a*-200+"px bottom");
		$('#menu-slider-bar').css('width',a*33.3+"%");
		$('#menu-slider-pointer').css('left',a*33.3+"%");
		$('#conter h1').eq(a).addClass('tit-active').siblings().removeClass('tit-active');
		setTimeout(function () {
			$('#content-core .content-list').eq(a).slideDown();
		},500)
		
		$('#content-core .content-list').eq(a).siblings().slideUp();
	})
});
