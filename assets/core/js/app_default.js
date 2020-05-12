$(document).ready(function () {
    (function () {
        if (
            '-ms-user-select' in document.documentElement.style &&
            navigator.userAgent.match(/IEMobile/)
        ) {
            var msViewportStyle = document.createElement('style');
            msViewportStyle.appendChild(
                document.createTextNode('@-ms-viewport{width:auto!important}')
            );
            document
                .getElementsByTagName('head')[0]
                .appendChild(msViewportStyle);
        }
    })();

    /*-------------------------------------------------*/
    // AUTO-REDIRECT
    var redirectElem = document.getElementById('auto-redirect');

    if (redirectElem) {
        var redirectUrl = redirectElem.dataset.url;
        if (redirectUrl && redirectUrl.length) {
            if (redirectElem.dataset.externalonly) {
                if (/^(http|https):\/\//.test(redirectUrl)) {
                    window.location.href = redirectUrl;
                } else {
                    window.location.href = `//${redirectUrl}`;
                }
            } else {
                window.location.href = redirectUrl;
            }
        }
    }

    /*-------------------------------------------------*/
    // OICR Parent Nav
    function OICRParentNav() {
        var NAV_BOTTOM = 24;
        var NAV_TOP = 28;
        var BOTTOM_OFFSET = 20;
        var $element;
        var $button;
        var isOpen = false;
        var initialized = false;
        function onClick(e) {
            return e;
        }
        return {
            init: function (opt) {
                var baseURL = window.APP_CONFIG.OICR_PARENT_NAV_URL;
                var iframe = `<ifr${''}ame id=\"oicr-parent-nav\" style=\"transition: bottom .2s; position: absolute; z-index: 900; bottom: calc(100% - ${
                    BOTTOM_OFFSET + NAV_BOTTOM
                }px); \" src=\"${baseURL}\" name=\"\" frameBorder=\"0\" scrolling=\"no\" width=\"100%\"></ifr${''}ame>`;
                var $element = $(iframe);
                document.body.prepend($element.get(0));
                // Listen post message from iframe.
                $(window).on('message onmessage', function (e) {
                    if (e.originalEvent && e.originalEvent.data) {
                        try {
                            const data = JSON.parse(e.originalEvent.data);
                            if (data.type === 'oicr-global-nav-click') {
                                if (data.open) {
                                    $element.css({
                                        bottom: `calc(100% - ${
                                            BOTTOM_OFFSET + NAV_BOTTOM + NAV_TOP
                                        }px)`,
                                    });
                                } else {
                                    $element.css({
                                        bottom: `calc(100% - ${
                                            BOTTOM_OFFSET + NAV_BOTTOM
                                        }px)`,
                                    });
                                }
                                isOpen = data.open;
                                opt.onClick(e);
                            }
                        } catch (e) {}
                    }
                });
                initialized = true;
            },
            getElementHeight: function () {
                if (!initialized) return 0;
                return isOpen ? NAV_TOP + NAV_BOTTOM : NAV_BOTTOM;
            },
            getElement: function () {
                return $element;
            },
            getButton: function () {
                return $button;
            },
        };
    }
    var oicrParentNav = OICRParentNav();

    /*-------------------------------------------------*/
    // BANNER
    function setCookie(cname, cvalue) {
        document.cookie = `${cname}=${cvalue};path=/`;
    }

    function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    function getClosedBannerListCookie() {
        var bannerCookie = getCookie('closedBanner');

        if (bannerCookie && bannerCookie.length) {
            return JSON.parse(bannerCookie.trim());
        }

        return null;
    }

    function setClosedBannerListCookie(messages) {
        setCookie(
            'closedBanner',
            messages && messages.length ? JSON.stringify(messages) : ''
        );
    }

    function setMainMarginTopBottom() {
        var bannerTopMargin = $('#banner-top-container')
            ? $('#banner-top-container').outerHeight()
            : 0;
        var bannerBottomMargin = $('#banner-bottom-container')
            ? $('#banner-bottom-container').outerHeight()
            : 0;

        var oicrParentNavHeight = oicrParentNav.getElementHeight();

        $('#main-website-area').css(
            'margin-top',
            `${bannerTopMargin + oicrParentNavHeight}px`
        );
        $('#main-website-area').css('margin-bottom', `${bannerBottomMargin}px`);
        $('#navigation').css(
            'top',
            `${bannerTopMargin + oicrParentNavHeight}px`
        );
        $('#banner-top-container').css('top', `${oicrParentNavHeight}px`);
    }

    function getBannerTopHeight() {
        return $('#banner-top-container')
            ? $('#banner-top-container').outerHeight()
            : 0;
    }

    function stickyBannerBar() {
        if ($(document).scrollTop() > 0) {
            $('#banner-top-container').css({ top: '0px', 'z-index': 1000 });
        } else {
            $('#banner-top-container').css({
                top: `${oicrParentNav.getElementHeight()}px`,
                'z-index': 100,
            });
        }
    }

    $(document).ready(function () {
        var closedBanner = getClosedBannerListCookie();

        if ($('.banner.banner-dismissible')) {
            $('.banner.banner-dismissible').each(function () {
                if (
                    closedBanner &&
                    closedBanner.length &&
                    closedBanner.includes($(this).attr('id'))
                ) {
                    $(this).remove();
                } else {
                    $(this).removeClass('banner-hidden');
                }
            });
        }

        if ($('#banner-top-container')) {
            $('#banner-top-container').css('position', 'fixed');
        }
        if ($('#banner-bottom-container')) {
            $('#banner-bottom-container').css('position', 'fixed');
        }

        setMainMarginTopBottom();

        $('.banner-dismiss').click(function () {
            var target = $(this).data('target');

            var bannerCookie = getClosedBannerListCookie() || [];
            setClosedBannerListCookie(bannerCookie.concat([target]));
            $(`#${target}`).remove();
            setMainMarginTopBottom();

            $(document).trigger('bannerDismiss');

            // var checkbox = $(`#${target} .dismiss-check`);
            // if (checkbox) $(checkbox).addClass('checked');
            // $(`#${target}`)
            //     .addClass('dismissing')
            //     .animate(
            //         {
            //             opacity: 0,
            //             height: '0',
            //             paddingTop: '0',
            //             paddingBottom: '0',
            //         },
            //         1000,
            //         function() {
            //             var bannerCookie = getClosedBannerListCookie() || [];
            //             setClosedBannerListCookie(
            //                 bannerCookie.concat([target])
            //             );
            //             $(`#${target}`).remove();
            //             setMainMarginTopBottom();
            //         }
            //     );
        });
    });

    /*-------------------------------------------------*/
    // BACK TO TOP

    function backToTop() {
        // Display "Back to top" button if page height is longer than
        // 700px or twice the browser height
        if ($(document).height() > $(window).height() * 2) {
            if ($(this).scrollTop() > Math.min(700, $(window).height())) {
                $('#backToTop').fadeIn();
                $('#backToTop').css('display', 'flex');
                if ($('#banner-bottom-container'))
                    $('#backToTop').css(
                        'bottom',
                        `${$('#banner-bottom-container').outerHeight() + 15}px`
                    );
            } else {
                $('#backToTop').fadeOut();
            }
        }
    }

    backToTop();

    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*-------------------------------------------------*/
    // Navbar Functions

    var $window = $(window);
    var $menuAnchor = $('#nav-main-menu .dropdown-toggle');

    function stickyNavSetting() {
        $('#navigation').addClass('sticky');
        $('#navigation').css('top', `${getBannerTopHeight()}px`);
        $('#main-website-area').css(
            'padding-top',
            `${$('#navigation').outerHeight()}px`
        );
        $(document).trigger('stickyNav');
    }

    function unStickyNavSetting() {
        $('#navigation').removeClass('sticky');
        $('#main-website-area').css('padding-top', '0');
        $(document).trigger('unstickyNav');
    }

    function canBeStickyHeight() {
        return (
            $(document).height() - $(window).height() >
            $('#navigation').innerHeight()
        );
    }

    function stickyNavBar(forceRecalculate) {
        var windowWidth = $window.width();
        var alwaysSticky = window.STICKY_BY_DEFAULT_BELOW || 768;
        var sctop = window.STICKY_SCROLL_TOP || 0;

        if (windowWidth < alwaysSticky || $(document).scrollTop() > sctop) {
            $('#navigation').css('top', `${getBannerTopHeight()}px`);
            if (
                !$('#navigation').hasClass('sticky') ||
                $('#navigation').scrollTop() ||
                forceRecalculate
            ) {
                stickyNavSetting();
            }
            //Dropdown list
            $('.dropdown-toggle').click(function () {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                } else {
                    $(this).addClass('open');
                }
            });
        } else {
            if ($('#navbar-collapse-1').hasClass('in')) {
                $('#navbar-collapse-1').removeClass('in');
            }

            if ($('#navigation').hasClass('sticky')) {
                var navHeight = 0;
                if ($('#sticky-nav')) {
                    if ($('main').length && $('main').offset()) {
                        navHeight =
                            $('main').offset().top -
                            $('#sticky-nav').outerHeight();
                    } else if (
                        $('#app-user-services') &&
                        $('#app-user-services').offset()
                    ) {
                        navHeight =
                            $('#app-user-services').offset().top -
                            $('#sticky-nav').outerHeight();
                    }
                }
                if (window.pageYOffset <= navHeight) {
                    unStickyNavSetting();
                }
            } else {
                var navOffset = 0;
                if (
                    $('#menu-main-menu') &&
                    $('#menu-main-menu').css('display') != 'none' &&
                    $('#menu-main-menu').offset()
                ) {
                    navOffset += $('#menu-main-menu').offset().top;
                    if (
                        $('#navbar-collapse-1') &&
                        $('#navbar-collapse-1').offset()
                    ) {
                        navOffset =
                            $('#menu-main-menu').offset().top -
                            $('#navbar-collapse-1').offset().top;
                    } else {
                        navOffset = $('#menu-main-menu').offset().top;
                    }
                }
                if (window.pageYOffset > navOffset) {
                    stickyNavSetting();
                }
            }
        }
    }

    function sizeDependentMenuBehaviour(forceRecalculate) {
        setMainMarginTopBottom();
        if (canBeStickyHeight()) {
            var windowWidth = $(window).width();
            var breakpoint = window.GRID_FLOAT_BREAKPOINT || 768;
            setMainMarginTopBottom();
            if (!window.STICKYNAV_DISABLED) {
                stickyNavBar(forceRecalculate);
                stickyBannerBar();
            }
        } else {
            unStickyNavSetting();
        }
    }

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find('.modal-dialog'),
            offset = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);

        // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css('margin-top', offset);
    }

    $(document).on('show.bs.modal', '.image-modal', centerModal);
    $(window).on('resize', function () {
        $('.image-modal:visible').each(centerModal);
    });

    if (canBeStickyHeight()) {
        sizeDependentMenuBehaviour();
    }
    $window.resize(sizeDependentMenuBehaviour);
    $window.scroll(function () {
        if (canBeStickyHeight()) {
            if (!window.STICKYNAV_DISABLED) {
                /* Navbar minimization */
                stickyNavBar();
                stickyBannerBar();
            }

            if (!window.BACKTOTOP_DISABLED) {
                backToTop();
            }
        }
    });
    document.body.addEventListener('userLoggedin', function () {
        sizeDependentMenuBehaviour(true);
    });

    // Init OICR Parent Nav
    if (window.APP_CONFIG && window.APP_CONFIG.OICR_PARENT_NAV_URL) {
        oicrParentNav.init({ onClick: setMainMarginTopBottom });
    }
});
