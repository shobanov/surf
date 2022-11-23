import Swiper from 'swiper/bundle';

const swiper = new Swiper('.slider', {
	slideClass: 'slider-item',
	wrapperClass: 'slider-wrapper',
	fadeEffect: {
		crossFade: true,
	},
	loop: true,
	effect: 'fade',
	navigation: {
		nextEl: '.slider-arrows__right',
		prevEl: '.slider-arrows__left',
	},
	pagination: {
		el: '.slider-pagination',
		lockClass: 'swiper-pagination-custom',
		clickable: true,
		bulletClass: 'slider-pagination-box',
		type: 'custom',
	},
	on: {
		init: function () {
			document
				.querySelector('.slider-pagination-box')
				.classList.add('slider-pagination-box__active');
		},
	},
});

swiper.on('slideChange', function () {
	document
		.querySelector('.slider-pagination-box__active')
		.classList.remove('slider-pagination-box__active');
	document
		.querySelector('.slider-pagination')
		.children[swiper.realIndex].classList.add('slider-pagination-box__active');
});
