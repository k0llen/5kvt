if (document.querySelector('.tovar')) {

    // Reviews slider

    if (document.querySelector('.tovar__review')) {
        const reviewSwiper = new Swiper('.tovar__review-swiper', {
            navigation: {
                nextEl: '.tovar__review-swiper-button-next',
                prevEl: '.tovar__review-swiper-button-prev'
            },
            slidesPerView: 1,
            spaceBetween: 10,
            slidesToScroll: 1,
            loop: true,
        })
    }

    // Favorite desctop

    if (window.innerWidth >= 1000) {
        const addFavorite = document.querySelectorAll('.tovar__card-text-block-favorite_blue');
        const removeFavorite = document.querySelectorAll('.tovar__card-text-block-favorite_red');
    
        addFavorite.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.parentNode.classList.add('tovar__card-text-block-favorite--active');
            });
        });

        removeFavorite.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.parentNode.classList.remove('tovar__card-text-block-favorite--active');
            });
        });

    } else {
        const burgerFavorite = document.querySelector('.tovar__card-text-block_cart-favorite_burger');
    
        burgerFavorite.addEventListener('click', function () {
            this.classList.toggle('tovar__card-text-block_cart-favorite_burger--active');
        });
    }
    // counter

    const counter = document.querySelector('.tovar__card-text-block_cost-meter')
    const counterInput = document.querySelector('.tovar__card-text-block_cost-meter-input');
    const counterPlus = document.querySelector('.tovar__card-text-block_cost-meter-plus');
    const counterMinus = document.querySelector('.tovar__card-text-block_cost-meter-minus');
    let inputValue = parseInt(counterInput.value);
    

    counterPlus.addEventListener('click', (e) => {
        if (inputValue < 8) {
            inputValue++;
            counterInput.value = inputValue;
            counterMinus.classList.remove('tovar__card-text-block_cost-meter_button-disabled')
        } else {
            inputValue = 9;
            counterInput.value = inputValue;
            counterPlus.classList.add('tovar__card-text-block_cost-meter_button-disabled')
        }
    });

    counterMinus.addEventListener('click', (e) => {
        if (inputValue > 2) {
            --inputValue;
            counterInput.value = inputValue;
            counterPlus.classList.remove('tovar__card-text-block_cost-meter_button-disabled')
        } else {
            inputValue = 1;
            counterInput.value = inputValue;
            counterMinus.classList.add('tovar__card-text-block_cost-meter_button-disabled')
        }
    });
}

