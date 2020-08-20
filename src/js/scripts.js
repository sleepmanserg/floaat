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

	/** Masonry grid */

	function initIsotope() {
		if ('undefined' === typeof $.fn.isotope) {
			return;
		}

		$('.isotope-grid').isotope({
				itemSelector: '.grid-item',
				transitionDuration: '0.7s',
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: '.gutter-sizer'
			}
		});

		// re-built isotope layout on page resize
		$(window).on('resize', function () {
			$('.isotope-grid').isotope('layout');
		});
		
	}

	/** Parallax */

	// Init ScrollMagic
	let ctrl = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// Create scene
	$("section").each(function() {

		let name = $(this).attr('id');
		
		new ScrollMagic.Scene({
			triggerElement: this
		})
		.setPin(this)
		.addIndicators({
			colorStart: "rgba(255,255,255,0.5)",
			colorEnd: "rgba(255,255,255,0.5)", 
			colorTrigger : "rgba(255,255,255,1)",
			name:name
		})
		.loglevel(3)
		.addTo(ctrl);

	});

	// Get window height
	let wh = window.innerHeight;

	new ScrollMagic.Scene({
		offset: wh*3
	})
	.setClassToggle("section#parallax4", "is-active")
	.addTo(ctrl);
	
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

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.main-nav__link');
let logo = document.querySelectorAll('.logo-link');
let menuToggle = document.querySelectorAll('.main-nav__btn');
let clientsHover = document.querySelectorAll('.masonry-grid__item-inner');

window.addEventListener('mousemove',cursor);

function cursor (e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('cursor-grow');
		mouseCursor.innerText = 'Contact';
	});
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('cursor-grow');
		mouseCursor.innerText = '';
	});
});

logo.forEach(link => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('cursor-color');
	});
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('cursor-color');
	});
});

menuToggle.forEach(link => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('cursor-grow');
		mouseCursor.innerText = 'Open';
	});
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('cursor-grow');
		mouseCursor.innerText = '';
	});
});

clientsHover.forEach(link => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('cursor-color');
	});
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('cursor-color');
	});
});

var elem = document.querySelector('.masonry-grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.masonry-grid__item',
  layoutMode: 'masonry'
});

var iso = new Isotope( '.masonry-grid', {
  // options
});


var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 13,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
