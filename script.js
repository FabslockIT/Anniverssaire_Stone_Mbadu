$(function() {
  $('.intro').addClass('go');

  $('.Recharger').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });

  });
})