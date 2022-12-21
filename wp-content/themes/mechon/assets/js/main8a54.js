(function ($) {
  "use strict";
  /*=================================
      JS Index Here
  ==================================*/
  /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image
    07. Hero Slider Active 
    08. Popup Sidemenu   
    09. Search Box Popup
    10. Magnific Popup
    11. Section Position
    12. Filter
    13. Date Time Picker
    14. Counter Up
    15. Indicator
    16. Slick Refresh
    17. VS Tab
    18. Circle Progress
    19. Price Slider
    00. Woocommerce Toggle
    00. Right Click Disable
    00. Inspect Element Disable
  */
  /*=================================
      JS Index End
  ==================================*/
  /*

  /*---------- 01. On Load Function ----------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });



  /*---------- 02. Preloader ----------*/
  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };

  /*---------- 03. Mobile Menu Active ----------*/
  $.fn.vsmobilemenu = function (options) {
    var opt = $.extend({
      menuToggleBtn: '.as-menu-toggle',
      bodyToggleClass: 'as-body-visible',
      subMenuClass: 'as-submenu',
      subMenuParent: 'as-item-has-children',
      subMenuParentToggle: 'as-active',
      meanExpandClass: 'as-mean-expand',
      appendElement: '<span class="as-mean-expand"></span>',
      subMenuToggleClass: 'as-open',
      toggleSpeed: 400,
    }, options);

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = '.' + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css('display', 'none')
            $(this).parent().removeClass(opt.subMenuParentToggle);
          };
        });
      };

      // Class Set Up for every submenu
      menu.find('li').each(function () {
        var submenu = $(this).find('ul');
        submenu.addClass(opt.subMenuClass);
        submenu.css('display', 'none');
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev('a').append(opt.appendElement);
        submenu.next('a').append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next('ul').slideToggle(opt.toggleSpeed);
          $($element).next('ul').toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev('ul').slideToggle(opt.toggleSpeed);
          $($element).prev('ul').toggleClass(opt.subMenuToggleClass);
        };
      };

      // Submenu toggle Button
      var expandToggler = '.' + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on('click', function () {
          menuToggle();
        })
      })

      // Hide Menu On out side click
      menu.on('click', function (e) {
        e.stopPropagation();
        menuToggle()
      })

      // Stop Hide full menu on menu click
      menu.find('div').on('click', function (e) {
        e.stopPropagation();
      });

    });
  };

  $('.as-menu-wrapper').vsmobilemenu();


  /*---------- 04. Sticky fix ----------*/
  var lastScrollTop = '';
  var scrollToTopBtn = '.scrollToTop';

  function stickyMenu($targetMenu, $toggleClass, $parentClass) {
    var st = $(window).scrollTop();
    var height = $targetMenu.css('height');
    $targetMenu.parent().css('min-height', height);
    if ($(window).scrollTop() > 800) {
      $targetMenu.parent().addClass($parentClass);

      if (st > lastScrollTop) {
        $targetMenu.removeClass($toggleClass);
      } else {
        $targetMenu.addClass($toggleClass);
      };
    } else {
      $targetMenu.parent().css('min-height', '').removeClass($parentClass);
      $targetMenu.removeClass($toggleClass);
    };
    lastScrollTop = st;
  };
  $(window).on("scroll", function () {
    stickyMenu($('.sticky-active'), "active", "will-sticky");
    if ($(this).scrollTop() > 500) {
      $(scrollToTopBtn).addClass('show');
    } else {
      $(scrollToTopBtn).removeClass('show');
    }
  });


  /*---------- 05. Scroll To Top ----------*/
  $(scrollToTopBtn).each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, lastScrollTop / 3);
      return false;
    });
  });

  /*---------- 08. Popup Sidemenu ----------*/
  function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
    // Sidebar Popup
    $($sideMunuOpen).on('click', function (e) {
      e.preventDefault();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenu).on('click', function (e) {
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls)
    });
    var sideMenuChild = $sideMenu + ' > div';
    $(sideMenuChild).on('click', function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls)
    });
    $($sideMenuCls).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  };
  popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');


  /*---------- 09. Search Box Popup ----------*/
  function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
    $($searchOpen).on('click', function (e) {
      e.preventDefault();
      $($searchBox).addClass($toggleCls);
    });
    $($searchBox).on('click', function (e) {
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
    $($searchBox).find('form').on('click', function (e) {
      e.stopPropagation();
      $($searchBox).addClass($toggleCls);
    });
    $($searchCls).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
  };
  popupSarchBox('.popup-search-box', '.searchBoxToggler', '.searchClose', 'show');


  /*----------- 10. Magnific Popup ----------*/
  /* magnificPopup img view */
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  /* magnificPopup video view */
  $('.popup-content').magnificPopup({
    type: 'inline',
    midClick: true,
  });


  /*---------- 11. Section Position ----------*/
  // Interger Converter
  function convertInteger(str) {
    return parseInt(str, 10)
  }

  $.fn.sectionPosition = function (mainAttr, posAttr) {
    $(this).each(function () {
      var section = $(this);

      function setPosition() {
        var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
          posData = section.attr(mainAttr), // where to position
          posFor = section.attr(posAttr), // On Which section is for positioning  
          topMark = 'top-half', // Pos top
          bottomMark = 'bottom-half', // Pos Bottom
          parentPT = convertInteger($(posFor).css('padding-top')), // Default Padding of  parent
          parentPB = convertInteger($(posFor).css('padding-bottom')); // Default Padding of  parent

        if (posData === topMark) {
          $(posFor).css('padding-bottom', parentPB + sectionHeight + 'px');
          section.css('margin-top', "-" + sectionHeight + 'px');
        } else if (posData === bottomMark) {
          $(posFor).css('padding-top', parentPT + sectionHeight + 'px');
          section.css('margin-bottom', "-" + sectionHeight + 'px');
        }
      }
      setPosition(); // Set Padding On Load
    })
  }

  var postionHandler = '[data-sec-pos]';
  if ($(postionHandler).length) {
    $(postionHandler).imagesLoaded(function () {
      $(postionHandler).sectionPosition('data-sec-pos', 'data-pos-for');
    });
  }

  /* Negative margin space --------------------------*/
  
  $.fn.sectionSpace = function (mainAttr, posAttr) {
    $(this).each(function () {
      var section = $(this);

      function setSpace() {
          var posData = section.attr(mainAttr), // where to position
          posFor = section.attr(posAttr), // On Which section is for positioning  
          topMark = "margin-top", // Pos top
          bottomMark = "margin-bottom", // Pos Bottom
          dataMt = section.data('margin-top'),
          dataMb = section.data('margin-bottom'),
          parentPT = convertInteger($(posFor).css('padding-top')), // Default Padding of  parent
          parentPB = convertInteger($(posFor).css('padding-bottom')); // Default Padding of  parent

        if (posData === topMark) {
          $(posFor).css('padding-bottom', parentPB + convertInteger(dataMt) + 'px');
          section.css('margin-top', "-" + convertInteger(dataMt) + 'px').css({'position': 'relative', 'z-index': '3'});
        } else if (posData === bottomMark) {
          $(posFor).css('padding-top', parentPT + convertInteger(dataMb) + 'px');
          section.css('margin-bottom', "-" + convertInteger(dataMb) + 'px').css({'position': 'relative', 'z-index': '3'});
        }
      }
      setSpace(); // Set Padding On Load
    })
  }

  var spaceHandler = '[data-sec-space]';
  if ($(spaceHandler).length) {
    $(spaceHandler).imagesLoaded(function () {
      $(spaceHandler).sectionSpace('data-sec-space', 'data-pos-space');
    });
  }

  /*----------- 12. Filter ----------*/
  $('.search-active').imagesLoaded(function () {
    var $filter = '.search-active',
      $filterItem = '.filter-item',
      $filterMenu = '.filter-menu-active';

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: '*',
      });

      // filter items on button click
      $($filterMenu).on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });

      // Menu Active Class 
      $($filterMenu).on('click', 'button', function (event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings('.active').removeClass('active');
      });
    };
  });

  $('.filter-active').imagesLoaded(function () {
    var $filter = '.filter-active',
      $filterItem = '.filter-item',
      $filterMenu = '.filter-menu-active';

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: '*',
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        }
      });

      // filter items on button click
      $($filterMenu).on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });

      // Menu Active Class 
      $($filterMenu).on('click', 'button', function (event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings('.active').removeClass('active');
      });
    };
  });

  
  /*----------- 15. Indicator ----------*/
  // Indicator
  $.fn.indicator = function () {
    var $menu = $(this),
      $linkBtn = $menu.find('a'),
      $btn = $menu.find('button');
    // Append indicator
    $menu.append('<span class="indicator"></span>');
    var $line = $menu.find('.indicator');
    // Check which type button is Available
    if ($linkBtn.length) {
      var $currentBtn = $linkBtn;
    } else if ($btn.length) {
      var $currentBtn = $btn
    }
    // On Click Button Class Remove
    $currentBtn.on('click', function (e) {
      e.preventDefault();
      $(this).addClass('active');
      $(this).siblings('.active').removeClass('active');
      linePos()
    })
    // Indicator Position
    function linePos() {
      var $btnActive = $menu.find('.active'),
        $height = $btnActive.css('height'),
        $width = $btnActive.css('width'),
        $top = $btnActive.position().top + 'px',
        $left = $btnActive.position().left + 'px';
      $line.css({
        top: $top,
        left: $left,
        width: $width,
        height: $height,
      })
    }
    linePos()
  }

  // Call On Load
  if ($('.tab-menu2').length) {
    $('.tab-menu2').indicator();
  }

  /*----------- 16. Slick Refresh ----------*/
  // Set position when click on bootstrap Tab
  $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.as-carousel').slick('setPosition');
  });
  /*----------- 19. Price Slider ----------*/
    $(".price_slider").slider({
      range: true,
      min: 10,
      max: 100,
      values: [10, 75],
      slide: function (event, ui) {
        $(".from").text("$" + ui.values[0]);
        $(".to").text("$" + ui.values[1]);
      }
    });
    $(".from").text("$" + $(".price_slider").slider("values", 0));
    $(".to").text("$" + $(".price_slider").slider("values", 1));



  // Quantity Plus Minus ---------------------------

  /*---------- Quantity Added ----------*/
  $(document).on('click', '.quantity-plus, .quantity-minus', function(e) {
    e.preventDefault();
    // Get current quantity values
    var qty = $(this).closest('.quantity, .product-quantity').find('.qty-input');
    var val = parseFloat(qty.val());
    var max = parseFloat(qty.attr('max'));
    var min = parseFloat(qty.attr('min'));
    var step = parseFloat(qty.attr('step'));

    // Change the value if plus or minus
    if ($(this).is('.quantity-plus')) {
        if (max && (max <= val)) {
            qty.val(max);
        } else {
            qty.val(val + step);
        }
    } else {
        if (min && (min >= val)) {
            qty.val(min);
        } else if (val > 0) {
            qty.val(val - step);
        }
    }
    $('.cart_table button[name="update_cart"]').prop('disabled', false);
  });

