document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		perPage: 2,
		perMove: 2,
		pagination: false,
		gap: '40px',
		width: '80%',
		breakpoints: {
			979: {
				perPage: 1,
				focus: 'center',
				arrows: false,
				pagination: true,
				trimSpace: true,
				drag: true,
			},
		},
		classes: {
			arrow: 'splide__circle',
			page: 'splide__pagination__dot',
		},
	}).mount();
	new Splide('.portfolio-slider', {
		perPage: 4,
		pagination: false,
		arrows: false,
		breakpoints: {
			979: {
				perPage: 2,
				perMove: 1,
				focus: 'left',
				arrows: false,
				pagination: true,
				trimSpace: true,
				drag: true,
			},
		},
		classes: {
			arrow: 'splide__circle',
			page: 'splide__pagination__dot',
			pagination: 'portfolio__pagination',
		},
	}).mount();

	new Splide('.clients-slider', {
		perPage: 5,
		perMove: 1,
		type: 'loop',
		pagination: false,
		arrows: false,
		autoplay: true,
		interval: 2000,
		breakpoints: {
			979: {
				perPage: 4,
				drag: true,
			},
			768: {
				perPage: 2,
			},
		},
	}).mount();
});
