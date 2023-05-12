if (document.querySelector('.contacts')) {
    const contactsAdressesSwiper = new Swiper('.contacts__adresses-swiper', {
        navigation: {
            nextEl: '.contacts__adresses-swiper-button-next',
            prevEl: '.contacts__adresses-swiper-button-prev'
        },
        pagination: {
            el: '.contacts__adresses-swiper-pagination',
            type: 'bullets',
        },
        speed: 500,
        slidesToScroll: 1,
        spaceBetween: 30,
        breakpoints: {
            300 : {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
                loop: true,
            },
            990: {
                slidesPerView: 3,
            }
        },
    });
}