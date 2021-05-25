jQuery(document).ready(function() {	

	/* morenvy.com 메인슬라이드 */
	var swiper0 = new Swiper('.swiper0', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		 },
		pagination: {
			el: '.swiper-pagination0',
			clickable: true,			
		},
        autoplay: {
		 delay: 7000,
		 disableOnInteraction: false,
		}, 
		speed:700,
	});


	/* 브랜드픽 슬라이드 */
	var swiper1 = new Swiper('.swiper1', {
        centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		loop: true,
		navigation: {
		 nextEl: '.swiper-button-next1',
		 prevEl: '.swiper-button-prev1',
		},
		autoplay: {
		 delay: 7000,
		 disableOnInteraction: false,
		}, 
		speed:700,
    });

});