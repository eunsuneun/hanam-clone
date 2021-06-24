$(document).ready(function () {
  // Header
  if ($(".header").length > 0) {
    headerNavi();
  }
  function headerNavi() {
    $(".depth1-item").on("mouseover focusin", function () {
      var navHeight = $(this).find(".depth2-wrap").height() + 100;
      $(this).addClass("active");
      $(".lnb").css("height", navHeight);
      $(".lnb").addClass("active");
    });
    $(".depth1-item").on("mouseleave focusout", function () {
      $(this).removeClass("active");
      $(".lnb").css("height", "10rem");
      $(".lnb").removeClass("active");
    });
  }
});
