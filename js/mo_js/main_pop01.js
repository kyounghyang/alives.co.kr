jQuery(document).ready(function() {	
	
	/* 메인_3단멀티팝업 실행 */
	jQuery('.mpopup1').multipopup({
	'nottoday' : 'mpopupnottoday1' // 오늘하루 열지않음 체크박스 name
	});

	/* morenvy.com 3단멀티팝업  */
	var swiper_pop = new Swiper('.swiper_pop', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination-pop',
			clickable: true,
		},
		autoplay: {
			delay: 9000,
			disableOnInteraction: false,
		},
	});

	jQuery(".swiper_p_text li").click(function(){
		var idx = jQuery(this).index();
		jQuery(".swiper_p_text li").removeClass("swiper_over")
		jQuery(this).addClass("swiper_over")
		jQuery(".swiper-pagination-pop > span").eq(idx).trigger("click")
	})

	jQuery(".swiper_pop .swiper-wrapper").bind("transitionend", function(){
		jQuery(".swiper-pagination-pop > span").each(function(i){
			if( jQuery(this).hasClass("swiper-pagination-bullet-active") ){
				jQuery(".swiper_p_text li").removeClass("swiper_over")
				jQuery(".swiper_p_text li").eq(i).addClass("swiper_over")
			}
		})
	});

});