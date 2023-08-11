
function favoriteFunc() {
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
}

function drawCard(wrapper, content) {
    wrapper.insertAdjacentHTML('beforeend', content);
}

function isSaleOrNew(productCards) {
    const newHtml = `<div class="new">NEW</div>`;
    const saleHtml = `<div class="sell">SELL</div>`;
    document.querySelectorAll(productCards).forEach((card) => {
        if (card.dataset.new === 'true') {
            card.insertAdjacentHTML('beforeend', newHtml);
        } else if (card.dataset.sale === 'true') {
            card.insertAdjacentHTML('beforeend', saleHtml);
        }
    })
}

if (document.querySelector('.month')) {
    const monthWrapper = document.querySelector('.month__swiper-wrapper');
    const latestWrapper = document.querySelector('.latest__swiper-wrapper');
    const saleWrapper = document.querySelector('.sale__swiper-wrapper');



    function drawCatalogItems(db) {
        for (let key in db) {
            const cardHtml = `<div class="${shopDB[key].type}__swiper-slide swiper-slide main-cards__swiper-slide"  data-id="${shopDB[key].id}" data-new="${shopDB[key].new}" data-sale="${shopDB[key].sale}" data-card>
        <a href="/product-card.html" class="${shopDB[key].type}__swiper-slide-link main-cards__swiper-slide-link">
            <img src="${shopDB[key].img}" alt="" class="${shopDB[key].type}__swiper-slide-pic main-cards__swiper-slide-pic" data-img>
        </a>
        <div class="${shopDB[key].type}__swiper-slide-desc main-cards__swiper-slide-desc fz18">
            <a href="product-card.html" class="fw500 ${shopDB[key].type}__swiper-slide-link-text main-cards__swiper-slide-link-text card-article" data-article>${shopDB[key].article}</a>
            <p class="fw400 card-name" data-name>${shopDB[key].title}</p>
        </div>
        <div class="${shopDB[key].type}__swiper-slide-cost main-cards__swiper-slide-cost fz24 fw500">
            <div class="${shopDB[key].type}__swiper-slide-cost-text main-cards__swiper-slide-cost-text">
                <p class="current" data-current>${Intl.NumberFormat("ru").format(shopDB[key].currentPrice)} ₽</p>
                <p class="${shopDB[key].type}__swiper-slide-cost-recent main-cards__swiper-slide-cost-recent">${shopDB[key].oldPrice ? Intl.NumberFormat("ru").format(shopDB[key].oldPrice) : ''}</p>
            </div>
            <button class="${shopDB[key].type}__swiper-slide-parametres main-cards__swiper-slide-parametres">
                <img src="img/svg/blue-parametres.svg" alt="">
            </button>
        </div>
        <div class="${shopDB[key].type}__swiper-slide-cart-param main-cards__swiper-slide-cart-param">
            <button class="${shopDB[key].type}__swiper-slide-cart main-cards__swiper-slide-cart fz16" data-add-to-cart>
                <img src="img/svg/white-shopping-cart.svg" alt="" class="${shopDB[key].type}__swiper-slide-cart-pic main-cards__swiper-slide-cart-pic">
                <p>В корзину</p>
            </button>
            <button class="${shopDB[key].type}__swiper-slide-parametres_mobile main-cards__swiper-slide-parametres_mobile">
                <img src="img/svg/white-parametres.svg" alt="">
            </button>
        </div>
        <button class="${shopDB[key].type}__swiper-slide-favorite_blue main-cards__swiper-slide-favorite_blue ${shopDB[key].type}__swiper-slide-favorite main-cards__swiper-slide-favorite">
            <img src="img/svg/blue-hearth.svg" alt="">
        </button>
        <button class="${shopDB[key].type}__swiper-slide-favorite_red main-cards__swiper-slide-favorite_red ${shopDB[key].type}__swiper-slide-favorite main-cards__swiper-slide-favorite">
            <img src="img/svg/red-hearth.svg" alt="">
        </button>
        </div>`;
            if (db[key].type === 'month') {
                drawCard(monthWrapper, cardHtml);
            } else if (db[key].type === 'latest') {
                drawCard(latestWrapper, cardHtml);
            } else if (db[key].type === 'sale') {
                drawCard(saleWrapper, cardHtml);
            }
        }
    }

    window.onload = () => {
        drawCatalogItems(shopDB);
        isSaleOrNew('.main-cards__swiper-slide');
        favoriteFunc()
    }
}

