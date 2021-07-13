$(document).ready(function () {

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

});

// slider gallery
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// videos section
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    video: true,
    items: 1,
    nav: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 1,
            stagePadding: 250
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 350
        },
        1800: {
            items: 1,
            stagePadding: 400
        }
    }
})

var playerSettings = {
    controls: ['play-large'],
    fullscreen: { enabled: false },
    resetOnEnd: true,
    hideControls: true,
    clickToPlay: true,
    keyboard: false,
}

const players = Plyr.setup('.js-player', playerSettings);

players.forEach(function (instance, index) {
    instance.on('play', function () {
        players.forEach(function (instance1, index1) {
            if (instance != instance1) {
                instance1.pause();
            }
        });
    });
});

$('.video-section').on('translated.owl.carousel', function (event) {
    players.forEach(function (instance, index1) {
        instance.pause();
    });
});

// Life at Bueno.Tours
const images = document.querySelectorAll(".listing-gallery-img");
const activeImage = document.getElementById("active-img");
const firstImage = images[0];
firstImage.classList.add("selected");


images.forEach((image) => {
    image.addEventListener("click", function () {
        images.forEach((image) => image.classList.remove("selected"));
        image.classList.add("selected");
        const thumbSrc = this.src;
        activeImage.src = thumbSrc;
    });
});