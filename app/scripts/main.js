'use strict';

$('#home').click(function(){
  $('html, body').animate({
      scrollTop: $('html').offset().top
  }, 2000);
});

$('#show_info').click(function(){
  var secondPanelPosition = $('.second-panel').offset().top - $('.second-panel').css('padding-top').replace('px', '');
  $('html, body').animate({
    scrollTop: secondPanelPosition
  }, 2000);
});

$('#credits').click(function(){
  var thirdPanelPosition = $('.third-panel').offset().top - $('.third-panel').css('padding-top').replace('px', '');
  $('html, body').animate({
    scrollTop: thirdPanelPosition
  }, 2000);
});
