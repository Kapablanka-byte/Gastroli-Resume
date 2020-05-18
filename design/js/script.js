var map;
var one_time = true;
var mainSlider;
if ($('.masonry').length) {
    var $grid = $('.masonry').masonry({

    });
}
window.onload = function() {
    if (window.innerWidth > 1024 ) {
        equalizeContainers('service__item', 'p');
    }

};
$(window).resize(function () {
    mobileSlides('.fullscreen .prewiev img', 768);
    equalizeContainers('service__item', 'p');
	$('.btn-white.map-btn').css('bottom', $('.btn-yellow.map-btn').outerHeight());

    if (window.innerWidth <= 768) {
        $('.fullscreen .prewiev img').css('object-position','center -'+$('.prewiev__buy').outerHeight()+'px');
    } else{
        $('.fullscreen .prewiev img').css('object-position','top center');
    }
});

$(document).ready(function() {
    if (window.innerWidth <= 768) {
        $('.fullscreen .prewiev img').css('object-position','center -'+$('.prewiev__buy').outerHeight()+'px');
    } else{
        $('.fullscreen .prewiev img').css('object-position','top center');
    }
    setTooltips('.insta-container img');
    phoneHolder();
    mobileSlides('.fullscreen .prewiev img', 768);
    $('.btn-white.map-btn').css('bottom', $('.btn-yellow.map-btn').outerHeight());

    // if( window.innerWidth < 1500 ){
    //     $('.prewiev__box h2, .prewiev__box .h2').each(function () {
    //         if( $(this).innerHeight() > 200 ){
    //             $(this).css('font-size' ,'45px');
    //         }
    //     });
    // }


    if( window.innerWidth <= 1024 && window.innerWidth > 768){
        if( $('#mobile').length ){
            $('#mobile').remove();
        }
    }else if(window.innerWidth <= 768){
        if( $('#desctop').length ){
            $('#desctop').remove();
        }
    }

    if( window.innerWidth <= 1024){
        $('.afisha__item').click(
            function () {
                $(this).toggleClass('hovered');
                $('.slider-afisha .swiper-pagination').toggleClass('active_slide_bullets');
                $('.slider-afisha .afisha__hover').toggleClass('active_slide_hover');
            });
        $('.menu .mob-select').change(function () {

            $('.menu__full').hide();
            $('.menu__full[data-subcategory="' + $(this).val() + '"]').show();
        });


        document.getElementsByTagName('body')[0].addEventListener('touchstart', function(ev) {
            if (ev.touches.item(0) == ev.targetTouches.item(0)) {
            }
            if (ev.touches.length == ev.targetTouches.length) {
                if( $('body')[0].scrollTop > 50 ){
                    // console.log('touched');
                }

            }
            if (ev.touches.length > 1) {
            }
        }, false);
    }




    $('.calendar-inside__box .close').click(function () {
        $('.calendar-inside').hide();
        $('.calendar-inside__container').hide();
    });

    // $('[data-fancybox]').fancybox({
    //     fullScreen : true,
    //     closeBtn   : true,
    //     image : {
    //         preload : true
    //     },
    //     thumbs : {
    //         showOnStart : true
    //     },
    //     beforeMove : function ( instance, current, e ) {
    //
    //
    //         console.log(current.opts);
    //         current.src = $(current.opts.$orig[0]).attr('data-origin');
    //     }
    //
    // });






    if (window.innerWidth > 1024 ) {

        $( ".prewiev__box" ).each(function() {
            $( this ).wrapInner( "<div class='table-fix'></div>" );
            $( this ).css({'height' : $(this).find('.table-fix').height() + 'px', 'display' : 'block'});
        });


        $('.tab-menu-icons a').on("click", function () {

            getMenu($(this));
            function getMenu(elem) {

                var href = elem.attr('href');

                mainSlider.slideTo($(href).index(), 1000, true);


            }

            return false;
        });


        $('.tab-menu a').on("click", function () {

            getMenu($(this));
            function getMenu(elem) {

                var href = elem.attr('href');

                mainSlider.slideTo($(href).index(), 1000, true);


            }

            return false;
        });
    }
    if (window.innerWidth > 1024 && $('.wow').length > 0) {
        new WOW().init();
    }


    if ($('.masonry').length) {
        $grid.imagesLoaded().progress(function () {
            $grid.masonry();
        });
    }

    if (window.innerWidth <= 1024 ){
        $(window).scroll(function(){
            var sticky = $('.header-white');

            if($(window).scrollTop() > sticky.height()) {
                sticky.addClass('scrolled');
                $('.tab-menu').addClass('fixed');
            }
            else {
                sticky.removeClass('scrolled');
                $('.tab-menu').removeClass('fixed');
            }




        });

        if($(window).scrollTop() > $('.header-white').height()) {
            $('.header-white').addClass('scrolled');
            $('.tab-menu').addClass('fixed');
        }

        $('.mob-toggle').on("click", function(){
            $(this).toggleClass('active');
            $('body').toggleClass('open-body');
            $('html').toggleClass('open-body');
            $('header').toggleClass('open');

        });


        var sections = $('.fullscreen > .swiper-wrapper > .swiper-slide')
            , nav = $('.tab-menu')
            , nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
            if($('.tab-box').length) {
            var cur_pos = $(this).scrollTop();

            sections.each(function() {
                var top = $(this).offset().top - nav_height * 2,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');


                    var textTop = $('.tab-box a:first-child').text();
                    $('.tab-title').text(textTop);

                    if($('.tab-box a').hasClass('active') ) {
                        var text = $('.tab-box a.active').text();
                        $('.tab-title').text(text);
                    }

                }




                var lastMenu = $('.tab-box a:last-child').attr('href').slice(1, $('.tab-box a:last-child').attr('href').length);
                var last = $('.swiper-slide[data-hash="'+ lastMenu +'"]').offset().top - nav_height * 2;

                if (cur_pos >= last) {
                    $('.tab-title').text( $('.tab-box a:last-child').text() );
                }

            });
            }
        });




        $('.tab-title').on("click", function(){
            if( !$(this).parent().hasClass('fixed') && !$('.calendar').length ){
                $('html, body').stop().animate( {
                    'scrollTop': 100
                }, 400);
            }
            $(this).toggleClass('active');
            $('.tab-box').toggleClass('open');

        });
        $(document).mouseup(function (e)
        {
            var container = $(".tab-box");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                if( container.hasClass('open') ){
                    $('.tab-title').toggleClass('active');
                    container.hide().toggleClass('open');
                }
            }
        });




        var text = $('.tab-box a:first-child').text();
        $('.tab-title').text(text);

        $('.tab-box a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            $(document).off("scroll");

            var target = this.hash,
                $target = $(target);
            $('.tab-box a').removeClass('active');
            $(this).addClass('active');
            $('.tab-title').removeClass('active');
            $('.tab-box').removeClass('open');

            var html = $(this).text();
            $('.tab-title').text(html);

            $('html, body').stop().animate( {
                'scrollTop': $target.offset().top - $('.tab-menu').height() * 2
            }, 900, 'swing', function () {
                window.location.hash = target;
            } );
        } );

    }






    var version = detectIE();

    if ($('.fullscreen').length && $(window).width() > 1024 ) {

        //если у нас мак
        var typeScrolPage = '',
            shadowScroll = '',
            coverFlowPage = '';
        var osofvisitor = navigator.platform.toLowerCase();
        if ((osofvisitor.indexOf("mac") > -1)) {
            if( window.innerWidth < 1500){
                $('.slider-description .prewiev').css('padding-top','0');
                $('.prewiev__box').css({'height': '100%','display': 'flex','align-items': 'center','pointer-events':'none'});
                typeScrolPage = 'slide';
                shadowScroll = false;
                coverFlowPage = '';
            }
        } else {

            //если у норм девайс
            typeScrolPage = 'coverflow';
            shadowScroll = true;
            coverFlowPage = {
                rotate: 8,
                stretch: 0,
                depth: 0,
                modifier: 6,
                slideShadows: shadowScroll
            };
        }


        var dataHashNav = '';
        var slideSpeed = 500;
        if( $('.tab-menu').length && version > 10 ){
            dataHashNav = true;
        }else{
            dataHashNav = false;
        }
        if( window.innerWidth <= 1300 ){
            slideSpeed = 1300;
        }else{
            slideSpeed = 350;
        }

        var mainSlider = new Swiper('.fullscreen', {
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            mousewheelControl: true,
            preventClicks:false,
            preventClicksPropagation:false,
            hashnav: true,
            hashnavWatchState: dataHashNav,
            replaceState: dataHashNav,
            keyboardControl: true,
            simulateTouch: false,
            direction: 'vertical',
            effect: typeScrolPage,
            speed: slideSpeed,
            coverflow: coverFlowPage,
            onInit: function () {
                if( $('.tab-menu a').length ){
                    $('.tab-menu a').removeClass('active');
                    if( location.hash && location.hash != '#main'){
                        $(".tab-menu").addClass('active');
                        $('header').addClass('scrolled');
                        $('.tab-menu a').each(function () {
                            if( $(this).attr('href') == location.hash ){
                                $(this).addClass('active');
                            }
                        });
                    }
                }
            }
        });



        $(".menu__full").hover(
            function () {
                mainSlider.disableMousewheelControl();
            }, function () {
                mainSlider.enableMousewheelControl();
            });
        mainSlider.on('slideChangeStart', function () {
            $('.slider-options .swiper-prev, .slider-options .swiper-next, .plus, .minus').fadeOut(200);
            new WOW().init();
            $('.tab-menu a.active').removeClass('active');

            if (mainSlider.activeIndex == 0 || mainSlider.activeIndex == 2){
                $(".header-main").addClass('header-white');
                $(".tab-menu").addClass('active');
            } else {
                $(".tab-menu").removeClass('active');
                $(".header-main").removeClass('header-white');
            }
            if (mainSlider.activeIndex == 0){
                $('header').removeClass('scrolled');
                $(".tab-menu").removeClass('active');
                $(".tab-menu a").removeClass('active');
            } else {
                $('header').addClass('scrolled');
                $(".tab-menu").addClass('active');
                $('.tab-menu a').eq(mainSlider.activeIndex-1).addClass('active');
            }
        });
        mainSlider.on('slideChangeEnd', function () {
            $('.slider-options .swiper-prev, .slider-options .swiper-next, .plus, .minus').fadeIn(200);
        });
    }


    $('.img_night').css({'height': window.innerHeight, 'width':window.innerWidth});

    (function() {
        var $section = $('.img_map_wrap');
        if($section.length){
            var mobilePan = false;
            if( window.innerWidth <= 1024 ){
                mobilePan = true;
            }else{
                mobilePan = false;
            }

            var $panzoom = $section.find('.img_night').panzoom({
                disablePan: mobilePan,
                $zoomIn: $section.parent().parent().find(".plus"),
                $zoomOut: $section.parent().parent().find(".minus"),
                startTransform: 'scale(1.8)'
            }).panzoom('zoom', true);

        }
    })();





    //если ИЕ
    $(window).scroll(function () {


    });
    if (version === false) {
        $('.pointer').click(function(){
            $(this).hide();
            $('.svg-wrap').css({'pointer-events' : 'auto'});
        });

    }else if(version == 10){
        // $('body').empty();
        $('body').append(
            ' <div class="interbet_block">' +
            '<div class="ie_bg" style="background-image:url(http://'+ location.host +'/design/ibiza/img/IE10.jpg">'+
            '<div class="window_block">'+
            '<div class="message_wrapper">'+
            '<div class="bottom_block">'+
            '<p class="bold">Ви використовуєте застарілу версію  Internet Explorer</p>'+
            '<p class="next_p">Щоб отримати можливість ознайомитися з сайтом, поновіть Ваш браузер</p>'+
            '<a href="http://browsehappy.com/" rel="nofollow">Оновити браузер</a>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div></div>'
            )
    }
    else if (version > 10) {
        objectFitIE('.afisha__item img', 'contain');
        $('.svg-wrap iframe').remove();
        $('.swiper-slide-shadow-top, .swiper-slide-shadow-bottom').css({'display': 'none', 'pointer-events': 'none'});


        $('head').append('<link href="http://'+ location.host +'/design/ibiza/css/ie.css" rel="stylesheet"/>');
        var imageHeight = $('.slider-partners a img').parent().outerHeight;
        $('.slider-partners a img').css({'display':'table', 'position': 'absolute', 'margin':'auto', 'top': '0', 'bottom': '0', 'left': '0', 'right': '0', 'height': imageHeight});
        $('.masonry__item').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: '+imageSrc.outerHeight()+'px;width: '+imageSrc.outerWidth()+'px;position: absolute;top: 0;"></div>');
            imageSrc.remove();
        });
        // $('.afisha__item').each(function () {
        //     var imageSrc = $(this).find('img');
        //     imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: 100%;width: 100%;position: absolute;top: 0;"></div>');
        //     imageSrc.remove();
        // });
        $('.gallery__item').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: 100%;width: 100%;position: absolute;top: 0;"></div>');
            imageSrc.remove();
        });
        $('.small-gallery .swiper-slide a').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: 100%;width: 100%;position: absolute;"></div>');
            imageSrc.hide();
        });
        $('.big-gallery').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: '+imageSrc.outerHeight()+'px;width: '+imageSrc.outerWidth()+'px;position: absolute;"></div>');
            imageSrc.hide();
        });
        $('.calendar-date__item .swiper-slide').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: '+imageSrc.outerHeight()+'px;width: '+imageSrc.outerWidth()+'px;position: absolute;"></div>');
            imageSrc.hide();
        });
        $('.calendar-inside__container').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('data-original')+');height: 100%;width: 100%;position: absolute;"></div>');
            imageSrc.hide();
        });



        $('.resident__item').each(function () {
            var imageSrc = $(this).find('img');
            imageSrc.parent().prepend('<div class="fix_ie_fit" style="background-image: url('+imageSrc.attr('src')+');height: '+imageSrc.outerHeight()+'px;width: '+imageSrc.outerWidth()+'px;position: absolute;left: 0"></div>');
            imageSrc.css('visibility','hidden');
            $('.resident__item').each(function () {
                console.log($(this).index());
                if($(this).index() >= 2){
                    $(this).find('.fix_ie_fit').css('left','50%');
                }
            });

        });





        // if( $('#mapclub').length ){
        //     $('.pointer').css({'background':'#000d30 url(http://'+ location.host +'/design/ibiza/img/map-night.png)', 'pointer-events':'auto'}).addClass('ie_fixed_map').unbind("click");
        // }
        // if( $('#mapbeach').length ){
        //     $('.pointer').css({'background':'#7bd2ff url(http://'+ location.host +'/design/ibiza/img/map-day.png)', 'pointer-events':'auto'}).addClass('ie_fixed_map').unbind("click");
        // }


        $('.slider-prewiev .prewiev, .prewiev__images .swiper-slide').each(function () {
            $(this).addClass('fix_ie_fit');
        });
    } else {
    }







    if ($('.prewiev__images').length  ) {
        var subSliderHome = new Swiper('.prewiev__images', {
            slidesPerView: 1,
            simulateTouch: false,
            pagination: false,
            mousewheelControl: false,
            autoplay: 5000,
            speed: 2000,
            virtualTranslate: true,
            effect: 'fade'
        });
        $('.prewiev__images .swiper-slide').height(window.innerHeight);
    }
    if ($('.calendar-date').length  ) {

        if(window.innerWidth > 768){
            var calendarDate = new Swiper('.calendar-date', {
                scrollbar: '.swiper-scrollbar',
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true,
                freeModeMomentum: false,
                freeModeMomentumBounce:false,
                freeModeMomentumRatio: 0,
                freeModeMomentumBounceRatio: 0,
                freeModeMinimumVelocity: 0,
                freeModeMomentumVelocityRatio: 0,
                onInit:function () {
                    $('.calendar-month p').eq(0).addClass('active');
                }
            });
            calendarDate.on('setTranslate', function (swiper, progress) {

                if( progress == 0){
                    $('.calendar-month p').removeClass('active');
                    $('.calendar-month p').eq(0).addClass('active');
                }

                var topLine = $('.calendar-date').offset().top;
                var calendarHeight = $('.calendar-date').innerHeight();


                $('div[id^="monthday__"]').each(function () {
                    var currentMonth = $(this).attr('id');
                    var numb = currentMonth.match(/\d/g);
                    numb = numb.join("");


                    if( (topLine + (window.innerHeight - topLine)) - calendarHeight/2 >= $(this).offset().top && $(this).offset().top > window.innerHeight - calendarHeight ){
                        $('.calendar-month p').removeClass('active');

                        $('#calendar-monthday__' + numb).addClass('active');
                    }
                });


            });
        }


        //fot calendar(events.tmpl)

        if( $('.calendar').length && window.innerWidth <= 768){
            stickyContent('.calendar-month', '.calendar-date', $('.fixed_header').outerHeight());
            stickyContent('.calendar-top', '.calendar-date', $('.fixed_header').outerHeight() + $('.calendar-month').outerHeight());

            var defText = $('.tab-box p').eq(0).addClass('active').text();
            var dataMonth = $('.tab-box p').eq(0).attr('data-one-mounth');


            $('.tab-title').text(defText);
            $('.calendar-month .tab-box p').click(function () {
                if( !$(this).hasClass('active') ){



                    $(this).toggleClass('active');
                    $('.tab-box').toggleClass('open');
                    $('.calendar-month .tab-box p').removeClass('active');
                    $('.tab-title').text( $(this).text() );
                    $(this).addClass('active');

                    $('html, body').animate( {
                        'scrollTop': $('#'+ $(this).attr('data-one-mounth')).offset().top - $('.calendar-date__item').outerHeight() - $('header').outerHeight()
                    }, 400)
                }
            });


            $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();

                var fromTop =  $('.tab-menu').outerHeight() + $('.calendar-top').outerHeight() + $('header').outerHeight();



                $('div[id^="monthday__"]').each(function () {
                    var currentMonth = $(this).attr('id');

                    var top = $(this).offset().top - fromTop,
                        bottom = window.innerHeight - (top + $(this).offset().top);
                    //
                    // console.log(cur_pos + ' = текущая');
                    // console.log(top + ' =  top');
                    // console.log(bottom + ' -bottom');
                    if (cur_pos - 10 >= top) {
                        nav.find('p').removeClass('active');
                        //console.log( currentMonth );
                        nav.find('p[id="calendar-'+ currentMonth +'"]').addClass('active');
                        var textTop = $('.tab-box p:first-child').text();
                        $('.tab-title').text(textTop);

                        if($('.tab-box p').hasClass('active') ) {
                            var text = $('.tab-box p.active').text();
                            $('.tab-title').text(text);
                        }
                    }
                });




            });



        }
        //fot calendar(events.tmpl)

    }
    if ($('.calendar-slider').length  ) {
        var prewiev = new Swiper('.calendar-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: false
        });
    }
    if ($('.slider-afisha').length) {


        var bullets = null,
            loop = true;
        if( $('.slider-afisha .swiper-slide:not(.swiper-slide-duplicate)').length > 4 ){
            bullets = '.swiper-pagination';
            loop = true;
            $('.swiper-prev').show();
            $('.swiper-next').show();
            next = '';
        }else{
            bullets = null;
            loop = false;
            $('.swiper-prev').hide();
            $('.swiper-next').hide();
        }

        var afisha = new Swiper('.slider-afisha', {
            grabCursor: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0,
            pagination: bullets,
            paginationClickable: true,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            loop: loop,
            onInit: function () {
                if( window.innerWidth <= 1024){
                    $('.swiper-slide-duplicate .afisha__item').click(function () {
                        $(this).toggleClass('hovered');
                        $('.slider-afisha .swiper-pagination').toggleClass('active_slide_bullets');
                        $('.slider-afisha .afisha__hover').toggleClass('active_slide_hover');
                    });
                }
            },
            onSlideChangeStart: function () {
                    $('.afisha__item').removeClass('hovered');
                    $('.slider-afisha .swiper-pagination').removeClass('active_slide_bullets');
                    $('.slider-afisha .afisha__hover').removeClass('active_slide_hover');

            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                1499: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1500: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                }
            }
        });
    }
    if( $('.slider-description>.swiper-wrapper>.swiper-slide').length > 1 ){
        if ($('.slider-description').length) {
            var description = new Swiper('.slider-description', {
                slidesPerView: 1,
                spaceBetween: 0,
                nextButton: '.swiper-next',
                prevButton: '.swiper-prev',
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true
            });
        }
    }else{
        $('.if-one-slide').remove();
    }


    if ($('.slider-prewiev').length) {
        var homeMain = new Swiper('.slider-prewiev', {
            slidesPerView: 1,
            spaceBetween: 0,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true
        });
    }
    if ($('.small-gallery').length) {
        var small = new Swiper('.small-gallery', {
            slidesPerView: 1,
            spaceBetween: 0,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true
        });
    }







    if ($('.slider-gallery').length) {
        var gallery = new Swiper('.slider-gallery', {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                1400: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                }
            }
        });
    }
    if ($('.slider-gallery-inside').length) {
        var galleryInside = new Swiper('.slider-gallery-inside', {
            spaceBetween: 200,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 'auto',
            centeredSlides: true
        });
    }
    if ($('.slider-partners').length) {
        var partners = new Swiper('.slider-partners', {
            slidesPerView: 7,
            slidesPerColumn: 1,
            spaceBetween: 0,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            breakpoints: {
                1023: {
                    loop:false,
                    slidesPerGroup: 3,
                    slidesPerColumn: 2,
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 5
                }

            }
        });
    }
    if ($('.content-slider').length) {
        var content = new Swiper('.content-slider', {
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 5,
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true
        });
    }
    if ($('.chosen-select').length) {
        $(".chosen-select").chosen({disable_search_threshold: 10});
    }
    //$('.footer__title').click(function() {
    //    $(this).toggleClass('active').parent().find('.footer__box').slideToggle();
    //    return false;
    //});

    $(function () {
        if ($('#map').length > 0) {

            var myMapLoc = new google.maps.LatLng(46.428188, 30.766696);

            var myOptions = {
                zoom: 16,
                scrollwheel: true,
                center: myMapLoc,
                disableDefaultUI: false,
                navigationControl: false,
                mapTypeControl: false,
                streetViewControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            };

            map = new google.maps.Map(document.getElementById("map"), myOptions);

            var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            var isIE = window.navigator.msPointerEnabled;
            var isIE9 = document.all && !window.atob;
            if (isIE || isIE9 || isFirefox) {
                var extension = 'png';
            } else {
                var extension = 'svg';
            }
            var marker = new google.maps.Marker({
                position:myMapLoc,
                map:map,
                icon: '/design/ibiza/img/map.svg'
            });



        }
    });



    if(window.innerWidth <= 1024 && $('.refresh p').length) {
        $('.refresh p').text('Загрузить');
        $('.refresh p').click(function () {
            $(this).addClass('animated fadeOutDown downloaded').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function() {
                    loadGalleryItem();
                    var lastScrollTop = 0;
                    $(window).on('scroll', function() {
                        st = $(this).scrollTop();
                        if(st < lastScrollTop) {
                            console.log('up 1');
                        }
                        else {
                            $('.refresh p').removeClass('animated fadeOutDown downloaded');
                        }
                        lastScrollTop = st;
                    });
                }
            );
        });
    }


    if(window.innerWidth > 1024) {
        $(window).scroll(function() {
            var masonryWrapper = $('.masonry');

            if(one_time == false){
                $(window).bind('scroll');
            }


            if( masonryWrapper.length && $('.refresh p').length ){
                var hT = $('.refresh p').offset().top,
                    hH = $('.refresh p').outerHeight(),
                    wH = $(window).height(),
                    wS = $(this).scrollTop();
                if ( wS > (hT+hH-wH) ){
                    // masonryWrapper.addClass('loading');


                    if( one_time == true){
                        one_time = false;
                        loadGalleryItem();

                    }else if(one_time == false){
                    }
                }


            }
        });
    }




});