if (document.querySelector('.catalog')) {
    const catalogWrapper = document.querySelector('.catalog__cards');
   

    function drawCatalogItems(db) {
        for (let key in db) {
            const cardHtml = `<div class="catalog__card" data-card data-id="${shopDB[key].id}" data-sale="${shopDB[key].sale}" data-new="${shopDB[key].new}">
            <a href="product-card.html" class="catalog__card-link">
                <img src="${shopDB[key].img}" data-img alt="data-id="${shopDB[key].title}"" class="catalog__card-pic">
            </a>
            <div class="catalog__card-desc fz18">
                <a href="product-card.html" class="fw500 catalog__card-link-text card-article" data-article>${shopDB[key].article}</a>
                <p class="fw400 card-name" data-name>${shopDB[key].title}</p>
            </div>
            <div class="catalog__card-cost fz24 fw500">
                <div class="catalog__card-cost-text">
                    <p class="catalog__card-current" data-current>${Intl.NumberFormat("ru").format(shopDB[key].currentPrice)} ₽</p>
                    <p class="catalog__card-cost-recent">${shopDB[key].oldPrice ? Intl.NumberFormat("ru").format(shopDB[key].oldPrice) : ''}</p>
                </div>
                <button class="catalog__card-parametres">
                    <img src="./img/svg/blue-parametres.svg" alt="">
                </button>
            </div>
            <div class="catalog__card-cart-param">
                <button class="catalog__card-cart fz16" data-add-to-cart>
                    <img src="./img/svg/white-shopping-cart.svg" alt="" class="catalog__card-cart-pic">
                    <p>В корзину</p>
                </button>
                <button class="catalog__card-parametres_mobile">
                    <img src="./img/svg/white-parametres.svg" alt="">
                </button>
            </div>
            <button class="catalog__card-favorite_blue catalog__card-favorite">
                <img src="./img/svg/blue-hearth.svg" alt="">
            </button>
            <button class="catalog__card-favorite_red catalog__card-favorite">
                <img src="./img/svg/red-hearth.svg" alt="">
            </button>
        </div>
`
            drawCard(catalogWrapper, cardHtml);
        }
    }

    window.onload = () => {
        drawCatalogItems(shopDB);
        isSaleOrNew('.catalog__card');
        favoriteFunc();
    }
}

if (document.querySelector('.else')) {
    const elseWrapper = document.querySelector('.else__swiper-wrapper');
    function drawCatalogItems(db) {
        for (let key in db) {
            const cardHtml = `<div class="else__swiper-slide swiper-slide" data-id="${shopDB[key].id}" data-sale="${shopDB[key].sale}" data-new="${shopDB[key].new}" data-card>
            <a href="product-card.html" class="else__swiper-slide-link">
                <img src="${shopDB[key].img}" data-img alt="data-id="${shopDB[key].title}"" class="else__swiper-slide-pic">
            </a>
            <div class="else__swiper-slide-desc">
                <a href="#" class="fw500 else__swiper-slide-link-text card-article" data-article>${shopDB[key].article}</a>
                <p class="fw400 card-name" data-name>${shopDB[key].title}</p>
            </div>
            <div class="else__swiper-slide-cost fz24 fw500" >
                <div class="else__swiper-slide-cost-text">
                    <p class="current" data-current>${Intl.NumberFormat("ru").format(shopDB[key].currentPrice)} ₽</p>
                    <p class="else__swiper-slide-cost-recent">${shopDB[key].oldPrice ? Intl.NumberFormat("ru").format(shopDB[key].oldPrice) : ''}</p>
                </div>
                <button class="else__swiper-slide-parametres">
                    <img src="./img/svg/blue-parametres.svg" alt="">
                </button>
            </div>
            <div class="else__swiper-slide-cart-param">
                <button class="else__swiper-slide-cart fz16" data-add-to-cart>
                    <img src="./img/svg/white-shopping-cart.svg" alt="" class="else__swiper-slide-cart-pic">
                    <p>В корзину</p>
                </button>
                <button class="else__swiper-slide-parametres_mobile">
                    <img src="./img/svg/white-parametres.svg" alt="">
                </button>
            </div>
            <button class="else__swiper-slide-favorite_blue else__swiper-slide-favorite">
                <img src="./img/svg/blue-hearth.svg" alt="">
            </button>
            <button class="else__swiper-slide-favorite_red else__swiper-slide-favorite">
                <img src="./img/svg/red-hearth.svg" alt="">
            </button>
        </div>
`
            drawCard(elseWrapper, cardHtml);
        }
    }

    window.onload = () => {
        drawCatalogItems(shopDB);
        isSaleOrNew('.else__swiper-slide');
        favoriteFunc();
    }
}