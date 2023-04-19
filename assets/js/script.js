const discoveryPage = {

  lastScrollTop: 0,

  // Slider Initialization
  initAllSlider: function () {
    // Home Banner Slider
    var homeBannerSlider = new Swiper(".banner-slide", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: 'fraction',
      },
      breakpoints: {
        1366: {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        }
      }
    });

    // For you Slider
    var forYouSlider = new Swiper(".for-you .content-slide", {
      slidesPerView: 'auto',
      freeMode: true,
      breakpoints: {
        1366: {
          slidesPerView: 4,
          freeMode: false,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 463,
          },
        }
      },
      spaceBetween: 8,
      setWrapperSize: true,
    });

    // Best Item Slider
    var bestItemSlider = new Swiper(".best-items .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1366: {
          slidesPerView: 5,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 463,
          },
        }
      },
      slideVisibleClass: 'swiper-slide-visible',
      watchSlidesProgress: true,
    });

    // Collection Slider
    var collectionSlider = new Swiper(".collection .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      breakpoints: {
        1366: {
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 293,
          },
        }
      },
    });

    // New Arrival Slider
    var newArrivalSlider = new Swiper(".new-arrival .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1366: {
          slidesPerView: 5,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 463,
          },
        }
      },
      slideVisibleClass: 'swiper-slide-visible',
      watchSlidesProgress: true,
    });

    // Cateogry Tag Slider
    var categotyTagSlider = new Swiper(".category-tag .content-tag", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      freeMode: true,
      setWrapperSize: true,
    });

    // Trend Tag Slider
    var trentTagSlider = new Swiper(".trend-tag .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      breakpoints: {
        1366: {
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 293,
          },
        }
      },
    });

    // Kid Tag Slider
    var kidTagSlider = new Swiper(".kid-tag .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      breakpoints: {
        1366: {
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 293,
          },
        }
      },
    });

    // Middle Banner Slider
    var middleBannerSlider = new Swiper(".middle-banner", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 80,
      },
      breakpoints: {
        1366: {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        }
      },
    });

    // Video Slider
    var videoSlider = new Swiper(".video .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1366: {
          spaceBetween: 24,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 463,
          },
        }
      },
    });
    videoSlider.on('slideChange', function () {
      $('.video .single-video .video-product-list.active').removeClass('active');
      $('.video .single-video .video-product-icon').removeClass('active');
      $('.style-pick .content-tag').removeClass('disabled');
    });

    // Style Pick Slider
    var stylePickSlider = new Swiper(".style-pick .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1366: {
          spaceBetween: 24,
          navigation: {
            enabled: false
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 463,
          },
        }
      },
    });

    // Discovery Live Slider
    var discoveryLiveSlider = new Swiper(".discovery-live .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1366: {
          spaceBetween: 16,
        }
      },
    });

    // Look Book Slider
    var lookBookSlider = new Swiper(".look-book .content-slide", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1366: {
          slidesPerView: 2,
          spaceBetween: 16,
        }
      },
    });

  },

  // Count Down Timer
  countDownTimer: function () {
    let date = $.trim("2023.04.10").split(".");
    let choosenDate = new Date(date[0] + "-" + date[1] + "-" + date[2]);
    choosenDate.setHours(8, 46, 0, 0);

    function timeChange(element, time) {
      let positions = ["left", "right"];
      for (let i = 0; i < positions.length; i++) {
        if ($("." + element + " h2.time span.time-" + positions[i] + " span.time-bottom").text() != String((time < 10) ? "0" + time : time).charAt(i)) {
          $("." + element + " h2.time span.time-" + positions[i] + " span.time-top").text(String((time < 10) ? "0" + time : time).charAt(i));
          $("." + element + " h2.time span.time-" + positions[i] + " span.time-bottom").addClass("change");
          $("." + element + " h2.time span.time-" + positions[i] + " span.time-top").addClass("change");
          $("." + element + " h2.time span.time-" + positions[i] + " span.time-bottom").on(' webkitAnimationEnd', function () {
            $("." + element + " h2.time span.time-" + positions[i] + " span.time-bottom").removeClass("change");
          });
          $("." + element + " h2.time span.time-" + positions[i] + " span.time-top").on(' webkitAnimationEnd', function () {
            $("." + element + " h2.time span.time-" + positions[i] + " span.time-top").removeClass("change");
            $("." + element + " h2.time span.time-" + positions[i] + " span.time-bottom").text(String((time < 10) ? "0" + time : time).charAt(i));
          });
        }
      }
    }
    let timeCount = setInterval(function () {
      let totalTime = Math.floor((choosenDate - new Date()) / 1000);
      if (totalTime < 0) {
        clearInterval(timeCount);
        $('.launch.time-count').hide();
        $('.launch.launched').show();
      } else {
        let days = Math.floor(totalTime / (60 * 60 * 24));
        let hours = Math.floor(totalTime / (60 * 60) % 24);
        let minutes = Math.floor(totalTime / 60 % 60);
        let seconds = Math.floor(totalTime % 60);

        timeChange("days", days);
        timeChange("hours", hours);
        timeChange("minutes", minutes);
        timeChange("seconds", seconds);
      }
    }, 1000);
  },

  // Handle video block product title length
  videoBlockTitleLength: function () {
    $('.single-video .video-product-title.title-original').each(function () {
      const videoProductName = $(this).text().trim();
      const videoProductNameLength = videoProductName.length;
      const newVideoProductName = videoProductNameLength > 7 ? `${videoProductName.substr(0, 7)}···` : videoProductName;
      $(this).text(newVideoProductName);
    });
  },

  // Handle all DOM events
  handleDomEvents: function () {
    // Hanlde affix top category
    $(window).scroll(function () {
      const currentScroll = $(this).scrollTop();

      if (currentScroll > discoveryPage.lastScrollTop) {
        $('.top-category-container').addClass('sticky');
        $('header').css('opacity', 0);
      } else {
        $('.top-category-container').removeClass('sticky');
        $('header').css('opacity', 1);
        $('header').css('transition-delay', '0.25s');
      }

      discoveryPage.lastScrollTop = currentScroll;
    });

    // Handle open top category
    $('.top-category-container .top-category-icon').click(function () {
      $(this).closest('.top-category-container').find('.top-category-slide').toggleClass('active');
      $(this).closest('.top-category-container').find('.top-category').toggleClass('active');
      $(this).toggleClass('active');
      $('body').toggleClass('disable-scroll');
    });

    // Handle change top category
    $('.top-category .top-category-slide .single-category').click(function () {
      const category = $(this).text();

      $(this).parent().children('.single-category').removeClass('active');
      $(this).addClass('active');


      $('.top-category-container .top-category').removeClass('active');
      $('.top-category-container .top-category-slide').removeClass('active');
      $('.top-category-container .top-category-icon').removeClass('active');
      $('body').removeClass('disable-scroll');

      $('.top-category .top-category-slide .single-category.active')[0].scrollIntoView({
        duration: 2000,
        behavior: 'smooth',
        inline: 'start'
      });
    });

    // Handle open color tooltip
    $('.content-area .card-details .product-colors .more-color').click(function (e) {
      $(this).parent().children('.colors-tooltip').addClass('active');
    });

    // Handle open color tooltip pc
    $('.content-area .card-details .product-colors .more-color-pc').on('mouseover', function (e) {
      $(this).parent().children('.colors-tooltip').addClass('active');
    }).on('mouseout', function () {
      $(this).parent().children('.colors-tooltip').removeClass('active');
    });

    // Handle close color tooltip
    $('.content-area .card-details .product-colors .colors-tooltip .close-tooltip').click(function () {
      $(this).parent().removeClass('active');
    });

    // Handle toggle wishlist
    $('.single-product .wish-list').click(function () {
      $(this).toggleClass('active');
    });

    // Handle change content category
    $('.content-category .single-category').click(function () {
      $(this).parent().children('.single-category').removeClass('active');
      $(this).addClass('active');
    });

    // Handle change category
    $('.category-tag .single-tag').click(function () {
      $(this).parent().children('.single-tag').removeClass('active');
      $(this).addClass('active');
    });

    // Handle open video product list
    $('.video .single-video .video-product-icon').click(function () {
      $(this).closest('.single-video').find('.video-product-list').toggleClass('active');
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $(this).closest('.single-video').find('.video-product-list')[0].scrollIntoView({
          duration: 2000,
          behavior: 'smooth',
          block: 'center'
        });
      };
      $('.style-pick .content-tag').addClass('disabled');
    });

    // Handle play video
    $('.video .single-video .play-video').click(function () {
      $('.video-modal').addClass('active');
      $('body').addClass('disable-scroll');
    });

    // Handle close video
    $('.video-modal .close-video').click(function () {
      $('.video-modal').removeClass('active');
      $('body').removeClass('disable-scroll');
    });
    $('.video-modal').click(function (e) {
      if (e.target.classList.contains('video-modal')) {
        $(this).children('.close-video').click();
      }
    });

    // Handle open live
    $('.discovery-live .single-live').click(function () {
      $('.live-modal').addClass('active');
      $('body').addClass('disable-scroll');
    });

    // Handle close live
    $('.live-modal .back-icon').click(function () {
      $('.live-modal').removeClass('active');
      $('body').removeClass('disable-scroll');
    });

    // Handle change category best items
    $('.best-items .content-category .single-category').click(function () {
      const category = $(this).data('category');
      let message = '';
      switch (category) {
        case 'default':
          message = '베스트 상품 전체보기';
          break;
        case 'men':
          message = '남성 베스트 상품 전체보기';
          break;
        case 'women':
          message = '여성 베스트 상품 전체보기';
          break;
        default:
          message = '베스트 상품 전체보기';
      }

      $(this).closest('.best-items').find('.discovery-text-button').text(message);
    });

    // Hanlde open filter list
    $('.filter-text').click(function (e) {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).parent().find('.filter-icon').addClass('active');
        $(this).parent().children('.filter-list').addClass('active');
      } else {
        $(this).removeClass('active');
        $(this).parent().find('.filter-icon').removeClass('active');
        $(this).parent().children('.filter-list').removeClass('active');
      }
    });
    $('.filter-icon').click(function () {
      $(this).closest('.content-area').find('.filter-text').click();
    });
    $('main').click(function (e) {
      if (!e.target.classList.contains('filter-text') && !e.target.classList.contains('filter-icon')) {
        $('.filter-text').removeClass('active');
        $('.filter-list').removeClass('active');
        $('.filter-icon').removeClass('active');
      }
      if (e.target.offsetParent && !e.target.offsetParent.classList.contains('video-product-icon')) {
        if (!e.target.classList.contains('video-product-list') && !e.target.offsetParent.classList.contains('video-product-list')) {
          $('.video .single-video .video-product-list.active').removeClass('active');
          $('.video .single-video .video-product-icon').removeClass('active');
          $('.style-pick .content-tag').removeClass('disabled');
        }
      }
    });

    // Hanlde select filter
    $('.filter-list .filter-option').click(function () {
      const optionText = $(this).text();
      $(this).closest('.content-area').find('.filter-text').text(optionText);
      $('.content-area .filter-list .filter-option').removeClass('active');
      $(this).addClass('active');
    });

    // Hanlde Top Button Click
    $('.top-button').click(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  start: function () {
    this.initAllSlider();
    this.countDownTimer();
    this.videoBlockTitleLength();
    this.handleDomEvents();
  }
};

$(document).ready(function () {
  discoveryPage.start();
});