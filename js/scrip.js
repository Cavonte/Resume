
$(document).ready(function() {
    $(window).stellar();
    
});

$(document).ready(

  function() { 
    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });
      

  }

);

$(document).ready(
    function() {
    $("button").click(function() {
        $('html,body').animate({
            scrollTop: $(".second").offset().top},
            'slow');
    });
    }
);



