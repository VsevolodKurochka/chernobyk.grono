$(document).ready(function(){

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
		}, speed);
		return false;
	}
	$('.anchor-next').click(function(e){
		e.preventDefault();
		var el = $(this).closest('section').next();
		scroll(el, 1500);
	});

	$('.js-menu-item-link').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
		$('#js-navigation-menu').removeClass('nav__menu_active');
	});

	var $navigationLinks = $('#js-navigation-menu > ul > li > a');
	// cache (in reversed order) the sections
	var $sections = $($("section").get().reverse());

	// map each section id to their corresponding navigation link
	var sectionIdTonavigationLink = {};
	$sections.each(function() {
			var id = $(this).attr('id');
			sectionIdTonavigationLink[id] = $('#js-navigation-menu > ul > li > a[href=\\#' + id + ']');
	});

	// throttle function, enforces a minimum time interval
	function throttle(fn, interval) {
		var lastCall, timeoutId;
		return function () {
			var now = new Date().getTime();
			if (lastCall && now < (lastCall + interval) ) {
					// if we are inside the interval we wait
					clearTimeout(timeoutId);
					timeoutId = setTimeout(function () {
							lastCall = now;
							fn.call();
					}, interval - (now - lastCall) );
			} else {
					// otherwise, we directly call the function 
					lastCall = now;
					fn.call();
			}
		};
	}

	function highlightNavigation() {
		// get the current vertical position of the scroll bar
		var scrollPosition = $(window).scrollTop();

		// iterate the sections
		$sections.each(function() {
				var currentSection = $(this);
				// get the position of the section
				var sectionTop = currentSection.offset().top;

				// if the user has scrolled over the top of the section  
				if (scrollPosition >= sectionTop - 200) {
					// get the section id
					var id = currentSection.attr('id');
					// get the corresponding navigation link
					var $navigationLink = sectionIdTonavigationLink[id];
					// if the link is not active
					if (!$navigationLink.hasClass('active')) {
							// remove .active class from all the links
							$navigationLinks.removeClass('active');
							// add .active class to the current link
							$navigationLink.addClass('active');
					}
					// we have found our section, so we return false to exit the each loop
					return false;
				}
		});
	}

	$(window).scroll( throttle(highlightNavigation,100) );
	
	// Develope
	const navigation = $('#js-navigation');
	function checkScrollY() {
		if (window.scrollY > 0) {
			navigation.addClass('nav_scrolled')
		} else {
			navigation.removeClass('nav_scrolled')
		}
	}
	checkScrollY();
	$(window).scroll(function () {
		checkScrollY();
	});

	$('#js-nav-hamburger').click(function () {
		$(this).toggleClass('active');
		$('#js-navigation-menu').toggleClass('nav__menu_active');
	});

	function showModal(modal) {
		$('.modal').removeClass('modal_showing_in');
		$(modal).addClass('modal_showing_in');
		$('body').addClass('modal-open');
	}

	$('[data-action="modal"]').click(function () {
		var modal = $(this).attr('data-open');
		showModal(modal);
	});

	$('[data-close="modal"]').click(function () {
		$(this).closest('.modal').removeClass('modal_showing_in');
		$('body').removeClass('modal-open');
	});

	$('body').on('click', function(e) {
		if ($(e.target).hasClass('modal')) {
			var modal = $(e.target).attr('id');
			$('#' + modal).removeClass('modal_showing_in');
			$('body').removeClass('modal-open');
		}
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	var mapData = {
		mediterranean: {
			image: 'assets/build/img/map-1.png',
			title: '<strong><span>Круиз по</span><br><span>Средиземноморью</span></strong><br><span>8 дней</span>'
		},
		pacific: {
			image: 'assets/build/img/map-2.png',
			title: '<strong><span>Круиз по островам</span><br><span>Тихого океана</span></strong><br><span>15 дней</span>'
		}
	};
	function setActiveMap(variant) {
		$('.map-image').attr('src', mapData[variant].image);
		$('.map-control__title').html(mapData[variant].title);
		$('.map-control__button').removeClass('active');
		$('.map-control__button[data-variant="' + variant +'"]').addClass('active');
	}
	setActiveMap('mediterranean');

	$('.map-control__button').click(function() {
		var variant = $(this).attr('data-variant');
		setActiveMap(variant);
	});

	$('.current-year').html(new Date().getFullYear());
});	