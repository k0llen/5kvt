if (document.querySelector('.else')) {
    // else swiper 

    const elseSwiper = new Swiper('.else__swiper', {
        navigation: {
            nextEl: '.else__swiper-button-next',
            prevEl: '.else__swiper-button-prev'
        },
        loop: true,
        speed: 500,
        slidesPerView: 4,
        slidesToScroll: 1,
        spaceBetween: 30,
        breakpoints: {
            300 : {
                slidesPerView: 2,
                spaceBetween: 16,
                centeredSlides: true,
            },
            1000: {
                slidesPerView: 4,
            }
        },
    })

    //else favorite 

    const addFavorite = document.querySelectorAll('.else__swiper-slide-favorite_blue');
    const removeFavorite = document.querySelectorAll('.else__swiper-slide-favorite_red');
    
    addFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.add('else__swiper-slide-favorite--active');
        });
    });

    removeFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.remove('else__swiper-slide-favorite--active');
        });
    });

}