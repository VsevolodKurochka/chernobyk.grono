$(document).ready(function(){

	function scroll(scrollLink, speed, negativeOffset){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	$('.nav__menu-item-link').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	var $navigationLinks = $('#js-navigation-menu li > a');
	// cache (in reversed order) the sections
	var $sections = $($("section").get().reverse());

	// map each section id to their corresponding navigation link
	var sectionIdTonavigationLink = {};
	$sections.each(function() {
			var id = $(this).attr('id');
			sectionIdTonavigationLink[id] = $('#js-navigation-menu > li > a[href=\\#' + id + ']');
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
		focusOnSelect: true
	});
});	