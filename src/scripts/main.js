let menu = document.querySelector(".menu")

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
  breakpoints: {
    200:{
      slidesPerView:1,
      spaceBetween:0,
    },
    300:{
      slidesPerView: 1,
      spaceBetween: 5,
    },
    400:{
      slidesPerView: 2,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});

  function scrollRolagem(){
    window.addEventListener('scroll', function() {
        
        if (window.scrollY >= 300) {
          menu.style.backgroundColor='rgb(24, 24, 24)'
          
        }else{
            menu.style.backgroundColor='transparent'
        }
      }, {passive: true});
    }scrollRolagem();
  