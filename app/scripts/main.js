'use strict';
$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$('body').on('click', function(e){
    if ($(e.target).not('.maps').length > 0){
        $('.maps iframe').css("pointer-events", "none");
    }
});