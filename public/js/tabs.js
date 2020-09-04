let tab = function (tabItems, tabText) {
    let tabNav = document.querySelectorAll(tabItems),
        tabContent = document.querySelectorAll(tabText),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav(e) {
        e.preventDefault()
        tabNav.forEach(item => {
            item.classList.remove('tabs-active');
            console.log('item remove')
        });
        this.classList.add('tabs-active');
        tabName = this.getAttribute('data-index');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active__tabs') : item.classList.remove('active__tabs');
        })
    }

};


tab('.features__tabs_big .tabs__link', '.features__tabs_big .content-tab');
tab('.tabs__small .tabs__link', '.tabs__small .content-tab');