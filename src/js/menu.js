$(function(){
	var rwdMenu = $('#menu'),
	switchPoint = 768,
	slideSpeed = 300,
	fadeSpeed = 500;

	var menuSouce = rwdMenu.html();

	$(window).load(function(){

		function menuSet(){
			if(window.innerWidth <= switchPoint){
				if(!($('#rwdMenuWrap').length)){
					$('body').prepend('<div id="menuOverlay"></div><div id="rwdMenuWrap"></div>');
					$('#header').prepend('<div id="switchBtnArea"><a href="javascript:void(0);" id="switchBtn"><span></span><span></span><span></span></a></div>');
					$('#rwdMenuWrap').append(menuSouce);

					var menuOverlay = $('#menuOverlay'),
					switchBtn = $('#switchBtn'),
					btnLeft = parseInt(switchBtn.css('right')),
					menuWrap = $('#rwdMenuWrap'),
					menuWidth = menuWrap.outerWidth();
					
					$('.parent,.child').click(function(e) {
						// ���j���[�\��/��\��
						$(this).nextAll('ul').slideToggle('fast');
						$(this).toggleClass('selected');
						e.stopImmediatePropagation();
					});

					switchBtn.on('click', function(){
						if($(this).hasClass('btnClose')){
							$(this).removeClass('btnClose').removeAttr('style');
							menuOverlay.stop().animate({opacity:'0'},fadeSpeed,function(){
								menuOverlay.removeAttr('style');
							});
							menuWrap.stop().animate({left:'-' + menuWidth + 'px'},slideSpeed);
							$('body').removeAttr('style');
						} else {
							$(this).addClass('btnClose').stop().animate({right:'10px' + btnLeft},slideSpeed);
							menuOverlay.css({display:'block',opacity:'0'}).stop().animate({opacity:'1'},fadeSpeed);
							menuWrap.stop().animate({left:'0'},slideSpeed);
//							$('body').css({position:'fixed'});
						}
					});
					menuOverlay.on('click', function(){
						if(switchBtn.hasClass('btnClose')){
							switchBtn.removeClass('btnClose').removeAttr('style');
							menuOverlay.stop().animate({opacity:'0'},fadeSpeed,function(){
								menuOverlay.removeAttr('style');
							});
							menuWrap.stop().animate({left:'-' + menuWidth + 'px'},slideSpeed);
							$('body').removeAttr('style');
						}
					});
					menuWrap.on('click', function(){
						if(switchBtn.hasClass('btnClose')){
							switchBtn.removeClass('btnClose').removeAttr('style');
							menuOverlay.stop().animate({opacity:'0'},fadeSpeed,function(){
								menuOverlay.removeAttr('style');
							});
							menuWrap.stop().animate({left:'-' + menuWidth + 'px'},slideSpeed);
							$('body').removeAttr('style');
						}
					});
				}
			} else {
				$('#menuOverlay,#switchBtnArea,#rwdMenuWrap').remove();
				$('body').removeAttr('style');
			}
		}

		$(window).on('resize', function(){
			menuSet();
		});

		menuSet();
	});
});