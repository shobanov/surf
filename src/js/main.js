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
const surfSlider = new Swiper('.surf-slider', {
	wrapperClass: 'surf-slider__wrapper',
	slideClass: 'surf__slide-box',
	slidesPerView: 4,
	spaceBetween: 0,
	loop: true,
	clickable: true,
	speed: 500,
	navigation: {
		nextEl: '.surf-slider__arrows_right',
		prevEl: '.surf-slider__arrows_left',
	},
	pagination: {
		el: '.slider-map',
		bulletClass: 'slider-dots',
		lockClass: 'swiper-pagination-custom',
		clickable: true,
		type: 'custom',
	},
	on: {
		init: function () {
			document
				.querySelector('.slider-dots')
				.classList.add('slider-dots_active');
		},
	},
});

surfSlider.on('slideChange', function () {
	document
		.querySelector('.slider-dots_active')
		.classList.remove('slider-dots_active');
	document
		.querySelector('.slider-map')
		.children[surfSlider.realIndex].classList.add(
			'slider-dots_active'
		);
});
