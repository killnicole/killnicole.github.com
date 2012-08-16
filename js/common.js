$(document).ready(function() {
	$(".view li.bigger-blocks").click(function(){
	$(".view li").removeClass("act");
	$(this).addClass("act");
    $(".smaller-blocks-wrapper").fadeOut();
    $(".bigger-blocks-wrapper").fadeIn();
	});

    $(".view li.smaller-blocks").click(function(){
    $(".view li").removeClass("act");
    $(this).addClass("act");
    $(".bigger-blocks-wrapper").fadeOut();
    $(".smaller-blocks-wrapper").fadeIn();
    });

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
               $('#back-top').fadeIn();
        } else {
               $('#back-top').fadeOut();
        }
    });
 
    $('#back-top').click(function() {
        $('body,html').animate({scrollTop:0},1500);
    });

    $(".tabs").children().click(function() {
      $(this).addClass('act').siblings().removeClass('act');
    });

    $('input[placeholder], textarea[placeholder]').placeholder();

});

var current = "all";

function showWeb() {
    if(current != "web") {
      current = "web";
      $('.dft').fadeOut();
      $('.web').fadeIn();
    }
}

function showIcons() {
    if(current != "ico") {
      current = "ico";
      $('.dft').fadeOut();
      $('.ico').fadeIn();
    }
}

function showPaintings() {
    if(current != "jpg") {
      current = "jpg";
      $('.dft').fadeOut();
      $('.jpg').fadeIn();
    }
}

function showAll() {
    if(current != "all") {
      current = "all";
      $('.dft').fadeOut();
      $('.dft').fadeIn();
    }
}
