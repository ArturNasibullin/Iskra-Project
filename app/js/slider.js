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
});
