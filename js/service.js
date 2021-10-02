$(function () {
  var service = $(".service");

  // service의 1차 선택 버튼
  service.find(".main_cont").children(".mainItem").each(function () {

    var clickme = $(this);
    
    click(clickme)
  })
  // 1차 선택 end

  // service의 2차 선택 버튼
  service.find(".serviceBox").children("li").each(function () {

    var clickme = $(this);

    click(clickme)
  })
  // 2차 선택 end

  // 클릭함수
  function click(clickme) {
    clickme.on("click", function () {
      clickme.siblings().removeClass("on");
      clickme.addClass("on");
    })
  }
})