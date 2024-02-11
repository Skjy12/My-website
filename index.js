var swiper = new Swiper(".prodcut-slider", {
    loop:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3
       
      },
    },
  });