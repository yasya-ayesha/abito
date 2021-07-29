const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
});
  
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
const menuCloseBtn = document.querySelector('.close-menu');
const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
    `;
};
const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    });
};

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    disableScroll();
});
menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    enableScroll();
});

