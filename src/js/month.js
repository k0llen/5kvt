if (document.querySelector('.month')) {
    const monthSwiper = new Swiper('.month__swiper', {
        navigation: {
            nextEl: '.month__swiper-button-next',
            prevEl: '.month__swiper-button-prev'
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

    // favorite 

    const addFavorite = document.querySelectorAll('.month__swiper-slide-favorite_blue');
    const removeFavorite = document.querySelectorAll('.month__swiper-slide-favorite_red');
    
    addFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.add('month__swiper-slide-favorite--active');
        });
    });

    removeFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.remove('month__swiper-slide-favorite--active');
        });
    });


}