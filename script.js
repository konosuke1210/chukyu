$(function() {
    $('.faq-list-item').click(function() {
        var $answer = $(this).find('.faq-answer');
        if($answer.hasClass('open')) { 
          $answer.removeClass('open');
          // slideUpメソッドを用いて、$answerを隠してください
          $answer.slideUp();
    
          // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

          
          
        } else {
          $answer.addClass('open'); 
          // slideDownメソッドを用いて、$answerを表示してください
          $answer.slideDown();
    
          
          // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

          
        }
      });
      

    var mySwiper = new Swiper ('.swiper-container', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 56,
      initialSlide: 1,
      breakpoints: {
        414: {
          slidesPerView: 1.5,
        },
        // 768px以上の場合
        768: {
          slidesPerView: 3.5,
        },
      }
    });

    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    
    });

