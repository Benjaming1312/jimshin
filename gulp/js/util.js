// JavaScript Document
module.exports = function () {
	$(function(){
		AOS.init();
    set_member();
    set_mobile_navi();	
    set_menu_toggle();	
    set_header();	
    set_go_top();
    set_swiper();
    
  });
}
function set_swiper(){
	if($('.brand_slider').length>0){
		var swiper = new Swiper('.brand_slider .swiper-container', {		  
		  spaceBetween: 0,
		  loop:true,
		  autoplay: true,
		  pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
			breakpoints: {
				300: {
					slidesPerView: 2
					
				},
				
				499: {
					slidesPerView: 3
					
				},
				
				999: {
					slidesPerView: 4
				},
				
				1280: {
					slidesPerView: 5
				},
				
				1360: {
					slidesPerView: 6
				}
				
			}
		});
	}
}
function set_member(){
	var a_link_html='';
	$('.header_menu .hdmenu li').each(function(index, element) {
        a_link_html = a_link_html + $(this).html();
    });
	$('.header_div .outer .nav_menu ul li.member').html(a_link_html);
}
function set_mobile_navi(){	
	if($('.mobile_navi').length>0){
		var navi_html = $('.header_div .outer .nav_menu ul').html();		
		$('.mobile_navi .navi_ul').html(navi_html);	
		$('.mobile_navi .navi_ul li.other').prependTo('.mobile_navi .navi_ul');			
		$('.mobile_navi .navi_ul li.other ul li.cart a').appendTo('.mobile_navi .navi_ul li.other ul li.member');
	}
	$('.mobile_navi ul li a').click(function(){
		if($(this).attr('href').indexOf('#')>-1){
			$('.toggle_btn').trigger('click');
		}
	});
	$('.mobile_navi .navi_ul li a.had_submenu').click(function(event){
		event.preventDefault();
		$(this).parent().toggleClass('active');
	});
}
function set_menu_toggle(){
	$('.toggle_btn').insertAfter('#overlay');
	$('.toggle_btn').click(function(){
		$(this).toggleClass('active');
		$('#navbar').toggleClass('collapse');		
		$('body').toggleClass('mobile_nav_active');		
		$('#mobile-body-overly').toggle();
	});
}
function set_go_top(){
	
	var iScrollPos = 0;

	$(window).scroll(function () {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > iScrollPos) {
			//Scrolling Down
			$('.gotop').addClass('show');
		} else {
		 $('.gotop').removeClass('show');
		}		
		iScrollPos = iCurScrollPos;
	});
	$('.gotop').click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
}
function set_header(){
	
	var hei = $('.header_div').height();		
	var iScrollPos = 0;
	$(window).scroll(function () {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > 100) {			
			$('.header_div').addClass('scroll');
			$('body').addClass('scroll');
		} else {
			$('.header_div').removeClass('scroll');
			$('body').removeClass('scroll');
		}		
		iScrollPos = iCurScrollPos;
	});
	
}
