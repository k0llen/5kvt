if (document.querySelector('.latest')) {
    const monthSwiper = new Swiper('.latest__swiper', {
        navigation: {
            nextEl: '.latest__swiper-button-next',
            prevEl: '.latest__swiper-button-prev'
        },
        loop: true,
        speed: 500,
        slidesPerView: 4,
        slidesToScroll: 1,
        spaceBetween: 30,
        breakpoints: {
            300 : {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 15,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            1000: {
                slidesPerView: 4,

            }
        },
    })
}