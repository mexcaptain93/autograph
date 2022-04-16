catMenuOptions = {}

$(document).ready(function () {
    svg4everybody({});
    categoriesMenuList();
    toggleQnA();
    popups();
    sliders();
    toggleVacancies();
    playVideoOnClick();
    toTop();
    indexSurvey();
    // stickyFooter();
    faqMobileMenu();
    selects();
    toggleMobileSearch()
    notification()
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
        $(this).next('.qna__answer').slideToggle(300, function() {
            $(this).parents('.qna__item').toggleClass('qna__item_opened');
        });
    });
}
function toggleVacancies() {
    $('.vacancy__name').on('click', function (e) {
        e.preventDefault();
        $(this).next('.vacancy__descr').slideToggle(300, function() {
            $(this).parents('.vacancy').toggleClass('vacancy_opened');
        });
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

    $('.js-popup-add-review-opener').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-add-review').css({'display':'flex'});
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

function playVideoOnClick() {
    let block = $('.js-person-video');

    if (block.length == 0) {
        return false
    }
    block.on('click', function(e) {
        e.preventDefault();
        let video = block.find('iframe');
        video.attr('src', video.attr('src') + '?autoplay=1');
        block.removeClass('person-page__video-wrap_stopped');
    })
}

function toTop() {
    let totop = $('.js-totop');

    totop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0},500);
    })

    let toggleTotop;
    (toggleTotop = function toggleTotop() {
        if ($(window).scrollTop() > 20) {
            totop.addClass('totop_visible');
        } else {
            totop.removeClass('totop_visible');
        }
    })();

    $(window).on('scroll', function (e) {
        toggleTotop();
    });
}
function changeNames() {
    surveyLast = $('.js-survey-last');
    surveyName = $('.js-survey-name span');

    if (typeof persons !== 'undefined' & surveyLast.length) {
        surveyLast.css({'opacity':'0'});
        person = persons.shift();
        persons.push(surveyName.html());

        setTimeout(() => {
            surveyName.html(person);
            surveyLast.css({'opacity':'1'});
        }, 1000);
    }
}

function indexSurvey() {
    setInterval(changeNames, 5000);
}


function stickyFooter() {
    let lastScrollTop = 0;
    let footer = $('.js-footer');

    if ($(window).width() < 768) {
        return false;
    }

    $(window).scroll(function(event) {

        function footerScroll()
        {
            var scroll = $(window).scrollTop();
            var bottom = scroll + $(window).height() >= $(document).height();

            if (scroll < lastScrollTop || bottom) {
                footer.fadeIn(500)
            }

            if(scroll>250) {
                if (scroll > lastScrollTop && !bottom) {
                    footer.fadeOut(500);
                }
            }
            else
            {
                footer.fadeIn(500);
            }

            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                if (footer.is(':hover')) {
                    footerScroll();
                }
                else
                {
                    // footer.fadeOut(500);
                }
            }, 2000));
        }
        footerScroll();
        lastScrollTop = $(window).scrollTop();

    });

}

function faqMobileMenu() {
    if ($('.js-faq-menu').length) {
        $('.js-faq-menu-current').on('click', function (e) {
            e.preventDefault();
            $('.js-faq-menu').toggleClass('opened');
            $('.js-faq-menu-list').slideToggle();
        })
    }
}

function selects() {
    if ($('.js-select-support').length) {
        $('.js-select-support').select2({
            placeholder: 'Выберите тему обращения',
            width: '100%',
            minimumResultsForSearch: Infinity
        });
    }

}

function toggleMobileSearch() {
    if ($(window).width() >=768) {
        return false
    }
    const search = $('.js-mobile-search')

    let didScroll
    let lastScrollTop = 0
    let delta = 50

    $(window).scroll(function(e){
        didScroll = true
    })

    setInterval(function() {
        if (didScroll) {
            hasScrolled()
            didScroll = false
        }
    }, 250)

    function hasScrolled() {
        let st = $(this).scrollTop()

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop){
            // Scroll Down
            search.slideUp()
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                search.slideDown()
            }
        }

        lastScrollTop = st
    }
}

function notification() {
    let notification = $('.js-notification'),
        sender = $('.js-send'),
        closer = $('.js-notification-close'),
        headingElement = $('.js-notification-heading'),
        textElement = $('.js-notification-text'),
        heading = 'Заявка отправлена',
        text = '<b>Ваша заявка</b> на развещение проекта отправлена, мы с вами свяжемся.'

    let notificationTimer


    sender.on('click', (e) => {
        e.preventDefault()

        headingElement.html(heading)
        textElement.html(text)

        notification.slideDown()

        notificationTimer= setTimeout(() => {
            notification.slideUp()
        }, 3000)

    })



    closer.on('click', (e) => {
        e.preventDefault()
        notification.slideUp()
        clearTimeout(notificationTimer)

    })
}