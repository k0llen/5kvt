// favorite 

const addFavorite = document.querySelectorAll('.main-cards__swiper-slide-favorite_blue');
const removeFavorite = document.querySelectorAll('.main-cards__swiper-slide-favorite_red');

addFavorite.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.parentNode.classList.add('main-cards__swiper-slide-favorite--active');
    });
});

removeFavorite.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.parentNode.classList.remove('main-cards__swiper-slide-favorite--active');
    });
});