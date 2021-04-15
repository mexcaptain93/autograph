catMenuOptions = {}

$(document).ready(function () {
    svg4everybody({});
    categoriesMenuList();
    toggleQnA();
    popups();
    sliders();
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

    $('.header__categories').on('click', function (e) {
        if (e.target === this) {
            e.preventDefault();
            $('.js-header-categories').toggleClass('hide')
        }
    });


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

function toggleQnA() {

    $('.qna__question').on('click', function (e) {
        e.preventDefault();
        $(this).next('.qna__answer').slideToggle();
        $(this).parents('.qna__item').toggleClass('qna__item_opened');
    });
}

function popups() {
    $('.popup__overlay, .popup__close').on('click', function (e) {
        if (e.target === this) {
            e.preventDefault();
            $('.popup').hide();
        }
    });

    $('.js-popup-partnership-open').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-partnership').css({'display':'flex'});
    });

    $('.js-mobile-menu-open').on('click', function (e) {
        e.preventDefault();
       $('.js-mobile-menu').slideDown();
    });


    $('.js-mobile-menu-close').on('click', function (e) {
        e.preventDefault();
        $('.js-mobile-menu').slideUp();
    });
}

function sliders() {

    if ($('.js-slider-popular').length) {
        $('.js-slider-popular').slick({
            arrows: false,
            slidesToShow: 5,

            responsive: [
                {
                    breakpoint: 1532,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        variableWidth: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }
                }
            ]

        });
    }


    if ($('.js-person-gallery').length) {
        $('.js-person-gallery').slick({
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            variableWidth: true,
            mobileFirst: true,
        });
    }
}