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
        
    })
}