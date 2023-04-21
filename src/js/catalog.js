if (document.querySelector('.catalog')) {
    
    // show/sort filters opening

    document.querySelectorAll('.catalog__filters-dropdown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.catalog__filters-dropdown-button');
        const dropDownList = dropDownWrapper.querySelector('.catalog__filters-dropdown-list');
        const dropDownListItems = dropDownList.querySelectorAll('.catalog__filters-dropdown-list-item');
        const dropDownInput = dropDownWrapper.querySelector('.catalog__filters-dropdown-input-hidden');
    
    
        dropDownBtn.addEventListener('click', function (e) {
            e.preventDefault(); 
            dropDownList.classList.toggle('catalog__filters-dropdown-list--visible');
        });
    
        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.innerText = this.innerText;
                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('catalog__filters-dropdown-list--visible');
            });
        });
    
        document.addEventListener('click', function (e) {
            if (!dropDownBtn.contains(e.target)) {
                dropDownList.classList.remove('catalog__filters-dropdown-list--visible');
            }
        });
    
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownList.classList.remove('catalog__filters-dropdown-list--visible');
            }
        });
    });

    // sidebar filters 

    document.querySelectorAll('.catalog__side-select').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.catalog__side-select-dropdown-button');
        const dropDownList = dropDownWrapper.querySelector('.catalog__side-select-dropdown-list');
        const dropDownListItems = dropDownList.querySelectorAll('.catalog__side-select-dropdown-list-item');
        const dropDownInput = dropDownWrapper.querySelector('.catalog__side-select-dropdown-input-hidden');
    
    
        dropDownBtn.addEventListener('click', function (e) {
            e.preventDefault(); 
            dropDownList.classList.toggle('catalog__side-select-dropdown-list--visible');
            this.classList.add('catalog__side-select-dropdown-button--active');
        });
    
        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.innerText = this.innerText;
                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('catalog__side-select-dropdown-list--visible');
                dropDownBtn.classList.remove('catalog__side-select-dropdown-button--active');
            });
        });
    
        document.addEventListener('click', function (e) {
            if (!dropDownBtn.contains(e.target)) {
                dropDownBtn.classList.remove('catalog__side-select-dropdown-button--active');
                dropDownList.classList.remove('catalog__side-select-dropdown-list--visible');
            }
        });
    
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownBtn.classList.remove('catalog__side-select-dropdown-button--active');
                dropDownList.classList.remove('catalog__side-select-dropdown-list--visible');
            }
        });
    });

    // sidebar filters burger

    if (window.innerWidth <= 1000) {
        const sideBarOpening = document.querySelector('.catalog__side-burger-open');
        const catalogWrapper = document.querySelector('.catalog__wrapper');
        const sidebar = document.querySelector('.catalog__side');

        sideBarOpening.addEventListener('click', function () {
            catalogWrapper.classList.toggle('sidebar--active');    
        });

        document.addEventListener('click', function (e) {
            if (!sidebar.contains(e.target) && !sideBarOpening.contains(e.target)){
                catalogWrapper.classList.remove('sidebar--active');
            };
        });
    };

}