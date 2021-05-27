jQuery(document).ready(function() {	

	/* morenvy.com ���ν����̵� */
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


	/* �귣���� �����̵� */
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

	
	/* swiper02 : 捞亥飘硅呈 */
	var swiper2_txt = new Swiper('.swiper2_txt', {
		spaceBetween:0,
		slidesPerView: 1,
		effect: 'fade',
		loop:true,
		loopedSlides: 10,
	});
	var swiper2 = new Swiper('.swiper2', {
		slidesPerView: 'auto',
		spaceBetween: 60,
		loopedSlides:10,
		loop: true,
		pagination: {
			el: '.swiper-pagination2',
			clickable: true,			
		},
        autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}, 
		speed:1000,
	});
	swiper2.controller.control = swiper2_txt;
	swiper2_txt.controller.control = swiper2;

	jQuery('ul.m_tab01 li').click(function() {
		var activeTab = jQuery(this).attr('data-tab');
		jQuery('ul.m_tab01 li').removeClass('current');
		jQuery('.tabcontent01').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#' + activeTab).addClass('current');
	})
});