"use strict";if(document.querySelector(".benefits")){new Swiper(".benefits__swiper",{slidesPerView:4,slidesToscroll:1,speed:600,loop:!1,pagination:{el:".benefits__swiper-pagination",type:"bullets",clickable:!0},breakpoints:{300:{slidesPerView:1},580:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2.2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20},1130:{spaceBetween:15},1168:{slidesPerView:4,spaceBetween:30}}})}if(document.querySelector(".catalog")){if(document.querySelectorAll(".catalog__filters-dropdown").forEach((function(e){const t=e.querySelector(".catalog__filters-dropdown-button"),o=e.querySelector(".catalog__filters-dropdown-list"),a=o.querySelectorAll(".catalog__filters-dropdown-list-item"),c=e.querySelector(".catalog__filters-dropdown-input-hidden");t.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("catalog__filters-dropdown-list--visible")})),a.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.innerText=this.innerText,t.focus(),c.value=this.dataset.value,o.classList.remove("catalog__filters-dropdown-list--visible")}))})),document.addEventListener("click",(function(e){t.contains(e.target)||o.classList.remove("catalog__filters-dropdown-list--visible")})),document.addEventListener("keydown",(function(e){"Tab"!==e.key&&"Escape"!==e.key||o.classList.remove("catalog__filters-dropdown-list--visible")}))})),document.querySelectorAll(".catalog__side-select").forEach((function(e){const t=e.querySelector(".catalog__side-select-dropdown-button"),o=e.querySelector(".catalog__side-select-dropdown-list"),a=o.querySelectorAll(".catalog__side-select-dropdown-list-item"),c=e.querySelector(".catalog__side-select-dropdown-input-hidden");t.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("catalog__side-select-dropdown-list--visible"),this.classList.add("catalog__side-select-dropdown-button--active")})),a.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.innerText=this.innerText,t.focus(),c.value=this.dataset.value,o.classList.remove("catalog__side-select-dropdown-list--visible"),t.classList.remove("catalog__side-select-dropdown-button--active")}))})),document.addEventListener("click",(function(e){t.contains(e.target)||(t.classList.remove("catalog__side-select-dropdown-button--active"),o.classList.remove("catalog__side-select-dropdown-list--visible"))})),document.addEventListener("keydown",(function(e){"Tab"!==e.key&&"Escape"!==e.key||(t.classList.remove("catalog__side-select-dropdown-button--active"),o.classList.remove("catalog__side-select-dropdown-list--visible"))}))})),window.innerWidth<=1e3){const e=document.querySelector(".catalog__side-burger-open"),t=document.querySelector(".catalog__wrapper"),o=document.querySelector(".catalog__side"),a=document.querySelector(".body");e.addEventListener("click",(function(){t.classList.toggle("sidebar--active"),a.classList.add("body-noscroll")})),document.addEventListener("click",(function(c){o.contains(c.target)||e.contains(c.target)||(t.classList.remove("sidebar--active"),a.classList.remove("body-noscroll"))}))}const e=document.querySelectorAll(".catalog__card-favorite_blue"),t=document.querySelectorAll(".catalog__card-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("catalog__card-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("catalog__card-favorite--active")}))}))}if(document.querySelector(".footer")&&window.innerWidth<=1003){const e=document.querySelectorAll(".footer__block-2-list-trigger");e.forEach((t=>{t.addEventListener("click",(function(){t.parentNode.classList.contains("footer__accordeon--active")?t.parentNode.classList.remove("footer__accordeon--active"):(e.forEach((e=>{e.parentNode.classList.remove("footer__accordeon--active")})),t.parentNode.classList.add("footer__accordeon--active"))}))}))}if("none"!==document.querySelector(".header__top").style.display){new Swiper(".header__categories-swiper",{navigation:{nextEl:".header__categories-swiper-button-next"},loop:!0,speed:400,spaceBetween:23,slidesPerView:8,slidesToScroll:1})}if(document.querySelector(".header__catalog")){const e=document.querySelector(".header__catalog-trigger"),t=document.querySelector(".header__catalog-hidden-list-title"),o=document.querySelector(".header__catalog");if(e.addEventListener("click",(function(){o.classList.add("header__catalog--visible")})),t.addEventListener("click",(function(){o.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active")})),window.addEventListener("click",(function(e){o.contains(e.target)||(o.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active"))})),window.innerWidth>=1e3){const e=document.querySelectorAll(".header__catalog-hidden-item"),t=document.querySelector(".header__catalog-hidden-item_1"),o=document.querySelector(".header__catalog-hidden-item_2"),a=document.querySelector(".header__catalog-hidden-item_3"),c=document.querySelector(".header__catalog-hidden-item_4"),i=document.querySelector(".header__catalog-hidden-item_5"),r=document.querySelector(".header__catalog-hidden-item_6"),l=document.querySelector(".header__catalog-hidden-item_7"),s=document.querySelector(".header__catalog-hidden-item_8"),d=document.querySelector(".header__catalog-hidden-item_9"),n=document.querySelector(".header__catalog-hidden-item_10"),_=document.querySelectorAll(".header__catalog-hidden-items-more"),u=document.querySelector(".header__catalog-hidden-items-more_1"),m=document.querySelector(".header__catalog-hidden-items-more_2"),v=document.querySelector(".header__catalog-hidden-items-more_3"),g=document.querySelector(".header__catalog-hidden-items-more_4"),h=document.querySelector(".header__catalog-hidden-items-more_5"),p=document.querySelector(".header__catalog-hidden-items-more_6"),f=document.querySelector(".header__catalog-hidden-items-more_7"),w=document.querySelector(".header__catalog-hidden-items-more_8"),L=document.querySelector(".header__catalog-hidden-items-more_9"),y=document.querySelector(".header__catalog-hidden-items-more_10"),S=document.querySelector(".header__catalog-hidden-more-result");e.forEach((q=>{q.addEventListener("click",(function(b){q.classList.contains("catalog-item--active")?(q.classList.remove("catalog-item--active"),S.classList.remove("catalog-item--active"),_.forEach((e=>{e.classList.remove("catalog-item--active"),S.classList.remove("catalog-item--active")}))):(e.forEach((e=>{e.classList.remove("catalog-item--active"),_.forEach((e=>{e.classList.remove("catalog-item--active")}))})),q.classList.add("catalog-item--active"),S.classList.add("catalog-item--active"),q===t?u.classList.add("catalog-item--active"):q===o?m.classList.add("catalog-item--active"):q===a?v.classList.add("catalog-item--active"):q===c?g.classList.add("catalog-item--active"):q===i?h.classList.add("catalog-item--active"):q===r?p.classList.add("catalog-item--active"):q===l?f.classList.add("catalog-item--active"):q===s?w.classList.add("catalog-item--active"):q===d?L.classList.add("catalog-item--active"):q===n&&y.classList.add("catalog-item--active"))}))}))}else{const e=document.querySelector(".body"),t=document.querySelector(".header__top_burger-catalog"),o=document.querySelector(".header__top_burger-catalog-trigger"),a=document.querySelectorAll(".header__catalog_burger-hidden-item-title"),c=document.querySelectorAll(".header__catalog_burger-hidden-item-back"),i=document.querySelector(".header_burger-catalog-close"),r=document.querySelectorAll(".header__catalog_burger-hidden-item"),l=document.querySelectorAll(".header__catalog_burger-hidden-item-more");o.addEventListener("click",(function(o){t.classList.add("catalog_burger--active"),e.classList.add("body-noscroll")})),i.addEventListener("click",(function(o){t.classList.remove("catalog_burger--active"),e.classList.remove("body-noscroll"),r.forEach((e=>{e.classList.remove("catalog_burger-more--active")})),l.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))})),a.forEach((e=>{e.addEventListener("click",(function(t){e.parentNode.classList.add("catalog_burger-more--active")})),c.forEach((t=>{t.addEventListener("click",(function(t){e.parentNode.classList.remove("catalog_burger-more--active"),l.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))}))}))}));const s=document.querySelectorAll(".header__catalog_burger-hidden-item-more-title");s.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("catalog_burger-2lvl--active")?e.parentNode.classList.remove("catalog_burger-2lvl--active"):(s.forEach((e=>{e.parentNode.classList.remove("catalog_burger-2lvl--active")})),e.parentNode.classList.add("catalog_burger-2lvl--active"))}))}))}const a=document.querySelectorAll(".header__catalog-hidden-item-more-title");a.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("lvl2--active")?e.parentNode.classList.remove("lvl2--active"):(a.forEach((e=>{e.parentNode.classList.remove("lvl2--active")})),e.parentNode.classList.add("lvl2--active"))}))}))}if(document.querySelector(".intro")){new Swiper(".intro__swiper",{navigation:{nextEl:".intro__swiper-button-next",prevEl:".intro__swiper-button-prev"},loop:!0,speed:400,slidesPerView:1,slidesToScroll:1})}if(document.querySelector(".latest")){new Swiper(".latest__swiper",{navigation:{nextEl:".latest__swiper-button-next",prevEl:".latest__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".latest__swiper-slide-favorite_blue"),t=document.querySelectorAll(".latest__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("latest__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("latest__swiper-slide-favorite--active")}))}))}if(document.querySelector(".month")){new Swiper(".month__swiper",{navigation:{nextEl:".month__swiper-button-next",prevEl:".month__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".month__swiper-slide-favorite_blue"),t=document.querySelectorAll(".month__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("month__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("month__swiper-slide-favorite--active")}))}))}if(document.querySelector(".sale")){new Swiper(".sale__swiper",{navigation:{nextEl:".sale__swiper-button-next",prevEl:".sale__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}});const e=document.querySelectorAll(".sale__swiper-slide-favorite_blue"),t=document.querySelectorAll(".sale__swiper-slide-favorite_red");e.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.add("sale__swiper-slide-favorite--active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("sale__swiper-slide-favorite--active")}))}))}