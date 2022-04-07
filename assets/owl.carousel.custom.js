$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            485: { items: 1 },
            960: { items: 2 },
        },
    });
});