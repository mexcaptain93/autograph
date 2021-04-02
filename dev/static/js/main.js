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

    $('.qna__item_opened .qna__answer').css({'display':'block'});

    $('.qna__toggler').on('click', function (e) {
        e.preventDefault();
        let parent = $(this).parents('.qna__item');
        let answer = parent.find('.qna__answer');
        answer.slideToggle();
        parent.toggleClass('qna__item_opened');


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

    $('.js-slider-persons-row').slick({
        arrows: false,
        slidesToShow: 4,

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