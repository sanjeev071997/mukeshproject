const swiper3 = new Swiper(".slider-3", {
    loop: true,
    grapbCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    slidesPerView: 2,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
