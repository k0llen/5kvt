"use strict";if(document.querySelector(".about"))if(window.innerWidth<=990){const e=document.querySelector(".about__wrapper"),t=document.querySelectorAll(".about__card"),o=document.querySelector(".about__swiper");let c=["Доставка","Оплата","Проблемы с товаром","Обмен и возврат"];e.classList.add("swiper-wrapper"),o.classList.add("swiper"),t.forEach((e=>{e.classList.add("swiper-slide")}));const r=new Swiper(".about__swiper",{navigation:{nextEl:".about__swiper-button-next",prevEl:".about__swiper-button-prev"},pagination:{el:".about__swiper-pagination-top",renderBullet:function(e,t){return'<span class="'+t+'">'+c[e]+"</span>"},dynamicBullets:!0,dynamicMainBullets:1},loop:!0,speed:500,slidesPerView:1,slidesToScroll:1,spaceBetween:10,autoHeight:!0});r.on("slideChange",(function(){document.querySelector(".about__swiper-pagination-bottom").innerHTML=c[r.realIndex]})),document.querySelector(".about__swiper-pagination-bottom").innerHTML=c[r.realIndex]}else{const e=document.querySelector(".about__wrapper"),t=document.querySelectorAll(".about__card"),o=document.querySelector(".about__swiper");e.classList.remove("swiper-wrapper"),o.classList.remove("swiper"),t.forEach((e=>{e.classList.remove("swiper-slide")}))}if(document.querySelector(".benefits")){new Swiper(".benefits__swiper",{slidesPerView:4,slidesToscroll:1,speed:600,loop:!1,pagination:{el:".benefits__swiper-pagination",type:"bullets",clickable:!0},breakpoints:{300:{slidesPerView:1},580:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2.2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20},1130:{spaceBetween:15},1168:{slidesPerView:4,spaceBetween:30}}})}if(document.querySelector(".catalog")){if(document.querySelectorAll(".catalog__filters-dropdown").forEach((function(e){const t=e.querySelector(".catalog__filters-dropdown-button"),o=e.querySelector(".catalog__filters-dropdown-list"),c=o.querySelectorAll(".catalog__filters-dropdown-list-item"),r=e.querySelector(".catalog__filters-dropdown-input-hidden");t.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("catalog__filters-dropdown-list--visible")})),c.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.innerText=this.innerText,t.focus(),r.value=this.dataset.value,o.classList.remove("catalog__filters-dropdown-list--visible")}))})),document.addEventListener("click",(function(e){t.contains(e.target)||o.classList.remove("catalog__filters-dropdown-list--visible")})),document.addEventListener("keydown",(function(e){"Tab"!==e.key&&"Escape"!==e.key||o.classList.remove("catalog__filters-dropdown-list--visible")}))})),document.querySelectorAll(".catalog__side-select").forEach((function(e){const t=e.querySelector(".catalog__side-select-dropdown-button"),o=e.querySelector(".catalog__side-select-dropdown-list"),c=o.querySelectorAll(".catalog__side-select-dropdown-list-item"),r=e.querySelector(".catalog__side-select-dropdown-input-hidden");t.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("catalog__side-select-dropdown-list--visible"),this.classList.add("catalog__side-select-dropdown-button--active")})),c.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.innerText=this.innerText,t.focus(),r.value=this.dataset.value,o.classList.remove("catalog__side-select-dropdown-list--visible"),t.classList.remove("catalog__side-select-dropdown-button--active")}))})),document.addEventListener("click",(function(e){t.contains(e.target)||(t.classList.remove("catalog__side-select-dropdown-button--active"),o.classList.remove("catalog__side-select-dropdown-list--visible"))})),document.addEventListener("keydown",(function(e){"Tab"!==e.key&&"Escape"!==e.key||(t.classList.remove("catalog__side-select-dropdown-button--active"),o.classList.remove("catalog__side-select-dropdown-list--visible"))}))})),window.innerWidth<=1e3){const e=document.querySelector(".catalog__side-burger-open"),t=document.querySelector(".catalog__wrapper"),o=document.querySelector(".catalog__side"),c=document.querySelector(".body");e.addEventListener("click",(function(){t.classList.toggle("sidebar--active"),c.classList.add("body-noscroll")})),document.addEventListener("click",(function(r){o.contains(r.target)||e.contains(r.target)||(t.classList.remove("sidebar--active"),c.classList.remove("body-noscroll"))}))}const e=document.querySelectorAll(".catalog__card-favorite_blue"),t=document.querySelectorAll(".catalog__card-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("catalog__card-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("catalog__card-favorite--active")}))}))}if(document.querySelector(".contacts")){new Swiper(".contacts__adresses-swiper",{navigation:{nextEl:".contacts__adresses-swiper-button-next",prevEl:".contacts__adresses-swiper-button-prev"},pagination:{el:".contacts__adresses-swiper-pagination",type:"bullets",clickable:!0},speed:500,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{slidesPerView:1},500:{slidesPerView:2,loop:!0},990:{slidesPerView:3}}})}if(document.querySelector(".else")){new Swiper(".else__swiper",{navigation:{nextEl:".else__swiper-button-next",prevEl:".else__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{slidesPerView:2,spaceBetween:16,centeredSlides:!0},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".else__swiper-slide-favorite_blue"),t=document.querySelectorAll(".else__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("else__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("else__swiper-slide-favorite--active")}))}))}if(document.querySelector(".footer")&&window.innerWidth<=1003){const e=document.querySelectorAll(".footer__block-2-list-trigger");e.forEach((t=>{t.addEventListener("click",(function(){t.parentNode.classList.contains("footer__accordeon--active")?t.parentNode.classList.remove("footer__accordeon--active"):(e.forEach((e=>{e.parentNode.classList.remove("footer__accordeon--active")})),t.parentNode.classList.add("footer__accordeon--active"))}))}))}if("none"!==document.querySelector(".header__top").style.display){new Swiper(".header__categories-swiper",{navigation:{nextEl:".header__categories-swiper-button-next"},loop:!0,speed:400,spaceBetween:23,slidesPerView:8,slidesToScroll:1})}if(document.querySelector(".header__catalog")){const e=document.querySelector(".header__catalog-trigger"),t=document.querySelector(".header__catalog-hidden-list-title"),o=document.querySelector(".header__catalog");if(e.addEventListener("click",(function(){o.classList.add("header__catalog--visible")})),t.addEventListener("click",(function(){o.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active")})),window.addEventListener("click",(function(e){o.contains(e.target)||(o.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active"))})),window.innerWidth>=1e3){const e=document.querySelectorAll(".header__catalog-hidden-item"),t=document.querySelector(".header__catalog-hidden-item_1"),o=document.querySelector(".header__catalog-hidden-item_2"),c=document.querySelector(".header__catalog-hidden-item_3"),r=document.querySelector(".header__catalog-hidden-item_4"),a=document.querySelector(".header__catalog-hidden-item_5"),i=document.querySelector(".header__catalog-hidden-item_6"),s=document.querySelector(".header__catalog-hidden-item_7"),l=document.querySelector(".header__catalog-hidden-item_8"),n=document.querySelector(".header__catalog-hidden-item_9"),d=document.querySelector(".header__catalog-hidden-item_10"),u=document.querySelectorAll(".header__catalog-hidden-items-more"),_=document.querySelector(".header__catalog-hidden-items-more_1"),p=document.querySelector(".header__catalog-hidden-items-more_2"),m=document.querySelector(".header__catalog-hidden-items-more_3"),v=document.querySelector(".header__catalog-hidden-items-more_4"),g=document.querySelector(".header__catalog-hidden-items-more_5"),w=document.querySelector(".header__catalog-hidden-items-more_6"),f=document.querySelector(".header__catalog-hidden-items-more_7"),h=document.querySelector(".header__catalog-hidden-items-more_8"),L=document.querySelector(".header__catalog-hidden-items-more_9"),b=document.querySelector(".header__catalog-hidden-items-more_10"),y=document.querySelector(".header__catalog-hidden-more-result");e.forEach((S=>{S.addEventListener("click",(function(q){S.classList.contains("catalog-item--active")?(S.classList.remove("catalog-item--active"),y.classList.remove("catalog-item--active"),u.forEach((e=>{e.classList.remove("catalog-item--active"),y.classList.remove("catalog-item--active")}))):(e.forEach((e=>{e.classList.remove("catalog-item--active"),u.forEach((e=>{e.classList.remove("catalog-item--active")}))})),S.classList.add("catalog-item--active"),y.classList.add("catalog-item--active"),S===t?_.classList.add("catalog-item--active"):S===o?p.classList.add("catalog-item--active"):S===c?m.classList.add("catalog-item--active"):S===r?v.classList.add("catalog-item--active"):S===a?g.classList.add("catalog-item--active"):S===i?w.classList.add("catalog-item--active"):S===s?f.classList.add("catalog-item--active"):S===l?h.classList.add("catalog-item--active"):S===n?L.classList.add("catalog-item--active"):S===d&&b.classList.add("catalog-item--active"))}))}))}else{const e=document.querySelector(".body"),t=document.querySelector(".header__top_burger-catalog"),o=document.querySelector(".header__top_burger-catalog-trigger"),c=document.querySelectorAll(".header__catalog_burger-hidden-item-title"),r=document.querySelectorAll(".header__catalog_burger-hidden-item-back"),a=document.querySelector(".header_burger-catalog-close"),i=document.querySelectorAll(".header__catalog_burger-hidden-item"),s=document.querySelectorAll(".header__catalog_burger-hidden-item-more");o.addEventListener("click",(function(o){t.classList.add("catalog_burger--active"),e.classList.add("body-noscroll")})),a.addEventListener("click",(function(o){t.classList.remove("catalog_burger--active"),e.classList.remove("body-noscroll"),i.forEach((e=>{e.classList.remove("catalog_burger-more--active")})),s.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))})),c.forEach((e=>{e.addEventListener("click",(function(t){e.parentNode.classList.add("catalog_burger-more--active")})),r.forEach((t=>{t.addEventListener("click",(function(t){e.parentNode.classList.remove("catalog_burger-more--active"),s.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))}))}))}));const l=document.querySelectorAll(".header__catalog_burger-hidden-item-more-title");l.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("catalog_burger-2lvl--active")?e.parentNode.classList.remove("catalog_burger-2lvl--active"):(l.forEach((e=>{e.parentNode.classList.remove("catalog_burger-2lvl--active")})),e.parentNode.classList.add("catalog_burger-2lvl--active"))}))}))}const c=document.querySelectorAll(".header__catalog-hidden-item-more-title");c.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("lvl2--active")?e.parentNode.classList.remove("lvl2--active"):(c.forEach((e=>{e.parentNode.classList.remove("lvl2--active")})),e.parentNode.classList.add("lvl2--active"))}))}));const r=document.querySelectorAll('a[href^="#"]');for(let e of r)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))}if(document.querySelector(".intro")){new Swiper(".intro__swiper",{navigation:{nextEl:".intro__swiper-button-next",prevEl:".intro__swiper-button-prev"},loop:!0,speed:400,slidesPerView:1,slidesToScroll:1})}if(document.querySelector(".latest")){new Swiper(".latest__swiper",{navigation:{nextEl:".latest__swiper-button-next",prevEl:".latest__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".latest__swiper-slide-favorite_blue"),t=document.querySelectorAll(".latest__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("latest__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("latest__swiper-slide-favorite--active")}))}))}if(document.querySelector(".pickup-popup")&&document.querySelectorAll("#contacts__pickup-popup-trigger").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),Fancybox.show([{src:"#pickup-popup",type:"inline",options:{Carousel:{loop:!1},closeButton:!1,class:"dark-fancybox",touch:!1}}])}))})),document.querySelector(".month")){new Swiper(".month__swiper",{navigation:{nextEl:".month__swiper-button-next",prevEl:".month__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".month__swiper-slide-favorite_blue"),t=document.querySelectorAll(".month__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("month__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("month__swiper-slide-favorite--active")}))}))}if(document.querySelector(".product")){if(document.querySelector(".product__review")){new Swiper(".product__review-swiper",{navigation:{nextEl:".product__review-swiper-button-next",prevEl:".product__review-swiper-button-prev"},slidesPerView:1,spaceBetween:10,slidesToScroll:1,loop:!0})}if(window.innerWidth>=834){const e=document.querySelectorAll(".product__card-text-block-favorite_blue"),t=document.querySelectorAll(".product__card-text-block-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("product__card-text-block-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("product__card-text-block-favorite--active")}))}))}else{document.querySelector(".product__card-text-block_cart-favorite_burger").addEventListener("click",(function(){this.classList.toggle("product__card-text-block_cart-favorite_burger--active")}))}document.querySelector(".product__card-text-block_cost-meter");const e=document.querySelector(".product__card-text-block_cost-meter-input"),t=document.querySelector(".product__card-text-block_cost-meter-plus"),o=document.querySelector(".product__card-text-block_cost-meter-minus");let c=document.querySelector(".product__card-text-block_cost-actual-num"),r=document.querySelector(".product__card-text-block_cost-recent"),a=parseInt(e.value),i=parseInt(+/\d+/.exec(c.innerHTML)),s=parseInt(+/\d+/.exec(r.innerHTML));t.addEventListener("click",(l=>{a<8?(a++,e.value=a,o.classList.remove("product__card-text-block_cost-meter_button-disabled"),c.innerHTML=i*a,r.innerHTML=s*a):(a=9,e.value=a,t.classList.add("product__card-text-block_cost-meter_button-disabled"),c.innerHTML=i*a,r.innerHTML=s*a)})),o.addEventListener("click",(l=>{a>2?(--a,e.value=a,t.classList.remove("product__card-text-block_cost-meter_button-disabled"),c.innerHTML=i*a,r.innerHTML=s*a):(a=1,e.value=a,o.classList.add("product__card-text-block_cost-meter_button-disabled"),c.innerHTML=i*a,r.innerHTML=s*a)}))}if(document.querySelector(".sale")){new Swiper(".sale__swiper",{navigation:{nextEl:".sale__swiper-button-next",prevEl:".sale__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".sale__swiper-slide-favorite_blue"),t=document.querySelectorAll(".sale__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("sale__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("sale__swiper-slide-favorite--active")}))}))}