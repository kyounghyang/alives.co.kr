jQuery(document).ready(function () {

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
		speed: 700,
	});


	/* swiper01 : 카테고리 베스트 */
	var swiper01 = new Swiper('.swiper01', {
		roundLengths: true,
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next-01',
			prevEl: '.swiper-button-prev-01',
		},
		scrollbar: {
			el: '.swiper-scrollbar-01',
			dragSize: 405
		},
		on: {
			sliderMove: function (event) {
				//좌우 스크롤시  Lazyload 제거
				$(event.target).find(".gd_image_lazy").trigger("scroll");
			},
		},
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
		speed: 700,
	});


	/* swiper02 : 捞亥飘硅呈 */
	var swiper2_txt = new Swiper('.swiper2_txt', {
		spaceBetween: 0,
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		pagination: {
			el: '.swiper-pagination2',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		loopedSlides: 10,
		speed: 1000,
	});
	// var swiper2 = new Swiper('.swiper2', {
	// 	slidesPerView: 'auto',
	// 	spaceBetween: 60,
	// 	loopedSlides:10,
	// 	loop: true,
	// 	pagination: {
	// 		el: '.swiper-pagination2',
	// 		clickable: true,			
	// 	},
	//     autoplay: {
	// 		delay: 10000,
	// 		disableOnInteraction: false,
	// 	}, 
	// 	speed:1000,
	// });
	// swiper2.controller.control = swiper2_txt;
	// swiper2_txt.controller.control = swiper2;



	jQuery('ul.m_tab01 li').click(function () {
		var activeTab = jQuery(this).attr('data-tab');
		console.log('activeTab')
		jQuery('ul.m_tab01 li').removeClass('current');
		jQuery('.tabcontent01').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#' + activeTab).addClass('current');
		//jQuery Lazyload 가 들어가서 이미지 노출을 위해 강제 trigger 발생시킴
		setTimeout(function () {
			$('#' + activeTab + " img.gd_image_lazy").trigger("scroll");
		}, 10);
	})
});