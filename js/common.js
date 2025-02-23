console.log(['common.js'].load);

/* 모바일 100vh 스크롤 문제 해결 */
function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

/* Header 언어선택 메뉴 구현하기 */
const lang = document.querySelector('.lang');
const langList = document.querySelector('.lang-list');

lang.addEventListener('click', function() {
  langList.classList.toggle('active');
})

/* section : menu 탭메뉴 구현하기 */
const tabBtns = document.querySelectorAll('.list-title');
const tabConts = document.querySelectorAll('.menu-slider');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(otherBtn => {
      otherBtn.classList.remove('active');
    });
    tabConts.forEach(othercont => {
      othercont.classList.remove('active');
    });
    tabBtns[index].classList.add('active');
    tabConts[index].classList.add('active');
  });
});

/* section : brand, store 영역 스크롤 이벤트 */
// Intersection Observer 생성
const observer = new IntersectionObserver(
(entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 화면에 들어옴
      entry.target.classList.add("active");
    } 
  });
},
// 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
{ threshold: 0.5 }
);

// 관찰 대상 설정
const brandScroll = document.querySelectorAll(".brand-scroll");
const storeScroll = document.querySelectorAll(".store-scroll");

brandScroll.forEach((element) => {
observer.observe(element);
});
storeScroll.forEach((element) => {
  observer.observe(element);
});


/* section : notice 영역 스크롤 이벤트 */
const noticeScrollEvent = document.querySelector(".notice-bg-inner");

window.addEventListener("scroll", () => {
    const noticeScroll = noticeScrollEvent.getBoundingClientRect();
    
    if (noticeScroll.bottom <= window.innerHeight) {
        noticeScrollEvent.classList.add('active');
    }
});


/* 모바일 헤더 메뉴 slide toggle 만들기 */
$(document).ready(function() {
  $('.dropdown-toggle > a').click(function() {
    const content = $(this).next('.mobile-menu-sub');
    $('.mobile-menu-sub').not(content).slideUp(); //클릭 제외 다른 슬라이더들은 닫기
    content.slideToggle(); //클릭한 섹션은 열기
  })

  $('.dropdown-toggle > a').click(function() {
    $(this).parent().siblings().children('.dropdown-toggle > a').removeClass('active');
    $(this).toggleClass('active');
  })
})

/* 모바일 drawer */
const mobileOpen = document.querySelector('.mobile-open-btn');
const mobileClose = document.querySelector('.mobile-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileOpen.addEventListener('click', function() {
  mobileMenu.classList.add('active');
});
mobileClose.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
})