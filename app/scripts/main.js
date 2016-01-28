$('#home').click(function(){
  $('html, body').animate({
      scrollTop: $("html").offset().top
  }, 2000);
});

$('#show_info').click(function(){
  var second_panel_position = $(".second-panel").offset().top - $(".second-panel").css("padding-top").replace("px", "");
  $('html, body').animate({
    scrollTop: second_panel_position
  }, 2000);
});

$('#credits').click(function(){
  var second_panel_position = $(".third-panel").offset().top - $(".third-panel").css("padding-top").replace("px", "");
  $('html, body').animate({
    scrollTop: second_panel_position
  }, 2000);
});