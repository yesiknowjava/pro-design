$( document ).ready(function() {

  // Sticky Navbar 
  var stickyNavTop = $('header').offset().top;
  var stickyNav = function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 1) { 
          $('header').addClass('sticky');
      } else {
          $('header').removeClass('sticky'); 
      }
  };
  stickyNav();
  $(window).scroll(function() { stickyNav(); }); 


    // Home Slider

    //$('#intro-slider').slick({
      //slidesToShow: 1,
      //arrows: false,
      //fade: true,
      //infinite: true,
      //dots: false,
      //adaptiveHeight: true,
      //autoplay: true,
      //autoplaySpeed: 5000,
    //});



    // Expertise > Maitre Paysagiste > Steps slider

    $('#slider-etapes').slick({
      slidesToShow: 4,
      arrows: true,
      fade: false,
      infinite: true,
      dots: false,
      nextArrow: '<i class="fas fa-arrow-right"></i>',
      prevArrow: '<i class="fas fa-arrow-left"></i>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: true
          }
        },
      ]
    });    



    // Portfolio Single Slider

    $('.portfolio-single-slider, .overlaySlider').slick({
      slidesToShow: 1,
      arrows: true,
      fade: true,
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: '<i class="fas fa-arrow-right"></i>',
      prevArrow: '<i class="fas fa-arrow-left"></i>'
    });  


    // Slider Textures

    $('.slider-textures-nav').slick({
      slidesToShow: 4,
      asNavFor: '.slider-textures',
      vertical: true,
      focusOnSelect: true,
      autoplay: false,
      centerMode: true
    });    

    $('.slider-textures').slick({
      slidesToShow: 1,
      focusOnSelect: false,
      autoplay: false,
      centerMode: false,
      fade: true,
      arrows: false
    });  

    $('.slider-textures2').slick({
      slidesToShow: 1,
      focusOnSelect: false,
      autoplay: false,
      centerMode: false,
      fade: true,
      arrows: false
    }); 

    $('.slider-textures3').slick({
      slidesToShow: 1,
      focusOnSelect: false,
      autoplay: false,
      centerMode: false,
      fade: true,
      arrows: false
    }); 

    $('.slider-textures4').slick({
      slidesToShow: 1,
      focusOnSelect: false,
      autoplay: false,
      centerMode: false,
      fade: true,
      arrows: false
    }); 




  // Slider installation

  if ( $('.product__slider-main').length ) {
        var $slider = $('.product__slider-main')
            .on('init', function(slick) {
                $('.product__slider-main').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                fade: true,
                arrows: true,
                autoplay: true,
                adaptiveHeight: true,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                asNavFor: '.product__slider-thmb',
                pauseOnHover: true,
                pauseOnFocus: true,
                nextArrow: '<i class="fas fa-arrow-right"></i>',
                prevArrow: '<i class="fas fa-arrow-left"></i>'
            });

    var $slider2 = $('.product__slider-thmb')
            .on('init', function(slick) {
                $('.product__slider-thmb').fadeIn(1000);
            })
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                lazyLoad: 'ondemand',
                asNavFor: '.product__slider-main',
                dots: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true,
                pauseOnHover: true,
                pauseOnFocus: true,
                rtl: true
            });

       //remove active class from all thumbnail slides
       $('.product__slider-thmb .slick-slide').removeClass('slick-active');

       //set active class to first thumbnail slides
       $('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

       // On before slide change match active thumbnail to current slide
       $('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.product__slider-thmb .slick-slide').removeClass('slick-active');
        $('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
      });
         
    } 


    /* Contact Btn Career */
    $('.btn-career').click(
         function(e){ 
          e.preventDefault();   
          $('.form-career').toggleClass('open');
          $('.plus-icon').toggleClass('fa-minus fa-plus');
        },
    )

    /* Mobile Close Button */
    $('.navbar-toggler, .navbar-toggler-close').click(
         function(e){ 
          e.preventDefault();   
          $('.navbar-toggler-close').toggleClass('show');
        },
    )
    


  // Blog Slider

  $('.aBlogRow').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    dots: false,
    prevArrow: '<img src="assets/images/arrow-left.svg" class="arrow-left" alt="" />',
    nextArrow: '<img src="assets/images/arrow-right.svg" class="arrow-right" alt="" />',
     responsive: [
      {
          //breakpoint: 9999,
          //settings: "unslick"
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          settings: "slick"
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          settings: "slick"
        }
      }
    ],
  });    


  // Logos Footer

  $('.logosFooter').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
     responsive: [
      {
          breakpoint: 9999,
          settings: "unslick"
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          settings: "slick"
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          settings: "slick"
        }
      }
    ],
  });  




  //Steps accordion
  $(".steps-accordion .accordion-content").hide();

  $(".steps-accordion .accordion-title").click(function(){

    if ( $(this).hasClass( "active" ) ) {
      $('.accordion-title').removeClass('active');
    } else {
      $('.accordion-title').removeClass('active');
      $(this).addClass('active');
    }

    $(this).next().slideToggle().siblings(".accordion-content:visible").slideUp();

  });

  //$(".steps-accordion .accordion-content.first").show();
  //$(".steps-accordion .accordion-title.first").addClass('active');  



});