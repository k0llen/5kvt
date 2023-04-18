if (document.querySelector('.footer')) {
    if (window.innerWidth <= 1003) {
        const accordeonTrigger = document.querySelectorAll('.footer__block-2-list-trigger');
        
        accordeonTrigger.forEach((item) => {
            item.addEventListener('click', function () {
                if (item.parentNode.classList.contains('footer__accordeon--active')) {
                    item.parentNode.classList.remove('footer__accordeon--active');
                } else {
                    accordeonTrigger.forEach((child) => {
                        child.parentNode.classList.remove('footer__accordeon--active');
                    })
                    item.parentNode.classList.add('footer__accordeon--active');
                };
            });
        })
    
    }
}
