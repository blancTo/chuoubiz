$(function(){
	var windowWidth = $(window).width();
	if (windowWidth >= 768) {
		$('#menu ul li').hover(function(){
				$("ul:not(:animated)", this).slideDown();
		}, function(){
				$("ul.dropdwn_menu",this).slideUp();
		});
	}
	$(window).on('load scroll resize', function(){
		var sc = $(this).scrollTop();
		if (sc > 0) {
			$("#sticky").addClass("sticky");
		} else {
			$("#sticky").removeClass("sticky");
		}
		if (sc > 120) {
			$("#menu .hp_menu").addClass("sticky");
		} else {
			$("#menu .hp_menu").removeClass("sticky");
		}
	});
	$('.investigation_case .btn').on('click',function(){
		$(this).hide();
		$(this).parent().addClass("open");
		$(this).parent().next().show();
	});
});