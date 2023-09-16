

ymaps.ready(init);

function init() {
	let map = new ymaps.Map('map', {
		center: [55.83939543931866,37.48318804988491],
		zoom: 10
	});

	let placemark = new ymaps.Placemark([56.12419056863938,36.929417999999984], {
        balloonContentBody: `<div class="balloon-content"> 141554  Россия, Московская область, Солнечногорский городской округ, д.Коньково, д. 99 Павильон №1 </div>`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/placemark.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-19, -44]
	});

    // 
    let placemark2 = new ymaps.Placemark([55.98587106873249,37.06242249999993], {
        balloonContentBody: `<div class="balloon-content"> 141446, Россия, Химки, Ленинградское шоссе, 29-й километр, вл1, Павильон №29-30 и №73-74 </div>`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/placemark.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-19, -44]
	});

    let placemark3 = new ymaps.Placemark([55.935341940143225,37.368024499999954], {
        balloonContentBody: `<div class="balloon-content"> 141446, Россия, Химки, Ленинградское шоссе, 29-й километр, вл1, Павильон №14-15 и №58-59 </div>`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/placemark.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-19, -44]
	});

    let placemark4 = new ymaps.Placemark([55.91683721422573,37.56577840624996], {
        balloonContentBody: `<div class="balloon-content"> 141580, Россия, обл Московская, р-н Солнечногорский, д Жилино, дом 1, строение 1, Павильон №1 </div>`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/placemark.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-19, -44]
	});

    let placemark5 = new ymaps.Placemark([55.86075156885886,37.37243999999997], {
        balloonContentBody: `<div class="balloon-content"> 125310, Россия, г Москва, ул Муравская, дом 42, строение 1 </div>`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/placemark.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

	map.geoObjects.add(placemark).add(placemark2).add(placemark3).add(placemark4).add(placemark5);
}

