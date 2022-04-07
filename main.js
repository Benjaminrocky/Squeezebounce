// Select element function
// const selectElement = function (element) {
//     return document.querySelector(element)
// };

// let menuToggler = selectElement ('.menu-toggle');
// let body = selectElement ('body');

// menuToggler.addEventListener('click', function () {
//     body.classList.toggle('open');
// });

// document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     document.querySelector('.subscription').classList.add('done');
// });

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });

// scroll reveal
window.sr = ScrollReveal();

sr.reveal ('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay:300
});

sr.reveal ('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal ('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal ('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay:600
});

// jQuery(".slidem").prepend(jQuery(".slidem > div:last").clone()); /* copy last div for the first slideup */
// jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
// 	return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
// }; /* slideup fade toggle code */
// var divS = jQuery(".slidem > div"), /* get the divs to slideup */
// 	sDiv = jQuery(".slidem > div").length, /* get the number of divs to slideup */
// 	n = 0; /* starting counter */
// function slidethem() { /* slide fade function */
// 	jQuery( divS ).eq( n ).slideFadeToggle(1000,"swing",n=n+1); /* slide fade the div at 1000ms swing and add to counter */
// 	jQuery( divS ).eq( n ).show(); /* make sure the next div is displayed */
// }
// ( function slideit() { /* slide repeater */
// 	if( n == sDiv ) { /* check if at the last div */
// 		n = 0; /* reset counter */
// 		jQuery( divS ).show(); /* reset the divs */
// 	}
// 	slidethem(); /* call slide function */
// 	if(n == sDiv) { /* check if at the last div */
// 		setTimeout(slideit,1); /* slide up first div fast */
// 	} else {
// 		setTimeout(slideit,1000); /* slide up every 1000ms */
// 	}
// } )();




// // start
// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const faders = document.querySelectorAll(".fadeInDown ");
// const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// fadeInDown.forEach(fadeInDown => {
//   appearOnScroll.observe(fadeInDown);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });

