"use strict";if(document.querySelector(".benefits")){new Swiper(".benefits__swiper",{slidesPerView:4,slidesToscroll:1,speed:600,loop:!1,pagination:{el:".benefits__swiper-pagination",type:"bullets",clickable:!0},breakpoints:{300:{slidesPerView:1},580:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2.2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20},1130:{spaceBetween:15},1168:{slidesPerView:4,spaceBetween:30}}})}if(document.querySelector(".footer")&&window.innerWidth<=1003){const e=document.querySelectorAll(".footer__block-2-list-trigger");e.forEach((t=>{t.addEventListener("click",(function(){t.parentNode.classList.contains("footer__accordeon--active")?t.parentNode.classList.remove("footer__accordeon--active"):(e.forEach((e=>{e.parentNode.classList.remove("footer__accordeon--active")})),t.parentNode.classList.add("footer__accordeon--active"))}))}))}if("none"!==document.querySelector(".header__top").style.display){new Swiper(".header__categories-swiper",{navigation:{nextEl:".header__categories-swiper-button-next"},loop:!0,speed:400,spaceBetween:23,slidesPerView:8,slidesToScroll:1})}if(document.querySelector(".header__catalog")){const e=document.querySelector(".header__catalog-trigger"),t=document.querySelector(".header__catalog-hidden-list-title"),a=document.querySelector(".header__catalog");if(e.addEventListener("click",(function(){a.classList.add("header__catalog--visible")})),t.addEventListener("click",(function(){a.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active")})),window.addEventListener("click",(function(e){a.contains(e.target)||(a.classList.remove("header__catalog--visible"),document.querySelectorAll(".header__catalog-hidden-item").forEach((e=>{e.classList.remove("catalog-item--active"),document.querySelectorAll(".header__catalog-hidden-items-more").forEach((e=>{e.classList.remove("catalog-item--active")}))})),document.querySelector(".header__catalog-hidden-more-result").classList.remove("catalog-item--active"))})),window.innerWidth>=1e3){const e=document.querySelectorAll(".header__catalog-hidden-item"),t=document.querySelector(".header__catalog-hidden-item_1"),a=document.querySelector(".header__catalog-hidden-item_2"),o=document.querySelector(".header__catalog-hidden-item_3"),r=document.querySelector(".header__catalog-hidden-item_4"),c=document.querySelector(".header__catalog-hidden-item_5"),i=document.querySelector(".header__catalog-hidden-item_6"),l=document.querySelector(".header__catalog-hidden-item_7"),s=document.querySelector(".header__catalog-hidden-item_8"),d=document.querySelector(".header__catalog-hidden-item_9"),n=document.querySelector(".header__catalog-hidden-item_10"),_=document.querySelectorAll(".header__catalog-hidden-items-more"),m=document.querySelector(".header__catalog-hidden-items-more_1"),u=document.querySelector(".header__catalog-hidden-items-more_2"),g=document.querySelector(".header__catalog-hidden-items-more_3"),h=document.querySelector(".header__catalog-hidden-items-more_4"),v=document.querySelector(".header__catalog-hidden-items-more_5"),p=document.querySelector(".header__catalog-hidden-items-more_6"),w=document.querySelector(".header__catalog-hidden-items-more_7"),S=document.querySelector(".header__catalog-hidden-items-more_8"),L=document.querySelector(".header__catalog-hidden-items-more_9"),y=document.querySelector(".header__catalog-hidden-items-more_10"),f=document.querySelector(".header__catalog-hidden-more-result");e.forEach((q=>{q.addEventListener("click",(function(b){q.classList.contains("catalog-item--active")?(q.classList.remove("catalog-item--active"),f.classList.remove("catalog-item--active"),_.forEach((e=>{e.classList.remove("catalog-item--active"),f.classList.remove("catalog-item--active")}))):(e.forEach((e=>{e.classList.remove("catalog-item--active"),_.forEach((e=>{e.classList.remove("catalog-item--active")}))})),q.classList.add("catalog-item--active"),f.classList.add("catalog-item--active"),q===t?m.classList.add("catalog-item--active"):q===a?u.classList.add("catalog-item--active"):q===o?g.classList.add("catalog-item--active"):q===r?h.classList.add("catalog-item--active"):q===c?v.classList.add("catalog-item--active"):q===i?p.classList.add("catalog-item--active"):q===l?w.classList.add("catalog-item--active"):q===s?S.classList.add("catalog-item--active"):q===d?L.classList.add("catalog-item--active"):q===n&&y.classList.add("catalog-item--active"))}))}))}else{const e=document.querySelector(".body"),t=document.querySelector(".header__top_burger-catalog"),a=document.querySelector(".header__top_burger-catalog-trigger"),o=document.querySelectorAll(".header__catalog_burger-hidden-item-title"),r=document.querySelectorAll(".header__catalog_burger-hidden-item-back"),c=document.querySelector(".header_burger-catalog-close"),i=document.querySelectorAll(".header__catalog_burger-hidden-item"),l=document.querySelectorAll(".header__catalog_burger-hidden-item-more");a.addEventListener("click",(function(a){t.classList.add("catalog_burger--active"),e.classList.add("body-noscroll")})),c.addEventListener("click",(function(a){t.classList.remove("catalog_burger--active"),e.classList.remove("body-noscroll"),i.forEach((e=>{e.classList.remove("catalog_burger-more--active")})),l.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))})),o.forEach((e=>{e.addEventListener("click",(function(t){e.parentNode.classList.add("catalog_burger-more--active")})),r.forEach((t=>{t.addEventListener("click",(function(t){e.parentNode.classList.remove("catalog_burger-more--active"),l.forEach((e=>{e.classList.remove("catalog_burger-2lvl--active")}))}))}))}));const s=document.querySelectorAll(".header__catalog_burger-hidden-item-more-title");s.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("catalog_burger-2lvl--active")?e.parentNode.classList.remove("catalog_burger-2lvl--active"):(s.forEach((e=>{e.parentNode.classList.remove("catalog_burger-2lvl--active")})),e.parentNode.classList.add("catalog_burger-2lvl--active"))}))}))}const o=document.querySelectorAll(".header__catalog-hidden-item-more-title");o.forEach((e=>{e.addEventListener("click",(function(){e.parentNode.classList.contains("lvl2--active")?e.parentNode.classList.remove("lvl2--active"):(o.forEach((e=>{e.parentNode.classList.remove("lvl2--active")})),e.parentNode.classList.add("lvl2--active"))}))}))}if(document.querySelector(".intro")){new Swiper(".intro__swiper",{navigation:{nextEl:".intro__swiper-button-next",prevEl:".intro__swiper-button-prev"},loop:!0,speed:400,slidesPerView:1,slidesToScroll:1})}if(document.querySelector(".latest")){new Swiper(".latest__swiper",{navigation:{nextEl:".latest__swiper-button-next",prevEl:".latest__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}})}if(document.querySelector(".month")){new Swiper(".month__swiper",{navigation:{nextEl:".month__swiper-button-next",prevEl:".month__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}})}if(document.querySelector(".sale")){new Swiper(".sale__swiper",{navigation:{nextEl:".sale__swiper-button-next",prevEl:".sale__swiper-button-prev"},loop:!0,speed:500,slidesPerView:4,slidesToScroll:1,spaceBetween:30,breakpoints:{300:{loop:!1,slidesPerView:2,spaceBetween:15,grid:{fill:"row",rows:2}},1e3:{slidesPerView:4}}})}