// // Cart Show 
$('.cart-button').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.shopping-cart-wrapper').toggleClass('show');
});
  $('.as-blog-carousel').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow" style=""><i class="fal fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow" style=""><i class="fal fa-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [ {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            arrows: false,
           }
        }
    ]
});
  $('.product-img-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      fade: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,

  });
  $('.related-products-carousel').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow" style=""><i class="fal fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow" style=""><i class="fal fa-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [ {
        breakpoint: 1500,
        settings: {
            slidesToShow: 3,
            arrows: false,
        }
        },{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            arrows: false,
        }
        },{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            arrows: false,
        }
        }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            arrows: false,
           }
        }
    ]
});
  /*---------- 17. VS Tab ----------*/
  $.fn.vsTab = function (options) {
    var opt = $.extend({
      sliderTab: false,
      tabButton: 'button'
    }, options);

    $(this).each(function () {
      var $menu = $(this);
      var $button = $menu.find(opt.tabButton);

      // Append indicator
      $menu.append('<span class="indicator"></span>');
      var $line = $menu.find('.indicator');

      // On Click Button Class Remove and indecator postion set
      $button.on('click', function (e) {
        e.preventDefault();
        var cBtn = $(this);
        cBtn.addClass('active').siblings().removeClass('active');
        if (opt.sliderTab) {
          $(slider).slick('slickGoTo', cBtn.data('slide-go-to'));
        } else {
          linePos();
        }
      })

      // Work With slider
      if (opt.sliderTab) {
        var slider = $menu.data('asnavfor'); // select slider

        // Select All button and set attribute
        var i = 0;
        $button.each(function () {
          var slideBtn = $(this);
          slideBtn.attr('data-slide-go-to', i)
          i++

          // Active Slide On load > Actived Button
          if (slideBtn.hasClass('active')) {
            $(slider).slick('slickGoTo', slideBtn.data('slide-go-to'));
          }

          // Change Indicator On slide Change
          $(slider).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $menu.find(opt.tabButton + '[data-slide-go-to="' + nextSlide + '"]').addClass('active').siblings().removeClass('active');
            linePos();
          });
        })

      };

      // Indicator Position
      function linePos() {
        var $btnActive = $menu.find(opt.tabButton + '.active'),
          $height = $btnActive.css('height'),
          $width = $btnActive.css('width'),
          $top = $btnActive.position().top + 'px',
          $left = $btnActive.position().left + 'px';

        $line.get(0).style.setProperty('--height-set', $height);
        $line.get(0).style.setProperty('--width-set', $width);
        $line.get(0).style.setProperty('--pos-y', $top);
        $line.get(0).style.setProperty('--pos-x', $left);

        if ($($button).first().position().left == $btnActive.position().left) {
          $line.addClass('start').removeClass('center').removeClass('end');
        } else if ($($button).last().position().left == $btnActive.position().left) {
          $line.addClass('end').removeClass('center').removeClass('start');
        } else {
          $line.addClass('center').removeClass('start').removeClass('end');
        }
      }
      linePos();
    })
  };

  if ($('.testi-card-tab').length) {
      $('.testi-card-tab').vsTab({
        sliderTab: true,
        tabButton: '.tab-btn'
      });
  };
  /*----------- 13. Date Time Picker ----------*/
  // Only Date Picker
  $('.date-pick').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'd-m-y',
    step: 10
  });

  // Only Time Picker
  $('.time-pick').datetimepicker({
    datepicker:false,
    format:'H:i',
    step:30
  });

})(jQuery);