window.addEventListener('DOMContentLoaded', () => {
	//Smooth Scroll

	function scrollTo() {
		const links = document.querySelectorAll('.header-menu__link');
		links.forEach((each) => (each.onclick = scrollAnchors));
	}

	function scrollAnchors(e, respond = null) {
		const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
		e.preventDefault();
		var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
		const targetAnchor = document.querySelector(targetID);
		if (!targetAnchor) return;
		const originalTop = distanceToTop(targetAnchor);
		window.scrollBy({ top: originalTop - 30, left: 0, behavior: 'smooth' });
		const checkIfDone = setInterval(function () {
			const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
			if (distanceToTop(targetAnchor) === 0 || atBottom) {
				targetAnchor.tabIndex = '-1';
				targetAnchor.focus();
				window.history.pushState('', '', targetID);
				clearInterval(checkIfDone);
			}
		}, 100);
	}
	scrollTo();

	// Кнопка menu
	let btn = document.querySelector('.header__nav-btn');
	let menu = document.querySelector('.header-menu');
	let menuItem = document.querySelectorAll('.header-menu__link');

	btn.addEventListener('click', () => {
		menu.classList.toggle('active');
		btn.classList.toggle('active');

		menuItem.forEach((item) => {
			item.addEventListener('click', () => {
				btn.classList.remove('active');
				menu.classList.remove('active');
			});
		});
		// Блокировать прокрутку экрана при активном Меню
		// if (menu.classList.contains('active')) {
		// 	document.body.style.overflow = 'hidden';
		// } else {
		// 	document.body.style.overflow = '';
		// }
	});

	//Call button
	let callBtn = document.querySelector('.header-btn__call');
	if (window.matchMedia('(max-width: 480px)').matches) {
		callBtn.addEventListener('click', () => {
			callBtn.classList.toggle('active');
		});
	}

	//Accordion FAQ
	let faqGrid = document.querySelector('.faq-grid');
	let plus = document.querySelectorAll('.faq-item__plus');
	let faqItem = document.querySelectorAll('.faq-item');

	const open = (button, dropDown, plus) => {
		button.classList.add('active');
		dropDown.classList.add('active');
		plus.classList.add('active');
	};
	const close = (button, dropDown, plus) => {
		button.classList.remove('active');
		dropDown.classList.remove('active');
		plus.classList.remove('active');
	};

	faqGrid.addEventListener('click', (event) => {
		let target = event.target;
		if (target.classList.contains('faq-item__question')) {
			const parent = target.closest('.faq-item');
			const answer = parent.querySelector('.faq-item__answer');
			const plus = parent.querySelector('.faq-item__plus');
			answer.classList.contains('active') ? close(target, answer, plus) : open(target, answer, plus);
		}
	});

	let plusActive = function () {
		plus.forEach((item) => {
			item.classList.toggle('active');
		});
	};
	let animatedItem = document.querySelectorAll('.animate__animated');
	animatedItem.forEach((item) => {
		item.style.opacity = 0;
		let effect = item.dataset.effect;
		var waypoint = new Waypoint({
			element: item,
			handler: function (direction) {
				if (effect === 'fadeInUp') {
					item.classList.add('animate__fadeInUp');
				} else if (effect === 'fadeInLeft') {
					item.classList.add('animate__fadeInLeft');
				} else if (effect === 'fadeInRight') {
					item.classList.add('animate__fadeInRight');
				} else if (effect === 'flipInX') {
					item.classList.add('animate__flipInX');
					item.style.opacity = 1;
				} else if (effect === 'zoomIn') {
					item.classList.add('animate__zoomIn');
					item.style.opacity = 1;
				} else if (effect === 'pulse') {
					item.classList.add('animate__pulse');
					item.style.opacity = 1;
				}
			},
			offset: '75%',
		});
	});
});
