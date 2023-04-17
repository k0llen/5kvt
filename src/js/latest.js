if (document.querySelector('.latest')) {
    const monthSwiper = new Swiper('.latest__swiper', {
        navigation: {
            nextEl: '.latest__swiper-button-next',
            prevEl: '.latest__swiper-button-prev'
        },
        loop: true,
        speed: 600,
        slidesperView: 4,
        slidesToScroll: 1,
        spaceBetween: 30,
    })
}