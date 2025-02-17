console.log(['common.js'].load);


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
