$('.portfolio').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:true,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(function() {
    var nav = $(".vv");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.removeClass('navbar-dark').addClass("navbar-light bg-light shadow-lg");
        } else {
            nav.removeClass("navbar-dark bg-light shadow-lg").addClass('navbar-dark');
        }
    });
});
var topMenu = $(".nav2"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   menuItems
     .parent().removeClass("active2")
     .end().filter("[href='#"+id+"']").parent().addClass("active2");
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});