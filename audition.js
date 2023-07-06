
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .txt-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const scrolled = () => {
  const fpsh = fph - scrollY;
  if(scrollY > 1) {
    $('nav').addClass('active');
    fp.style.height = fpsh + 'px';
  } else{
    $('nav').removeClass('active');
    fp.style.height = 92 +'vh';
  }
  if(scrollY > 100) {
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  } else {
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);







var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
  body = document.querySelector('body');
    menu = document.querySelector('.menu');
    menuItems = document.querySelectorAll('.menu-list-item');
    logo = document.querySelector('.logo');
    applyListeners();
  };

  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'menu-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();