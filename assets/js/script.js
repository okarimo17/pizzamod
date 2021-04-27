const vegas_slider_onscroll = document.querySelector(".vega_onscroll_show")

function initRightNav() {
    /* Set img src for right navbar*/


    $(".right-nav .logo").html($(".main-navbar .logo").html());
    /* fill right navar ul list items*/

    $(".right-nav .nav-menu").html($(".main-navbar .navbar-nav").parent().html());
    /*toogle btn */

    $('.hamb-btn').click(function () {

        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');

    });
}


function preloadImage(url) {
    var img = new Image();
    img.src = url;
}







function initOnScrollSlideAnimation(section_image_path) {
    const elementInView = (el, scrollOffset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
    };

    function showVegasSlider(section_image_path) {

        let slider_content = $(".hero-section__content");

        $(".hero-section").vegas({
            slides: [
                { src: section_image_path },
            ],
            firstTransition: "swirlLeft",
            firstTransitionDuration: 7000,
            delay: 5000,
            timer: false,
            preloadImage: true,
            // animation: 'kenburnsDownRight',
            init: function (globalSettings) {
                slider_content.addClass('active');
            },
        });
    }



    const handleScrollAnimation = () => {
        if (elementInView(vegas_slider_onscroll, 300)) {
            showVegasSlider(section_image_path)
            window.removeEventListener('scroll', handleScrollAnimation)
        }
    }

    window.addEventListener('scroll', handleScrollAnimation)
}


function initSlidesv2() {
    $(document).ready(function () {

        let floating_slides = document.querySelectorAll('.slide_float');

        let right_slide = $('.owl-slides_2').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 0,
            nav: false,
            center: false,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            swipe: false,
            mouseDrag: false,
            touchDrag: false
        });


        let slides_owl = $('.slider_list').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            center: true,
            responsiveClass: true,
            autoplay: false,
            items: 1,
            dots: false,
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            onTranslated: (event) => {
                let index = event.item.index
                right_slide.trigger('to.owl.carousel', index)
                let new_color = $(".slider_list .owl-item.active > .item ").attr("data-color")
                $('.right_back').css({ "background-color": new_color })
                $('.slide_float.active').removeClass('active')
                floating_slides[index].classList.add('active')
            }
        });
        $(".slide_btn.slide_left").click(() => {
            $('.slider_list').trigger('prev.owl.carousel')
        })
        $(".slide_btn.slide_right").click(() => {
            $('.slider_list').trigger('next.owl.carousel')
        })

    });
}



function initProductsSlides() {
    $(document).ready(function () {

        let prodcu_text = $('.owl-prod_text').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 0,
            nav: false,
            center: false,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            swipe: false,
            mouseDrag: false,
            touchDrag: false
        });


        let slides_owl = $('.owl-products').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            center: true,
            responsiveClass: true,
            autoplay: false,
            items: 1,
            dots: false,
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            onTranslated: (event) => {
                let index = event.item.index
                prodcu_text.trigger('to.owl.carousel', index)
            }
        });
        $(".product-slider .slide_btn.slide_left").click(() => {
            $('.owl-products').trigger('prev.owl.carousel')
        })
        $(".product-slider .slide_btn.slide_right").click(() => {
            $('.owl-products').trigger('next.owl.carousel')
        })

    });
}