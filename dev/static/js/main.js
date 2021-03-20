$(document).ready(function () {
    categoriesMenuList()
});

$(window).on('resize', function(){
    checkCatsMenuCols();
});

function checkCatsMenuCols() {
    if ($(window).width() >= 1280) {
        catMenuOptions.n_coll = 4;
    } else if ($(window).width() >=768) {
        catMenuOptions.n_coll = 2;
    } else {
        catMenuOptions.n_coll = 1;
    }
    if ($('.coll_s').length) {
        removeColl($('.js-categories-menu'));
    }
    $('.js-categories-menu').liColl(catMenuOptions);
}

function categoriesMenuList() {

    if ($('.js-categories-menu-close').length) {
        $('.js-categories-menu-close').on('click', function(e) {
            e.preventDefault()
            $('.js-header-categories').toggleClass('hide')
        })
    }
    if ($('.js-categories-menu-open').length) {
        $('.js-categories-menu-open').on('click', function(e) {
            e.preventDefault()
            $('.js-header-categories').toggleClass('hide')
        })
    }

    catMenuOptions = {
        c_unit: 'px', // '%' или 'px' При указании '%' — ширина 'c_width' игнорируется
        c_width: 250, //Ширина колонок в 'px'
        p_left: 0   //отступ слева %    
    }
    checkCatsMenuCols()
    $('.js-categories-menu').liColl(catMenuOptions);
}

