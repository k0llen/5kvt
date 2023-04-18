if (document.querySelector('.benefits')) {
    const benefitsSwiper = new Swiper ('.benefits__swiper', {
        slidesPerView: 4,
        slidesToscroll: 1,
        speed: 600,
        loop: false,
        pagination: {
            el: '.benefits__swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            // >= 300
            300: {
                slidesPerView: 1,
            },
            // >= 580
            580: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // >= 768
            768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            // >= 1024
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // >= 1130
            1130: {
                spaceBetween: 15,
            },
            // >= 1168
            1168: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
            
        },
    })
}