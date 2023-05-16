if (document.querySelector('.about')) {
    if (window.innerWidth <= 990) {

        const aboutSwiperWrapper = document.querySelector('.about__wrapper');
        const aboutSwiperSlide = document.querySelectorAll('.about__card');
        const aboutSwiperContainer = document.querySelector('.about__swiper');
        let namesArray = ["Доставка", "Оплата", "Проблемы с товаром", "Обмен и возврат" ];

        aboutSwiperWrapper.classList.add('swiper-wrapper');
        aboutSwiperContainer.classList.add('swiper');
        aboutSwiperSlide.forEach((slide) => {
            slide.classList.add('swiper-slide');
        });

        const aboutSwiper = new Swiper('.about__swiper', {
            navigation: {
                nextEl: '.about__swiper-button-next',
                prevEl: '.about__swiper-button-prev'
            },
            pagination: {
                el: '.about__swiper-pagination-top',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + namesArray[index] + '</span>';
                },
                dynamicBullets: true,
                dynamicMainBullets: 1,
            },
            loop: true,
            speed: 500,
            slidesPerView: 1,
            slidesToScroll: 1,
            spaceBetween: 10,
        });


        aboutSwiper.on('slideChange', function () {
            document.querySelector('.about__swiper-pagination-bottom').innerHTML = namesArray[aboutSwiper.realIndex];
        });

        document.querySelector('.about__swiper-pagination-bottom').innerHTML = namesArray[aboutSwiper.realIndex];

    } else {

        const aboutSwiperWrapper = document.querySelector('.about__wrapper');
        const aboutSwiperSlide = document.querySelectorAll('.about__card');
        const aboutSwiperContainer = document.querySelector('.about__swiper');

        aboutSwiperWrapper.classList.remove('swiper-wrapper');
        aboutSwiperContainer.classList.remove('swiper');
        aboutSwiperSlide.forEach((slide) => {
            slide.classList.remove('swiper-slide');
        });

    }

} 
