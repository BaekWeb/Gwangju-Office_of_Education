$(function() {
  var header = $(".header");
  var main = header.children(".main");
  var gnb = main.find(".gnb");
  var gnbItem = gnb.children("li");

  gnbItem.each(function () {
    $(this).hover(
      function() {$(this).addClass("on")},
      function() {$(this).removeClass("on")},
    )
  })
})