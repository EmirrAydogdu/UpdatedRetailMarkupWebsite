
(function ($) {
    ("use strict");
    setTimeout(function () {
        if (document.readyState === 'complete') {
            $('#preloader').addClass('isdone');
            $('.loading').addClass('isdone');

            $('.progress-bar').css({
                'width': '100%',
                'transition': 'width 1s ease-in-out',
                'margin': '0 auto'
            });
        } else {
            setTimeout(function () {
                $('#preloader').addClass('isdone');
                $('.loading').addClass('isdone');

                $('.progress-bar').css({
                    'width': '100%',
                    'transition': 'width 1s ease-in-out',
                    'margin': '0 auto'
                });
            }, 1000);
        }
    }, 100);





    /*Tema*/
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setThemeColor(savedTheme);
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setThemeColor('dark');
        } else {
            setThemeColor('light');
        }
    }

    $('#theme-toggle, #sidebar-theme-toggle').on('click', function () {
        var currentTheme = $('html').attr('data-theme');

        if (currentTheme === 'dark') {
            localStorage.setItem('theme', 'light');
            setThemeColor('light');
        } else {
            localStorage.setItem('theme', 'dark');
            setThemeColor('dark');
        }
    });

    function setThemeColor(color) {
        $('html').attr('data-theme', color);
        updateIcon(color);
    }

    function updateIcon(theme) {
        var icon = $('#theme-icon');
        var sidebarIcon = $('#sidebar-theme-icon');

        if (theme === 'dark') {
            icon.removeClass('bi-brightness-high').addClass('bi-moon');
            sidebarIcon.removeClass('bi-brightness-high').addClass('bi-moon');
        } else {
            icon.removeClass('bi-moon').addClass('bi-brightness-high');
            sidebarIcon.removeClass('bi-moon').addClass('bi-brightness-high');
        }

        icon.toggleClass('rotate');
        sidebarIcon.toggleClass('rotate');
    }

    $(".header-area nav").meanmenu();
    var fixed_top = $(".header-area");
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
        }
    });
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();

        $("section").each(function () {
            var offsetTop = $(this).offset().top;
            var height = $(this).height();
            var id = $(this).attr("id");

            if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
                $('nav a[href="#' + id + '"]').addClass("primary-color");
            } else {
                $('nav a[href="#' + id + '"]').removeClass("primary-color");
            }
        });
    });
    var currentYear = new Date().getFullYear();
    $('#yearOfTheDay').text(currentYear);

    // Sayısal veriler
    let cargoCountData = 20000000;
    let packetCountData = 8000000;
    let endorsementCountData = 50;
    let reportCountData = 85000;

    function formatNumber(num) {
        if (num >= 1e9) {
            return { value: Math.round(num / 1e9), unit: "B" }; // Milyar (Billion)
        } else if (num >= 1e6) {
            return { value: Math.round(num / 1e6), unit: "M" }; // Milyon (Million)
        } else if (num >= 1e3) {
            return { value: Math.round(num / 1e3), unit: "K" }; // Bin (Thousand)
        } else {
            return { value: num, unit: "" }; // Küçük sayılar
        }
    }


    // Cargo Count
    let cargoFormatted = formatNumber(cargoCountData);
    $("#cargoCount").text(cargoFormatted.value);
    $("#cargoCount").after(`<span class="unit">${cargoFormatted.unit}+</span>`);

    // Packet Count
    let packetFormatted = formatNumber(packetCountData);
    $("#PacketCount").text(packetFormatted.value);
    $("#PacketCount").after(`<span class="unit">${packetFormatted.unit}+</span>`);

    // Endorsement Count
    let endorsementFormatted = formatNumber(endorsementCountData);
    $("#endorsementCount").text(endorsementFormatted.value);
    $("#endorsementCount").after(`<span class="unit">${endorsementFormatted.unit}%</span>`);

    // Report Count
    let reportFormatted = formatNumber(reportCountData);
    $("#reportCount").text(reportFormatted.value);
    $("#reportCount").after(`<span class="unit">${reportFormatted.unit}+</span>`);


    //ana slier
    var sliderInit1 = new Swiper(".banner__slider", {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        speed: 1000,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".banner__dot",
            clickable: true,
        },
    });

    //müşteri yorumları
    var swiper = new Swiper(".testimonial-two__slider", {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
        pagination: {
            el: ".testimonial__dot",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $(function () {
        var track = document.getElementById('logosTrack');
        if (!track.dataset.doubled) {
            track.innerHTML = track.innerHTML + track.innerHTML; // içerik 2x
            track.dataset.doubled = "true";
        }
    });

    $(document).on("click", "#openButton", function () {
        $("#targetElement").removeClass("sidebar__hide");
    });
    $(document).on("click", "#closeButton", function () {
        $("#targetElement").addClass("sidebar__hide");
    });

    $(".service__item").hover(
        function () {
            $(".service__item").removeClass("active");
            $(this).addClass("active");
        }
    );

    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $(".video-popup").magnificPopup({
        type: "iframe",
        iframe: {
            markup:
                '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                "</div>",

            patterns: {
                youtube: {
                    index: "youtube.com/",

                    id: "v=",

                    src: "https://www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed",
                },
            },

            srcAction: "iframe_src",
        },
    });

    $(".count").counterUp({
        delay: 30,
        time: 3000,
    });
    $(".progress-count").counterUp({
        delay: 30,
        time: 1000,
    });

    $(".footer-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    new WOW().init();


})(jQuery);
