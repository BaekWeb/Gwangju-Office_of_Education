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

  // 카드 슬라이드
  var swiper3 = new Swiper(".content_box", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      prevEl: ".notice-prev",
      nextEl: ".notice-next",
    },
  });
})