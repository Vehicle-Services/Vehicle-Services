;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {

        // Main Banner Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/mechonbanner.default',function($scope) {

            let $banner = $scope.find('.as-hero-wrapper');
            $banner.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
                
            });
           $('.as-carousel').each(function () {
            var asSlide = $(this);

            // Collect Data 
            function d(data) {
              return asSlide.data(data);
            }

            // Custom Arrow Button
            var prevButton = '<button type="button" class="slick-prev"><i class="' + d('prev-arrow') + '"></i></button>',
              nextButton = '<button type="button" class="slick-next"><i class="' + d('next-arrow') + '"></i></button>';

            // Function For Custom Arrow Btn 
            $('[data-slick-next]').each(function () {
              $(this).on('click', function (e) {
                e.preventDefault()
                $($(this).data('slick-next')).slick('slickNext');
              })
            })

            $('[data-slick-prev]').each(function () {
              $(this).on('click', function (e) {
                e.preventDefault()
                $($(this).data('slick-prev')).slick('slickPrev');
              })
            })

            // Check for arrow wrapper
            if (d('arrows') == true) {
              if (!asSlide.closest('.arrow-wrap').length) {
                asSlide.closest('.container').parent().addClass('arrow-wrap')
              }
            }
          });

          /*----------- Custom Animaiton For Slider ----------*/
          $('[data-ani-duration]').each(function () {
            var durationTime = $(this).data('ani-duration');
            $(this).css('animation-duration', durationTime);
          });
          
          $('[data-ani-delay]').each(function () {
            var delayTime = $(this).data('ani-delay');
            $(this).css('animation-delay', delayTime);
          });
          
          $('[data-ani]').each(function () {
            var animaionName = $(this).data('ani');
            $(this).addClass(animaionName);
            $('.slick-current [data-ani]').addClass('as-animated');
          });
          
          $('.as-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $(slick.$slides).find('[data-ani]').removeClass('as-animated');
            $(slick.$slides[currentSlide]).find('[data-ani]').addClass('as-animated');
          });

          if ($('[data-bg-src]').length > 0) {
            $('[data-bg-src]').each(function () {
              var src = $(this).attr('data-bg-src');
              $(this).css('background-image', 'url(' + src + ')');
              $(this).removeAttr('data-bg-src').addClass('background-image');
            });
          };  
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/mechonexperiencebox.default',function($scope) {
           $('.counter-number').counterUp({
                delay: 10,
                time: 1000
            });
            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/mechonservice.default',function($scope) {
            let $slickcarousels = $scope.find('.service_slider_1');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            let $slickcarousels2 = $scope.find('.service_slider_2');
            $slickcarousels2.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            }; 
            
        }); 

        elementorFrontend.hooks.addAction('frontend/element_ready/mechonteam.default',function($scope) {
            let $teamarousels1 = $scope.find('.team_slider_1');
            $teamarousels1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            let $teamarousels2 = $scope.find('.team_slider_2');
            $teamarousels2.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            }; 
            
        });  

        elementorFrontend.hooks.addAction('frontend/element_ready/mechoncounterup.default',function($scope) {
            let $counter1 = $scope.find('.counter_1');
            $counter1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
            $('.counter-number-1').counterUp({
                delay: 10,
                time: 1000
            });
        });
        

        elementorFrontend.hooks.addAction('frontend/element_ready/mechonproductslider.default',function($scope) {
            let $product_slider1 = $scope.find('.prod-slider');
            $product_slider1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });   
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechonblogpost.default',function($scope) {
            let $blogcarousels1 = $scope.find('.blog_slider1');
            $blogcarousels1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1356,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });   
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechonclientlogo.default',function($scope) {
            let $logocarousels1 = $scope.find('.partner_logo_slider');
            $logocarousels1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });   
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechongalleryfilter.default',function($scope) {
            let $lprojectsliderrousels1 = $scope.find('.project-sliders');
            $lprojectsliderrousels1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
                
            });
            if ($('.tab-menu2').length) {
                $('.tab-menu2').indicator();
            }
            $('[data-slick-prev]').each(function () {
              $(this).on('click', function (e) {
                e.preventDefault()
                $($(this).data('slick-prev')).slick('slickPrev');
              })
            });

            $('.filter-active').imagesLoaded(function () {
            var $filter = '.filter-active',
                $filter2 = '.filter-active-style2',
                $filterItem = '.filter-item',
                $filterMenu = '.filter-menu-active';

            if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: '*',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: $filterItem
                    }
                });
            }

            if ($($filter2).length > 0 ) {
                var $grid = $($filter2).isotope({
                    itemSelector: $filterItem,
                    filter: '*',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                    columnWidth: 1
                    }
                });
            };

            // Menu Active Class
            $($filterMenu).on('click', 'button', function (event) {
                event.preventDefault();
                $(this).addClass('active');
                $(this).siblings('.active').removeClass('active');
            });


          });
            // var postionHandler = '[data-sec-pos]';
            // if ($(postionHandler).length) {
            //     $(postionHandler).imagesLoaded(function () {
            //       $(postionHandler).sectionPosition('data-sec-pos', 'data-pos-for');
            //     });
            // }
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechonclientlogo.default',function($scope) {
            if ($('.tab-menu1').length) {
                $('.tab-menu1').indicator();
            }   
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechonskillbox.default',function($scope) {
            function animateElements() {
                $('.progressbar').each(function () {
                var elementPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                var percent = $(this).find('.circle').attr('data-percent');
                var percentage = parseInt(percent, 10) / parseInt(100, 10);
                var animate = $(this).data('animate');
                if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                  $(this).data('animate', true);
                  $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 135,
                    thickness: 7,
                    emptyFill: "#434653",
                    fill: {
                      color: '#E81C2E'
                    }
                  }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.circle-num').text((stepValue*100).toFixed(0) + "%");
                  }).stop();
                }
              });
            }
            // Show animated elements
            animateElements();
            $(window).scroll(animateElements);

            $('.progress-bar').waypoint(function() {
              $('.progress-bar').css({
              animation: "animate-positive 1.8s",
              opacity: "1"
              });
            }, { offset: '75%' });
            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/mechontestimonialslider.default',function($scope) {
            let $slicktesticarousels1 = $scope.find('.testi-slider1');
            $slicktesticarousels1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

            let $slicktesticarousels2 = $scope.find('.testi-card-slide');
            $slicktesticarousels2.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
            let $slicktesticarousels5 = $scope.find('.testi-card-slide_3');
            $slicktesticarousels5.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                    }
                }
                ]
            });
        });



    });
}(jQuery));