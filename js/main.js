$(document).ready(() => { 
  badgeAnimate();
  visualImg();
  swiperF();
  swiperS();
  promotion();
});
// !badge animate
function badgeAnimate() {
  var $badges = $('.badges');
  window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500 ){
      gsap.to($badges, 0.5, {
        opacity: 0,
        display: 'none',
      });
    }
    else {
      gsap.to($badges, 0.5, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300));
}
// ! section:first-of-type visual img animate
function visualImg() { 
  var $fadeImg = $('section:first-of-type .inner .fade-in');
   $fadeImg.each(function (index, el) {
    gsap.to(el, 1, {
      delay: (index + 1) * 0.5,
      opacity: 1,
    });
  });
}
// ! section:nth-of-type(2) div.swiper-container
function swiperF() {
  new Swiper(" section:nth-of-type(2) > div:nth-of-type(1) .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
  });
}
// ! section:nth-of-type(2) div:nth-of-type(2)
function swiperS() {
  new Swiper('section:nth-of-type(2) > div:nth-of-type(2) .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: 'section:nth-of-type(2) > div:nth-of-type(2) .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: "section:nth-of-type(2) > div:nth-of-type(2) .swiper-prev",
      nextEl: "section:nth-of-type(2) > div:nth-of-type(2) .swiper-next",
    },
  });
}
// ! promotion logic
var $promotionEl, $promotionToggleBtn, isHidePromotion;
function promotion() { 
  promotionInit();
  promotionEvent();
}
function promotionInit() { 
  $promotionEl = $('section:nth-of-type(2) > div:nth-of-type(2)');
  $promotionToggleBtn = $('section:nth-of-type(2) > div:nth-of-type(1) .inner__right > a');
  isHidePromotion = false;
}
function promotionEvent() { 
  $promotionToggleBtn.click(promotionToggle);
}
function promotionToggle() { 
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    $promotionEl.addClass('hide');
  } else { 
    $promotionEl.removeClass('hide');
  }
}


// ! section-nth-of-type(4) .inner img
function floating(selector) { 
  
}
