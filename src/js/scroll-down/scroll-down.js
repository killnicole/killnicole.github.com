var $ = require('jquery');

var ScrollDown = function() {
  function init() {
    bindEvents();
  }

  function bindEvents() {
    $('.js-scroll-along').on('click', function(e) {
      var target = $(this).attr('href');

      e.preventDefault();
      scrollTo(target);
    })
  }

  function scrollTo(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  }

  return Object.freeze({
    init: init
  })
};

module.exports = ScrollDown;
