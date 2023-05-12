if (document.querySelector('.pickup-popup')) {
    document.querySelectorAll('#contacts__pickup-popup-trigger').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            Fancybox.show([
                {
                    src: '#pickup-popup',
                    type: 'inline',
                    options: {
                        Carousel: {
                            loop: false,
                        },
                        closeButton: false,
                        class: 'dark-fancybox',
                        touch: false,
                    },
                },
            ]);
        });
    });
}