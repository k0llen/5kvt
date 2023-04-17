if (document.querySelector('.month')) {
    const monthSwiper = new Swiper('.month__swiper', {
        navigation: {
            nextEl: '.month__swiper-button-next',
            prevEl: '.month__swiper-button-prev'
        },
        loop: true,
        speed: 600,
        slidesperView: 4,
        slidesToScroll: 1,
        spaceBetween: 30,
    })
}