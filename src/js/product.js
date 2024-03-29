if (document.querySelector('.product')) {

    // Reviews slider

    if (document.querySelector('.product__review')) {
        const reviewSwiper = new Swiper('.product__review-swiper', {
            navigation: {
                nextEl: '.product__review-swiper-button-next',
                prevEl: '.product__review-swiper-button-prev'
            },
            slidesPerView: 1,
            spaceBetween: 10,
            slidesToScroll: 1,
            loop: true,
        })
    }


    if (window.innerWidth >= 834) {

         // Favorite desctop

        const addFavorite = document.querySelectorAll('.product__card-text-block-favorite_blue');
        const removeFavorite = document.querySelectorAll('.product__card-text-block-favorite_red');
    
        addFavorite.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.parentNode.classList.add('product__card-text-block-favorite--active');
            });
        });

        removeFavorite.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.parentNode.classList.remove('product__card-text-block-favorite--active');
            });
        });

    } else {

         // Favorite mobile

        const burgerFavorite = document.querySelector('.product__card-text-block_cart-favorite_burger');
    
        burgerFavorite.addEventListener('click', function () {
            this.classList.toggle('product__card-text-block_cart-favorite_burger--active');
        });
    }
    // counter

    const counter = document.querySelector('.product__card-text-block_cost-meter')
    const counterInput = document.querySelector('.product__card-text-block_cost-meter-input');
    const counterPlus = document.querySelector('.product__card-text-block_cost-meter-plus');
    const counterMinus = document.querySelector('.product__card-text-block_cost-meter-minus');
    let countActual = document.querySelector('.product__card-text-block_cost-actual-num');
    let countRecent = document.querySelector('.product__card-text-block_cost-recent');
    let inputValue = parseInt(counterInput.innerText);
    let countActualNum = parseInt(countActual.innerHTML.replace(/[^0-9]/g, ''));
    let countRecentNum = parseInt(countRecent.innerHTML.replace(/[^0-9]/g, ''));

    counterPlus.addEventListener('click', (e) => {
        if (inputValue < 8) {
            inputValue++;
            counterInput.innerText = inputValue;
            counterMinus.classList.remove('product__card-text-block_cost-meter_button-disabled');
            countActual.innerHTML = Intl.NumberFormat("ru").format(countActualNum * inputValue);
            countRecent.innerHTML = Intl.NumberFormat("ru").format(countRecentNum * inputValue);

        } else {    
            inputValue = 9;
            counterInput.innerText = inputValue;
            counterPlus.classList.add('product__card-text-block_cost-meter_button-disabled');
            countActual.innerHTML = Intl.NumberFormat("ru").format(countActualNum * inputValue);
            countRecent.innerHTML = Intl.NumberFormat("ru").format(countRecentNum * inputValue);
        }
    });

    counterMinus.addEventListener('click', (e) => {
        if (inputValue > 2) {
            --inputValue;
            counterInput.innerText = inputValue;
            counterPlus.classList.remove('product__card-text-block_cost-meter_button-disabled');
            countActual.innerHTML = Intl.NumberFormat("ru").format(countActualNum * inputValue);
            countRecent.innerHTML = Intl.NumberFormat("ru").format(countRecentNum * inputValue);
        } else {
            inputValue = 1;
            counterInput.innerText = inputValue;
            counterMinus.classList.add('product__card-text-block_cost-meter_button-disabled');
            countActual.innerHTML = Intl.NumberFormat("ru").format(countActualNum * inputValue);
            countRecent.innerHTML = Intl.NumberFormat("ru").format(countRecentNum * inputValue);
        }
    });
}