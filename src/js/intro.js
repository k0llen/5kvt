if (document.querySelector('.intro')) {
    const introSwiper = new Swiper('.intro__swiper', {
        navigation: {
            nextEl: '.intro__swiper-button-next',
            prevEl: '.intro__swiper-button-prev'
        },
        loop: true,
        speed: 400,
        slidesPerView: 1,
        slidesToScroll: 1,
        
/*         breakpoints: {
            // when window width is >= 320px
            320: {
                centeredSlides: true,
            },
            // when window width is >= 640px
            801: {
                centeredSlides: false,
            }
        } */
    })
}