function phoneHolder() {
    $('.phone').each(function() {
        var placeholder = $(this).val();
        $(this).mask("+38(999) 999-99-99");
        $(this).bind('blur', function() {
            if ($(this).val() === '') {
                $(this).val(placeholder);
            }
        });
        $(this).val(placeholder);
    });
}


function loadMoreGalleryResult(hasMore) {

    if(!hasMore){
        $('.refresh p').remove();
    }

    $('#modal_form .masonry__item').each(function(){
        var $items = $(this);
        $grid.append( $items ).masonry( 'appended', $items );
    });
    one_time = true;
}



function openGallery(target) {
    $(target).find('a[data-fancybox="inside"]').eq(0).trigger('click');
}

function setTooltips(forImages) {
    $(forImages).hover(
        function(){
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
        },
        function() {
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
        }
    ).mousemove(function(e) {
        var absoluteTooltip = $('.tooltip');

        var mousex = 0;
        var mousey = 0;


        if( e.pageX + 200 >= window.innerWidth){

            mousex = e.pageX - 200; //Get X coordinates
            mousey = e.pageY + 10; //Get Y coordinates
        }else{
            mousex = e.pageX + 10; //Get X coordinates
            mousey = e.pageY + 10; //Get Y coordinates
        }


        absoluteTooltip.css({ top: mousey, left: mousex })
    });

}
// height`s per row
equalHeight = function(container){

    var currentTallest = 0,
        topPosition = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto');
        topPosition = $el.position().top;

        if (currentRowStart != topPosition) {
            for ( var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

//height`s for all чет глючная
function resetHeight(container) {
    var maxHeight = 0;
    $(container).each(function(){
        maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
    }).css('height', maxHeight);
}
//height`s for all
function equalizeContainers(containerClass, targetElement) {

    var containerElements = document.getElementsByClassName(containerClass);

    for(var i = 0; i < containerElements.length; i++) {
        var highestElement = 0;
        var targetElements = containerElements[i].getElementsByTagName(targetElement);
        for(var j = 0; j < targetElements.length; j++) {

            var currentTargetElement = targetElements[j];
            currentTargetElement.style.height = "auto";
            var currentElementHeight = currentTargetElement.offsetHeight;
            if(currentElementHeight > highestElement) {
                highestElement = currentElementHeight;
            }
        }
        for(var k = 0;k < targetElements.length; k++) {
            targetElements[k].style.height = highestElement + "px";
        }

    }
}


function showCalendarEvent(event_id, target) {
    var currentBlock = $(".calendar-inside__container[data-event="+event_id+"]");
    if( window.innerWidth >= 551 && window.innerWidth <= 1024 && !target.hasClass('active') ){
        target.addClass('active');

    }else{
        $('.calendar-inside, .calendar-slider-small').show();

        currentBlock.show();

        if( currentBlock.find('.calendar-inside__title').outerHeight() > 160 ){
            currentBlock.find('.calendar-inside__title').css('line-height', '105px');
            currentBlock.find('.calendar-inside__description').css('line-height', '2');
        }





        if ($('.calendar-slider-small').length) {
            var items = 6;
            if (window.innerHeight <= 750 ){
                items = 4;
            }
            console.log(items);
            var calendarSmall = new Swiper('.calendar-slider-small', {
                slidesPerView: items,
                slidesPerGroup: items,
                effect: 'slide',
                spaceBetween: 0,
                freeMode: false,
                breakpoints: {
                    1024: {
                        slidesPerView: items,
                        slidesPerGroup: items
                    },
                    800: {
                        slidesPerView: 5,
                        slidesPerGroup: 1
                    },
                    600: {
                        slidesPerView: 4,
                        slidesPerGroup: 1
                    },
                    400: {
                        slidesPerView: 3,
                        slidesPerGroup: 1
                    }
                },
                nextButton: '.swiper-next',
                prevButton: '.swiper-prev',
                onSlideChangeStart: function (instance) {
                    // console.log(instance);
                }
            });
        }



        imgLazyLoad();
    }

}

function showCalendarBlock(event_id) {
    $('.calendar-inside__container').hide();
    var currentBlock = $(".calendar-inside__container[data-event="+event_id+"]");
    currentBlock.show();
        if( currentBlock.find('.calendar-inside__title').outerHeight() > 160 ){
            currentBlock.find('.calendar-inside__title').css('line-height', '1');
            currentBlock.find('.calendar-inside__description').css('line-height', '2');
        }
    imgLazyLoad();
}


function mobileSlides(img, size) {
    $(img).each(function () {
        var descImgSrc = $(this).attr('data-large');
        var mobileImgSrc = $(this).attr('data-small');
        if( window.innerWidth <= size ){
            $(this).attr('src', mobileImgSrc);
        }else if( window.innerWidth > size ){
            $(this).attr('src', descImgSrc);
        }
    });
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {// IE 11 => return version number
        var rv = ua.lastIndexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {// Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }// other browser
    return false;
}



//pollifil object-fit for IE
function changeImg( classElements, size ) {
    var src = "";

    $(classElements).each(function(){
        src = $(this).attr("src");
        if (src.length) {
            $(this).css({
                "background-image": "url(" + src + ")",
                "background-size":""+ size +"",
                "background-position":"center",
                "width":"100%",
                "height":"100%",
                "background-repeat":"no-repeat"
            }).attr('src','').attr('alt','');
        }
    });
}

function objectFitIE(classElements, size) {

    var  TEST_IE;
    TEST_IE = detectIE();
    console.log(TEST_IE);
    if (TEST_IE && TEST_IE <= 15)  // If Internet Explorer, return version number
    {
        changeImg( classElements, size );
    }
    return false;
}





$(window).on('load', function () {
    var type = $('.menu-toggle-link').eq(0).addClass('active').attr('data-type');
    $("div[data-type='"+type+"']").show();
    $('.menu__body[data-type="'+type+'"]').addClass('active');
    var category = $('.menu__main a.active').attr('data-category');
    if( location.hash && $('.menu-toggle-link').length ){
        var activeMenu = location.hash.slice(1, location.hash.length);
        console.log(activeMenu);
        $('a.menu-toggle-link').removeClass('active');
        $('.menu__body ').removeClass('active').hide();
        $('[data-type="'+ activeMenu +'"]').addClass("active").show();
        $('.menu-toggle a[data-type="'+ activeMenu +'"]').trigger('click');
        $('.menu-toggle-link').click(function () {
            location.hash = $(this).attr('data-type');
        });
    }
    setSub(category);
    if( $('.menu-toggle-link').length && window.innerWidth <= 1024 ){
        setSubMobile();
    }
});



$(document).ready(function () {

    if( $('.calendar-inside__box .close').length ){
        $('.calendar-inside__box .close').click(function () {
            $('.calendar-date__item .swiper-slide').removeClass('active');
        });
    }



    if( $('.menu').length && !$('.menu').hasClass('menu__body') && window.innerWidth > 1024 ){
        $(' .menu__full .swiper-wrapper').height( $(window).height() - $('header').outerHeight() - $('.tab-menu').outerHeight() );
        $(window).resize(function () {
            $(' .menu__full .swiper-wrapper').height( $(window).height() - $('header').outerHeight() - $('.tab-menu').outerHeight() );
        });
        setTimeout(function () {
            window.scrollBlockRestoran = new Swiper( $('.menu__full').eq(0) ,{
                scrollbar: '.swiper-scrollbar',
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true
            });
        }, 1000);
        $('.menu__main a').click(function () {
            if( $(this).hasClass('active') ){
                return false;
            }else{
                scrollBlockRestoran.destroy(true, true);
                $('.menu__main a').removeClass('active');
                $('.menu__sub a').removeClass('active');

                $(this).addClass('active');
                var curCategory = $(this).attr('data-category');
                var currentSub = $('.menu__sub[data-category="'+ curCategory +'"]');
                var currentChildSub = $('.menu__full[data-subcategory="'+ currentSub.find('a').eq(0).attr('data-subcategory') +'"]');

                $('.menu__sub').hide();
                $('.menu__full').hide();

                currentSub.show().find('a').eq(0).addClass('active').attr('data-subcategory');
                currentChildSub.show();

                window.scrollBlockRestoran = new Swiper( currentChildSub ,{
                    scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true
                });

            }
        });
        $('.menu__sub a').click(function () {
            if( $(this).hasClass('active') ){
                return false;
            }else{
                scrollBlockRestoran.destroy(true, true);
                $('.menu__sub a').removeClass('active');
                $(this).addClass('active');
                var curCategory = $(this).attr('data-subcategory');
                $('.menu__full').hide();
                $('.menu__full[data-subcategory="'+ curCategory +'"]').show();


                window.scrollBlockRestoran = new Swiper( $('.menu__full[data-subcategory="'+ curCategory +'"]') ,{
                    scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true
                });
            }
        });




    }

    $('.menu-toggle-link').click(function(){
        if ($(this).hasClass('active')) {
            return false;
        }
        var type = $(this).attr('data-type');
        $('.menu-toggle-link').toggleClass('active');
        $('.menu__body').hide().removeClass('active');

        var category = $("div[data-type='"+type+"']").show().find('.menu__main a.active').attr('data-category');
        $('.menu__body[data-type="'+type+'"]').addClass('active');
        setSub(category);


        if( $('select.mob-select').length ){
            $('select.mob-select').toggleClass('active');
            $('.menu__full[data-subcategory="'+ $('select.mob-select.active').val() +'"]').show();
            setSubMobile();
        }
    });

    $('select.mob-select').change(function () {
        if( $('.menu-toggle-link').length ){
            setSubMobile();
        }
        $('.menu__full[data-subcategory="'+ $('select.mob-select.active').val() +'"]').show();
    });


    if( $('.menu-toggle-link').length ){
        $('a.menu__title').click(function(){
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            scrollSubBlock.destroy(true, true);
            var category = $(this).attr('data-category');
            if (typeof category !== 'undefined' && $('.scroll_container_sub').length ) {
                scrollBlock.destroy(true, true);
                setSub(category);
            } else {
                var category = $(this).attr('data-subcategory');
                setSubMenu(category);
            }
        });



    }


    if( window.innerWidth >= 1200){

        $('[data-fancybox]').fancybox({
            fullScreen : true,
            closeBtn   : true,
            image : {
                preload : true
            },
            thumbs : {
                showOnStart : true
            },

            afterLoad : function(instance, current) {
                if (current.$slide.attr('class') == 'fancybox-slide fancybox-slide--current fancybox-slide--image') {
                    current.$slide.find('img').attr('src', $(current.opts.$orig[0]).attr('data-origin'));
                }
            },

            beforeMove : function(instance, current, e) {
                $('.fancybox-image').each(function(){
                    var thumb = $(this).attr('thumb');
                    if (typeof thumb == 'undefined' || current.src != thumb) {
                        $(this).css('opacity', '0');
                    }
                });
                current.$slide.find('img').attr('thumb', $(current.opts.$orig[0]).attr('href'))
                    .attr('src', $(current.opts.$orig[0]).attr('data-origin')).css('opacity', '1');


            },

            onComplete : function ( instance, current, e ) {

                $('.fancybox-slide').each(function(){
                    var thumb = $(this).find('img').attr('thumb');
                    if (!$(this).hasClass('fancybox-slide--complete')) {
                        console.log($(this).attr('class'));
                        $(this).find('img').attr('src', thumb).animate({
                            left : 'auto',
                            opacity: '1'
                        });
                    }
                });

                $('.fancybox-slide--complete, .fancybox-slide--current').each(function(){
                    var img_width = parseInt($(this).find('img').width());
                    var wind_width = parseInt(current.$slide.find('.fancybox-placeholder').width());

                    $(this).find('img').attr('src', $(current.opts.$orig[0]).attr('data-origin'));

                    //console.log(current.$slide);
                    if (wind_width - img_width > 80) {
                        var poleft =  parseInt((wind_width - img_width) / 2);
                        $(this).find('img').animate({
                            left : poleft+ 'px'
                        }, 200);
                    }
                });

            }
        });
    } else {

        $('.masonry__item').each(function () {
            $(this).attr('href', $(this).attr('data-origin') );
        });


        $('[data-fancybox]').fancybox({
            fullScreen : true,
            closeBtn   : true,
            image : {
                preload : true
            },
            thumbs : {
                showOnStart : true
            }
            // beforeLoad : function(instance, current) {
            //         current.src = $(current.opts.$orig[0]).attr('data-origin');
            // }
        });
    }






});


function setSub(category) {

    $('.menu__sub').hide();

    var elem = '';
    var type = $('.menu-toggle-link.active').attr('data-type');
    if (typeof type !== 'undefined') {
        elem = "div[data-type='"+type+"'] ";
    }
    $(elem + " div[data-category='"+category+"'] .active").removeClass('active');
    $(elem + " div[data-category='"+category+"']").show().find('a').eq(0).addClass('active');

    var sub = $(elem + " div[data-category='"+category+"']  .active").attr('data-subcategory');
    setSubMenu(sub);
    if(window.innerWidth > 1024){
        var currentCat = $('.menu__body.active').find('div[data-category="'+category+'"]').parent().parent().parent();
        $('.scroll_container .swiper-wrapper').height($(window).height() - $('header').outerHeight() - $('.menu-toggle').outerHeight());
        $(window).resize(function () {
            $('.scroll_container .swiper-wrapper').height($(window).height() - $('header').outerHeight() - $('.menu-toggle').outerHeight());
        });
        window.scrollBlock = new Swiper( currentCat ,{
            scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true
        });
    }
}


function setSubMobile(){

    if( window.innerWidth <= 1024 ){
        $('select.mob-select').hide();
        $('.menu__full').hide();

        var type = $('.menu-toggle-link.active').attr('data-type');
        $('select.mob-select[data-type="'+ type +'"]').show().addClass('active');
        $('div.menu__full[data-subcategory="'+ $('select.mob-select[data-type="'+ type +'"]').val() +'"]').show();
    }
}




function setSubMenu(category) {
    $('.menu__full').hide();

    var elem = '';
    var type = $('.menu-toggle-link.active').attr('data-type');
    if (typeof type !== 'undefined') {
        elem = "div[data-type='"+type+"'] ";
    }

    $(elem + " div[data-subcategory='"+category+"']").show();

    if(window.innerWidth > 1024 && $('.scroll_container_sub').length ){
        var currentSub = $('.menu__body.active').find('div[data-subcategory="'+category+'"]');
        $('.scroll_container_sub .swiper-wrapper').height($(window).height() - $('header').outerHeight() - $('.menu-toggle').outerHeight());
        $(window).resize(function () {
            $('.scroll_container_sub .swiper-wrapper').height($(window).height() - $('header').outerHeight() - $('.menu-toggle').outerHeight());
        });
        window.scrollSubBlock = new Swiper( currentSub ,{
            scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true
        });
    }

}









function stickyContent(targetBlock, stopBlock, offsetTop){
    var a = document.querySelector(targetBlock), b = null, K = null, Z = 0, P = offsetTop, N = 0;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
        var Ra = a.getBoundingClientRect(),
            R1bottom = document.querySelector(stopBlock).getBoundingClientRect().bottom;
        if (Ra.bottom < R1bottom) {
            if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.className = "stop";
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var k = 1; k < l; k++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            var Rb = b.getBoundingClientRect(),
                Rh = Ra.top + Rb.height,
                W = document.documentElement.clientHeight,
                R1 = Math.round(Rh - R1bottom),
                R2 = Math.round(Rh - W);
            if (Rb.height > W) {
                if (Ra.top < K) {  // скролл вниз
                    if (R2 + N > R1) {  // если не дойти до низа
                        if (Rb.bottom-5 - W + N <= 0) {  // подцепиться "-5 фикс высоты"
                            if(navigator.userAgent.search(/Firefox/) > -1){
                                b.className = 'sticky';
                                b.style.top = W - Rb.height + 'px';
                                Z = N + Ra.top + Rb.height - W;
                            }else{
                                b.className = 'sticky';
                                b.style.top = W - Rb.height - N + 'px';
                                Z = N + Ra.top + Rb.height - W;
                            }
                        } else {
                            b.className = 'stop';
                            b.style.top = - Z + 'px';
                        }
                    } else {
                        b.className = 'stop';
                        b.style.top = - R1 +'px';
                        Z = R1;
                    }
                } else {  // скролл вверх
                    if (Ra.top - P < 0) {  // не дойти до верха
                        if (Rb.top - P >= 0) {  // подцепиться
                            b.className = 'sticky';
                            b.style.top = P + 'px';
                            Z = Ra.top - P;
                        } else {
                            b.className = 'stop';
                            b.style.top = - Z + 'px';
                        }
                    } else {
                        b.className = '';
                        b.style.top = '';
                        Z = 0;
                    }
                }
                K = Ra.top;
            } else {
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R1) {
                        b.className = 'stop';
                        b.style.top = - R1 +'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
            }
            window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        }
    }
}
