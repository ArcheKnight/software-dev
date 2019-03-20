/* global $ */

initHeader();
initFooter();
initScrollListeners();

function initHeader() {
	const paddingHeight = $('#topNavMenu').height();
	$('.top-header').css('padding-top', paddingHeight + 'px');
}

function initFooter() {
	let height = $(window).scrollTop() + $(window).height();
	if (height === getDocHeight()) {
		$('#bottomNavMenu').removeClass('clear');
	} else {
		$('#bottomNavMenu').addClass('clear');
	}
}

function initScrollListeners() {
	$(window).scroll(function() {
		let scrolled = $(window).scrollTop();
		if (scrolled > $('#topNavMenu').height()) {
			//$('#topNavMenu').removeClass('');
			$('#topNavMenu').addClass('scrolled');
		} else {
			$('#topNavMenu').removeClass('scrolled');
			//$('#topNavMenu').addClass('');
		}
	});

	$(window).scroll(function() {
		let height = $(window).scrollTop() + $(window).height();
		if (height === getDocHeight()) {
			$('#bottomNavMenu').removeClass('clear');
		} else {
			$('#bottomNavMenu').addClass('clear');
		}
	});
}

function getDocHeight() {
	let D = document;
	return Math.max(
		D.body.scrollHeight,
		D.documentElement.scrollHeight,
		D.body.offsetHeight,
		D.documentElement.offsetHeight,
		D.body.clientHeight,
		D.documentElement.clientHeight
	);
}
