$(function() {
  // 메인 비쥬얼 슬라이드
  var swiper = new Swiper(".visual", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".visual-pagenation",
      type: "fraction",
    },
    navigation: {
      prevEl: ".visual-prev",
      nextEl: ".visual-next",
    },
  });

  $(".visual-stop").on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".visual-start").
    addClass("on");
  })

  $(".visual-start").on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".visual-stop").
    addClass("on");
  })

  // 카드 슬라이드
  var swiper2 = new Swiper(".card", {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: ".card-prev",
      nextEl: ".card-next",
    },
  });

  $(".card-stop").on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".card-start").
    addClass("on");
  })
  
  $(".card-start").on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".card-stop").
    addClass("on");
  })

  // notice 슬라이드
  var swiper3 = new Swiper(".content_box", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      prevEl: ".notice-prev",
      nextEl: ".notice-next",
    },
  });

   // popupBox 슬라이드
  var swiper4 = new Swiper(".popupBox", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation: {
      prevEl: ".popupBox-prev",
      nextEl: ".popupBox-next",
    },
  });

  $(".popupBox-stop").on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".popupBox-start").
    addClass("on");
  })
  
  $(".popupBox-start").on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".popupBox-stop").
    addClass("on");
  })
   // popupBox 슬라이드 end

   // quickMenu 슬라이드
  var swiper5 = new Swiper(".quickMenu", {
    slidesPerView: 9,
    slidesPerGroup: 9,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
    navigation: {
      prevEl: ".quickMenu-prev",
      nextEl: ".quickMenu-next",
    },
  });

  $(".quickMenu-stop").on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".quickMenu-start").
    addClass("on");
  })
  
  $(".quickMenu-start").on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".quickMenu-stop").
    addClass("on");
  })
   // quickMenu 슬라이드 end

  // banner 슬라이드
  var swiper6 = new Swiper(".bannerCont", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
    navigation: {
      prevEl: ".banner-prev",
      nextEl: ".banner-next",
    },
  });

  $(".banner-stop").on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".banner-start").
    addClass("on");
  })
  
  $(".banner-start").on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".banner-stop").
    addClass("on");
  })
   // banner 슬라이드 end
})