
// Categories swiper

if (document.querySelector('.header__categories-swiper').style.display !== 'none') {
    const swiper = new Swiper('.header__categories-swiper', {
        navigation: {
            nextEl: '.header__categories-swiper-button-next',
            prevEl: '.header__categories-swiper-button-prev',
          },
        speed: 400,
        spaceBetween: 23,
        slidesPerView : 7.92,
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
        document.querySelector('.header__catalog-hidden-more-result').style.display = 'none';
    })

    window.addEventListener('click', function (e) {
        if (!catalog.contains(e.target)) {
            catalog.classList.remove('header__catalog--visible');
            document.querySelector('.header__catalog-hidden-more-result').style.display = 'none';
        }
    });

    

    if (window.innerWidth >= 1000) {

        //Catalog more opening 

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
        const catalogMoreResults = document.querySelector('.header__catalog-hidden-more-result');


        catalogItem1.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore1.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem2.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore2.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem3.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore3.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem4.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore4.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem5.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore5.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem6.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore6.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem7.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore7.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem8.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore8.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem9.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore9.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })

        catalogItem10.addEventListener('mouseover', function () {
            catalogMoreResults.innerHTML = catalogMore10.innerHTML;
            catalogMoreResults.style.display = 'grid';
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
        })
    };

    

    
}