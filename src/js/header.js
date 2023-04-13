
// Categories swiper

if (document.querySelector('.header__categories-swiper').style.display !== 'none') {
    const swiper = new Swiper('.header__categories-swiper', {
        navigation: {
            nextEl: '.header__categories-swiper-button-next',
        },
        loop: true,
        speed: 400,
        spaceBetween: 23,
        slidesPerView: 8,
        slidesToScroll: 1,

    });
}



if (document.querySelector('.header__catalog')) {

    // Catalog opening

    const catalogOpen = document.querySelector('.header__catalog-trigger');
    const catalogClose = document.querySelector('.header__catalog-hidden-list-title')
    const catalog = document.querySelector('.header__catalog');

    catalogOpen.addEventListener('click', function () {
        catalog.classList.add('header__catalog--visible');
    });

    catalogClose.addEventListener('click', function () {
        catalog.classList.remove('header__catalog--visible');
        document.querySelectorAll('.header__catalog-hidden-item').forEach((child) => {
            child.classList.remove('catalog-item--active');
            document.querySelectorAll('.header__catalog-hidden-items-more').forEach((child) => {
                child.classList.remove('catalog-item--active');
            });
        })
        document.querySelector('.header__catalog-hidden-more-result').classList.remove('catalog-item--active');
    })

    window.addEventListener('click', function (e) {
        if (!catalog.contains(e.target)) {
            catalog.classList.remove('header__catalog--visible');
            document.querySelectorAll('.header__catalog-hidden-item').forEach((child) => {
                child.classList.remove('catalog-item--active');
                document.querySelectorAll('.header__catalog-hidden-items-more').forEach((child) => {
                    child.classList.remove('catalog-item--active');
                });
            })
            document.querySelector('.header__catalog-hidden-more-result').classList.remove('catalog-item--active');
        }
    });



    if (window.innerWidth >= 1000) {

        //Catalog more opening 

        // Triggers
        const catalogItem = document.querySelectorAll('.header__catalog-hidden-item');
        const catalogItem1 = document.querySelector('.header__catalog-hidden-item_1');
        const catalogItem2 = document.querySelector('.header__catalog-hidden-item_2');
        const catalogItem3 = document.querySelector('.header__catalog-hidden-item_3');
        const catalogItem4 = document.querySelector('.header__catalog-hidden-item_4');
        const catalogItem5 = document.querySelector('.header__catalog-hidden-item_5');
        const catalogItem6 = document.querySelector('.header__catalog-hidden-item_6');
        const catalogItem7 = document.querySelector('.header__catalog-hidden-item_7');
        const catalogItem8 = document.querySelector('.header__catalog-hidden-item_8');
        const catalogItem9 = document.querySelector('.header__catalog-hidden-item_9');
        const catalogItem10 = document.querySelector('.header__catalog-hidden-item_10');

        // More items
        const catalogMore = document.querySelectorAll('.header__catalog-hidden-items-more');
        const catalogMore1 = document.querySelector('.header__catalog-hidden-items-more_1');
        const catalogMore2 = document.querySelector('.header__catalog-hidden-items-more_2');
        const catalogMore3 = document.querySelector('.header__catalog-hidden-items-more_3');
        const catalogMore4 = document.querySelector('.header__catalog-hidden-items-more_4');
        const catalogMore5 = document.querySelector('.header__catalog-hidden-items-more_5');
        const catalogMore6 = document.querySelector('.header__catalog-hidden-items-more_6');
        const catalogMore7 = document.querySelector('.header__catalog-hidden-items-more_7');
        const catalogMore8 = document.querySelector('.header__catalog-hidden-items-more_8');
        const catalogMore9 = document.querySelector('.header__catalog-hidden-items-more_9');
        const catalogMore10 = document.querySelector('.header__catalog-hidden-items-more_10');

        // Catalog result 

        const catalogResult = document.querySelector('.header__catalog-hidden-more-result');

        catalogItem.forEach((item) => {
            item.addEventListener('click', function (e) { 
                if (item.classList.contains('catalog-item--active')) {
                    item.classList.remove('catalog-item--active');
                    catalogResult.classList.remove('catalog-item--active');
                    catalogMore.forEach((item) => {
                        item.classList.remove('catalog-item--active');
                        catalogResult.classList.remove('catalog-item--active');
                    });
                } else {
                    catalogItem.forEach((child) => {
                        child.classList.remove('catalog-item--active');
                        catalogMore.forEach((child) => {
                            child.classList.remove('catalog-item--active');
                        });
                    })
                    item.classList.add('catalog-item--active');
                    catalogResult.classList.add('catalog-item--active');
                    if (item === catalogItem1) {
                        catalogMore1.classList.add('catalog-item--active');
                    } else if (item === catalogItem2) {
                        catalogMore2.classList.add('catalog-item--active');
                    } else if (item === catalogItem3) {
                        catalogMore3.classList.add('catalog-item--active');
                    } else if (item === catalogItem4) {
                        catalogMore4.classList.add('catalog-item--active');
                    } else if (item === catalogItem5) {
                        catalogMore5.classList.add('catalog-item--active');
                    } else if (item === catalogItem6) {
                        catalogMore6.classList.add('catalog-item--active');
                    } else if (item === catalogItem7) {
                        catalogMore7.classList.add('catalog-item--active');
                    } else if (item === catalogItem8) {
                        catalogMore8.classList.add('catalog-item--active');
                    } else if (item === catalogItem9) {
                        catalogMore9.classList.add('catalog-item--active');
                    } else if (item === catalogItem10) {
                        catalogMore10.classList.add('catalog-item--active');
                    }
                }
            })
        })
    } else {
        const body = document.querySelector('.body');
        const catalogBurger = document.querySelector('.header__top_burger-catalog');
        const catalogBurgerTrigger = document.querySelector('.header__top_burger-catalog-trigger');
        const catalogBurgerMoreTrigger = document.querySelectorAll('.header__catalog_burger-hidden-item-title');
        const catalogBurgerMoreBack = document.querySelectorAll('.header__catalog_burger-hidden-item-back');
        const catalogBurgerClose = document.querySelector('.header_burger-catalog-close')
        const catalogBurgerMore = document.querySelectorAll('.header__catalog_burger-hidden-item');
        const catalogBurgerMoreItem = document.querySelectorAll('.header__catalog_burger-hidden-item-more');


        // burger opening

        catalogBurgerTrigger.addEventListener('click', function (e) {
            catalogBurger.classList.add('catalog_burger--active');
            body.classList.add('body-noscroll');
        });

        // burger close 

        catalogBurgerClose.addEventListener('click', function (e) {
            catalogBurger.classList.remove('catalog_burger--active');
            body.classList.remove('body-noscroll');
            catalogBurgerMore.forEach((item) => {
                item.classList.remove('catalog_burger-more--active');
            })
            catalogBurgerMoreItem.forEach((item) => {
                item.classList.remove('catalog_burger-2lvl--active');
            })
        });

        // catalog more opening

        catalogBurgerMoreTrigger.forEach((child) => {
            child.addEventListener('click', function (e) {
                child.parentNode.classList.add('catalog_burger-more--active');
            })

            catalogBurgerMoreBack.forEach((btn) => {
                btn.addEventListener('click', function (e) {
                    child.parentNode.classList.remove('catalog_burger-more--active');
                    catalogBurgerMoreItem.forEach((item) => {
                        item.classList.remove('catalog_burger-2lvl--active');
                    })
                });

            })
        });

        //catalog 2lvl accordeon

        const catalog2lvlTrigger = document.querySelectorAll('.header__catalog_burger-hidden-item-more-title');

        catalog2lvlTrigger.forEach((item) => {
            item.addEventListener('click', function () {
                if (item.parentNode.classList.contains('catalog_burger-2lvl--active')) {
                    item.parentNode.classList.remove('catalog_burger-2lvl--active');
                } else {
                    catalog2lvlTrigger.forEach((child) => {
                        child.parentNode.classList.remove('catalog_burger-2lvl--active');
                    })
                    item.parentNode.classList.add('catalog_burger-2lvl--active');
                };
            });
        });

    }


    // Catalog more 2lvl accordeon 

    const catalog2lvlTrigger = document.querySelectorAll('.header__catalog-hidden-item-more-title');

    catalog2lvlTrigger.forEach((item) => {
        item.addEventListener('click', function () {
            if (item.parentNode.classList.contains('lvl2--active')) {
                item.parentNode.classList.remove('lvl2--active');
            } else {
                catalog2lvlTrigger.forEach((child) => {
                    child.parentNode.classList.remove('lvl2--active');
                })
                item.parentNode.classList.add('lvl2--active');
            };
        });
    });


}