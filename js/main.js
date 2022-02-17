var pcEl = window.matchMedia("screen and (min-width:1280px)")
var tabEl = window.matchMedia("screen and (min-width:768px) and (max-width: 1279px)")
var mobEl = window.matchMedia("screen and (max-width:768px)");

window.addEventListener('orientationchange', function () { 
  location.reload();      
});
if (pcEl.matches) {
  $(document).ready(() => {
    badgeAnimate();
    visualImg();
    swiperF();
    swiperS();
    swiperFooter();
    promotion();
    scrollAnimate();
    findYear();
    toTop();
  });
} else if (tabEl.matches) {
  $(document).ready(() => {
    badgeAnimate();
    visualImg();
    swiperF();
    swiperS();
    swiperFooter();
    promotion();
    scrollAnimate();
    findYear();
    toTop();
  });
} else if (mobEl.matches) { 
  $(document).ready(() => {
    // badgeAnimate();
    visualImg();
    swiperF();
    mobswiperS();
    mobswiperFooter();
    promotion();
    scrollAnimate();
    findYear();
    // toTop();
    toggleMenu();
  });  
}
// !badge animate
function badgeAnimate() {
  var $badges = $('.badges');
  window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 400 ){
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
    slidesPerView: 1,
    autoplay: true,
    loop: true,
  });
}

// ! section:nth-of-type(2) div:nth-of-type(2)
function swiperS() {
  new Swiper('section:nth-of-type(2) > div:nth-of-type(2) .swiper-container', {
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
function mobswiperS() {
  new Swiper('section:nth-of-type(2) > div:nth-of-type(2) .swiper-container', {
    slidesPerView: 1,
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
  });
}
function swiperFooter() { 
  new Swiper('footer .inner .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    }
    // navigation: {
    //   prevEl: "footer .inner .swiper-container .swiper-prev",
    //   nextEl: "footer .inner .swiper-container .swiper-next",
    // },
  });
}
function mobswiperFooter() { 
  new Swiper('footer .inner .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 3000,
    }
    // navigation: {
    //   prevEl: "footer .inner .swiper-container .swiper-prev",
    //   nextEl: "footer .inner .swiper-container .swiper-next",
    // },
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
// ! scroll animate
function scrollAnimate() { 
  var spyEl = $('section.scroll-spy');
  spyEl.each(function (index, el) { 
    new ScrollMagic
      .Scene({
        triggerElement: el,
        triggerHook: 0.8,
      })
      .setClassToggle(el, 'show')
      .addTo(new ScrollMagic.Controller());
  });

}
// footer year auto change logic
function findYear() { 
  var thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();
}

var topBtn = $('.to-top');
function toTop() { 
  window.addEventListener('scroll', toTopScroll);
  topBtn.click(topBtnAction);
}
function toTopScroll() { 
  if (window.scrollY > 400) {
    gsap.to(topBtn,0.5,{
      opacity: 1,
      right: 30,
    })
  } else { 
    gsap.to(topBtn,0.5,{
      opacity: 0,
      right: -100,
    })
  }
}
function topBtnAction() { 
  $('html,body').animate({ scrollTop: 0 }, 600);
}
// ! 메뉴 토글
var $menuToggle = $('span.material-icons.menu');
var $menuSlide = $('div.slide');
var $menuX = $('div.slide span.material-icons');
var toggle = false;
function toggleMenu()
{ 
  $menuToggle.click(toggleAction);
}
function toggleAction()
{
  toggle = !toggle;
  if (toggle) {
    $menuSlide.css('right', 0);
  }
  $menuX.click(function () { 
    $menuSlide.css('right', -9999);
    toggle = !toggle;
  });
}