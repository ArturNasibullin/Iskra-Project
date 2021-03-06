window.addEventListener('DOMContentLoaded', () => {
	// Menu button (mobile)
	let menuBtn = function () {
		let burger = document.querySelector('.burger');
		let menu = document.querySelector('.mobile-menu');
		let menuLinks = document.querySelectorAll('.mobile-menu__link');

		burger.addEventListener('click', () => {
			menu.classList.toggle('active');
			burger.classList.toggle('active');

			menuLinks.forEach((link) => {
				link.addEventListener('click', () => {
					menu.classList.remove('active');
					burger.classList.remove('active');
					document.body.style.overflow = '';
				});
			});
			// Блокировать прокрутку экрана при активном Меню
			if (menu.classList.contains('active')) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});
	};

	//Search button on 480px screens
	let searchBtnToggle = function () {
		let searchInput = document.querySelector('.header-form__search');
		let searchLabel = document.querySelector('.header-form__label');
		searchLabel.addEventListener('click', (event) => {
			let target = event.target;
			if (target.classList.contains('header-form__label')) {
				searchInput.classList.toggle('active');
			}
		});
	};

	//Accordion FAQ
	let accordionFaq = function () {
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
	};

	// Snowfall animations
	let snowfall = function (block) {
		origContainer = document.querySelector(block);
		for (var i = 0; i < 30; i++) {
			let newDiv = document.createElement('div');
			newDiv.classList.add('snow');
			origContainer.prepend(newDiv);
		}
	};

	//Smooth Scroll on links
	function scrollTo() {
		let headerLinks = document.querySelectorAll('.header-menu__link');
		let mobileLinks = document.querySelectorAll('.mobile-menu__link');
		headerLinks.forEach((each) => (each.onclick = scrollAnchors));
		mobileLinks.forEach((each) => (each.onclick = scrollAnchors));
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

	// Modal windows
	let modal = () => {
		let connectBtn = document.querySelectorAll('.modal-open');

		connectBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (btn.dataset.connect == 'message') {
					openModal('.modal__message');
				} else if (btn.dataset.connect == 'callback') {
					openModal('.modal__callback');
				}
			});
		});
		function openModal(window) {
			let modalWindow = document.querySelector(window);
			modalWindow.style.opacity = 1;
			modalWindow.style.visibility = 'visible';
			document.body.style.overflow = 'hidden';
		}
		function closeModal(window) {
			window.style.opacity = 0;
			window.style.visibility = 'hidden';
			document.body.style.overflow = '';
		}
		document.addEventListener('click', (event) => {
			let target = event.target;
			if (target.classList.contains('modal__close') || target.classList.contains('modal__overlay')) {
				let parent = target.closest('.modal');
				closeModal(parent);
				document.body.style.overflow = '';
			}
		});
	};
	modal();
	menuBtn();
	scrollTo();
	accordionFaq();
	searchBtnToggle();
	snowfall('.hero');
	snowfall('.ar');

	// Input Masks
	VMasker(document.querySelectorAll('input[type="tel"]')).maskPattern('+9 (999) 999-99-99');

	// Parallax
	new universalParallax().init();

	// Scroll animatios
	AOS.init({
		duration: 1500,
	});
});
