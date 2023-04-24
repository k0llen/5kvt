if (document.querySelector('.sale')) {
    const monthSwiper = new Swiper('.sale__swiper', {
        navigation: {
            nextEl: '.sale__swiper-button-next',
            prevEl: '.sale__swiper-button-prev'
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

    const addFavorite = document.querySelectorAll('.sale__swiper-slide-favorite_blue');
    const removeFavorite = document.querySelectorAll('.sale__swiper-slide-favorite_red');
    
    addFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.add('sale__swiper-slide-favorite--active');
        });
    });

    removeFavorite.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.parentNode.classList.remove('sale__swiper-slide-favorite--active');
        });
    });
}