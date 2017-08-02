"use strict";
$(".carousel").on("slid.bs.carousel", function(s) {
  $("#item2-1").hasClass("active") ? $("#left1").removeClass("hide") : $("#left1").addClass("hide"), $("#item1-1").hasClass("active") ? $("#right1").removeClass("hide") : $("#right1").addClass("hide"), $("#item2-2").hasClass("active") ? ($("#section-design").addClass("no-bg"), $("#left2").removeClass("hide")) : ($("#left2").addClass("hide"), $("#section-design").removeClass("no-bg")), $("#item1-2").hasClass("active") ? $("#right2").removeClass("hide") : $("#right2").addClass("hide")
}), $("a").click(function(s) {
  var e = $(s.target).data("link");
  e && (s.stopPropagation(), $("html, body").animate({
    scrollTop: $("#" + e).offset().top
  }, 1e3), e = void 0)
});
