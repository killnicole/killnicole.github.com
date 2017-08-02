var $ = require('jquery');

var Testimonials = function() {
  var DURATION = 400;
  var $items = $('.js-testimonial');
  var $links = $('.js-change-testimonial');

  function init() {
    bindEvents();
  }

  function bindEvents() {
    $('.js-change-testimonial').on('click', function(e) {
      var index = $(this).parent().index();

      e.preventDefault();
      updatePagination(index);
      updateSlides(index);
    })
  }

  function updatePagination(index) {
    $links
      .removeClass('is-active')
      .eq(index)
      .addClass('is-active');
  }

  function updateSlides(index) {
    $items.filter(':visible').fadeOut(DURATION, function() {
      $items.eq(index).fadeIn(DURATION);
    })
  }

  return Object.freeze({
    init: init
  })
};

module.exports = Testimonials;
