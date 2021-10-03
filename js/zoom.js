$(function () {

  var header = $(".header");
  var header_sub = header.children(".sub");
  var otherView = header_sub.find(".otherView");

  var plus = otherView.find(".plus");
  var minus = otherView.find(".minus");
  var original = otherView.find(".original");
  
  var zoom = 1;
  var zoomNum = 1;

  // 확대
  plus.on("click", function () {    
    zoomNum = zoomNum + 0.1;
    $("body").css("zoom", zoomNum);
  })

  // 축소
  minus.on("click", function () {
    zoomNum = zoomNum - 0.1;
    $("body").css("zoom", zoomNum);
  })

  // 원래상태
  original.on("click", function () {
    zoomNum = zoom;
    $("body").css("zoom", zoomNum);
  })
})