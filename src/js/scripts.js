$(document).ready(function() {
	/** Counter */
	function startCounter(){
    $('.counter').each(function (index) {
        $(this).prop('Counter',1000030021).animate({
        Counter: $(this).text()
        }, {
        duration: 9999999,
        easing: 'swing',
        step: function (now) {
            $(this).text(toArabic(Math.ceil(now)));
        }
        });
    });
	}   

	function toArabic(x) {
		return x.toLocaleString('cs-CZ')
	}

	startCounter();

	/** Parallax */

	//add pannel# to each  panel
	$(".panel").each(function(i) {
		$(this).addClass("panel" + (i + 1));
	});

	// how many panels
	var numPanels = $('.panel').length;

	// Add z-index and calulate tween durations
	var orderedPanels = [];
	var duration = [];
	for (var i = 0; i < numPanels; i++) {
		// generate CSS for z-index of each panel, negative numbers ascending
		orderedPanels.push(".panel" + (i + 1) + " {z-index: " + (i + 1) + ";} ");
		// Calulate tween duration for each panel based on height
		duration.push(($(".panel" + (i+1)).height()/200));
	}

	// init
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineLite()
		.fromTo(".clients", duration[1], {
			y: "-0%",
		}, {
			y: "-100%",
			ease: Linear.easeNone
		}).fromTo(".wedo", duration[2], {
			y: "-0%",
		}, {
			y: "-100%",
			ease: Linear.easeNone
		}).fromTo(".team", duration[3], {
			y: "-0%",
		}, {
			y: "-100%",
			ease: Linear.easeNone
		})


	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "1000%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
		
	
	/** We do tabs */

	$('#tabs-nav li').click(function(){
		$('#tabs-nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab-item').hide();
		
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn(1000);
		return false;
		
	});

});

/** Cursor */

// let mouseCursor = document.querySelector('.cursor');
// let navLinks = document.querySelectorAll('.main-nav__link');
// let logo = document.querySelectorAll('.logo-link');
// let menuToggle = document.querySelectorAll('.main-nav__btn');
// let clientsHover = document.querySelectorAll('.masonry-grid__item-inner');

// window.addEventListener('mousemove',cursor);

// function cursor (e) {
// 	mouseCursor.style.top = e.pageY + 'px';
// 	mouseCursor.style.left = e.pageX + 'px';
// }

// navLinks.forEach(link => {
// 	link.addEventListener('mouseover', () => {
// 		mouseCursor.classList.add('cursor-grow');
// 		mouseCursor.innerText = 'Contact';
// 	});
// 	link.addEventListener('mouseleave', () => {
// 		mouseCursor.classList.remove('cursor-grow');
// 		mouseCursor.innerText = '';
// 	});
// });

// logo.forEach(link => {
// 	link.addEventListener('mouseover', () => {
// 		mouseCursor.classList.add('cursor-color');
// 	});
// 	link.addEventListener('mouseleave', () => {
// 		mouseCursor.classList.remove('cursor-color');
// 	});
// });

// menuToggle.forEach(link => {
// 	link.addEventListener('mouseover', () => {
// 		mouseCursor.classList.add('cursor-grow');
// 		mouseCursor.innerText = 'Open';
// 	});
// 	link.addEventListener('mouseleave', () => {
// 		mouseCursor.classList.remove('cursor-grow');
// 		mouseCursor.innerText = '';
// 	});
// });

// clientsHover.forEach(link => {
// 	link.addEventListener('mouseover', () => {
// 		mouseCursor.classList.add('cursor-color');
// 	});
// 	link.addEventListener('mouseleave', () => {
// 		mouseCursor.classList.remove('cursor-color');
// 	});
// });

/** Masonry grid */

var elem = document.querySelector('.masonry-grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.masonry-grid__item',
  layoutMode: 'masonry'
});

var iso = new Isotope( '.masonry-grid', {
  // options
});

/** Team slider */

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 13,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
