console.log(['slider.js'].load);

const visualSlider = new Swiper('.visual-slider.swiper', {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생 유지
  },
  slidesPerView : '1', // 한 슬라이드에 보여줄 갯수
  pagination: {
    el: '.swiper-pagination',
  },
  mouseWheel: true,
  keyboard: true,
  effect: 'fade', // 페이드 인/아웃 효과
  speed: 1500,
  loop : true,   // 슬라이드 반복 여부
  watchOverflow: true,// 슬라이드가 화면을 넘어갈 때의 처리 설정
  fadeEffect: { crossFade: true },
  // mousewheel: {  // 마우스휠 허용
  //   invert: false,
  // },
});

const menuSlider = new Swiper('.menu-slider .swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  // slidesPerView : '4', // 한 슬라이드에 보여줄 갯수
  // slidesPerGroup : '1', //한번에 슬라이딩될 개수
  // spaceBetween : 24, //아이템 사이 간격
  initialSlide: 1,
  mouseWheel: true,
  keyboard: true,
  loop: false,
  freemode: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints:{
      375: {
        slidesPerView : '1',
        spaceBetween : 16, //아이템 사이 간격
      },
      390: {
        slidesPerView : '2',
        spaceBetween : 16, //아이템 사이 간격
      },
      780: {
        slidesPerView : '3',
        spaceBetween : 24, //아이템 사이 간격
      },
      1024 : {
        slidesPerView : '4',
        spaceBetween : 24, //아이템 사이 간격
      },
  },
});