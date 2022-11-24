import Swiper from 'swiper/bundle';

// header slider
const headerSlider = new Swiper('.header__slider', {
	wrapperClass: 'header__slider-wrapper',
	slideClass: 'header__slider-item',
	fadeEffect: {
		crossFade: true,
	},
	loop: true,
	effect: 'fade',
	navigation: {
		nextEl: '.header__slider-arrows_right',
		prevEl: '.header__slider-arrows_left',
	},
	pagination: {
		el: '.header__slider-pagination',
		lockClass: 'swiper-pagination-custom',
		clickable: true,
		bulletClass: 'header__slider-pagination-box',
		type: 'custom',
	},
	on: {
		init: function () {
			document
				.querySelector('.header__slider-pagination-box')
				.classList.add('header__slider-pagination-box_active');
		},
	},
});

headerSlider.on('slideChange', function () {
	document
		.querySelector('.header__slider-pagination-box_active')
		.classList.remove('header__slider-pagination-box_active');
	document
		.querySelector('.header__slider-pagination')
		.children[headerSlider.realIndex].classList.add(
			'header__slider-pagination-box_active'
		);
});

// surf slider
const surfSlider = new Swiper('.surf__slider', {
	wrapperClass: 'surf__slider-wrapper',
	slideClass: 'surf__slide',
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
});
