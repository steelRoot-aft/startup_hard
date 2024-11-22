


//Бургер меню

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__block-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__menu a').click(function () {
		$('.header__burger,.header__block-menu').removeClass('active');
		$('body').removeClass('lock');
	});
});



function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


// Карусель коментариев 

document.addEventListener("DOMContentLoaded", () => {
	const slider = document.querySelector('.comments-slider');
	const track = slider.querySelector('.comments-slider__track');
	const slides = Array.from(slider.querySelectorAll('.comments-slider__slide'));
	const dots = Array.from(slider.querySelectorAll('.comments-slider__dot'));

	let currentSlide = 0;
	const slideCount = slides.length;
	const delay = 8000;
	let autoSlideInterval;

	const updateSliderPosition = () => {
		const offset = -currentSlide * 100;
		track.style.transform = `translateX(${offset}%)`;
		updateDots();
	};

	const updateDots = () => {
		dots.forEach((dot, index) => {
			dot.classList.toggle('comments-slider__dot--active', index === currentSlide);
		});
	};

	const goToSlide = (index) => {
		currentSlide = index;
		updateSliderPosition();
	};

	const startAutoSlide = () => {
		autoSlideInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slideCount;
			updateSliderPosition();
		}, delay);
	};

	const stopAutoSlide = () => {
		clearInterval(autoSlideInterval);
	};

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			stopAutoSlide();
			goToSlide(index);
			startAutoSlide();
		});
	});

	// Инициализация
	updateSliderPosition();
	startAutoSlide();
});
