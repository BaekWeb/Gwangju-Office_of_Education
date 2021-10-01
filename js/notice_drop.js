$(function() {
  var notice = $(".notice");
  var noticeBox = notice.children(".noticeBox");

  noticeBox.children(".notice-item").each(function() {
    $(this).mouseover(function () {
      // 전체 notice-item에 on 클래스 제거
      noticeBox.children(".notice-item").removeClass("on");
      // 마우스가 들어간 요소에만 on클래스 생성
      $(this).addClass("on")
    })
  })
})