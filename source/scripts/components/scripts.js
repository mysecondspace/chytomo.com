// ----- preloader -----
$(window).on('load', function() {
    var $preloader = $('#preloader');
        $preloader.fadeOut('slow');
});

// ----- menu -----
$(window).scroll(function() {
    if ($(".block").hasClass('block__main') && $(window).scrollTop() >= 92) {
        $("#menu").addClass("scroll"),
        $("#article").addClass("scroll")
    } else {
        $("#menu").removeClass("scroll"),
        $("#article").removeClass("scroll")
    }
});

// ----- search -----
$(document).ready(function() {
    searchHide();
});
$(document).keyup(function(e) {
    if (opened && e.keyCode == 27)
        $("#search").fadeOut(400);
        $(".search").removeClass("active");
        $("body").css("overflow", "auto");
    
    opened = !opened;
});
function searchShow() {
    if (!opened)
        $("#search").fadeIn(400);
        $(".search").addClass("active");
        $("body").css("overflow", "hidden");
    opened = !opened;
}

// ----- anchors -----
$(document).on('click', 'a[href^="#inside"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 50
    }, 1200);
});
$(document).on('click', 'a[href^="#menu"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
});

// ----- calendar -----
var narrow = $('.narrow__small--calendar'),
    inside = $('.block--calendar'),
    opened = false;

inside.css('display', 'none');
$('.inside .narrow__small--calendar, .close').click(function() {
    var name = $(this).data('name');

    (!opened) ? (
        $(this).addClass('select'),
        narrow.css('z-index', '-1'),
        narrow.removeClass('unfade'),
        inside.removeAttr('data-name'),
        inside.attr('data-name', name),
        $('.filling').removeClass('unfade'),
        inside.stop(true, true).slideDown({
        	duration: 600, queue: false
        }, 1200)
    ) : (
        narrow.addClass('unfade'),
        narrow.css('z-index', '1'),
        narrow.removeClass('select'),
        $('.filling').addClass('unfade'),
        inside.stop(true, true).slideUp({
        	duration: 600, queue: false
        }, 1200)
    );
        
    opened = !opened;
});

// ----- dropdown -----
function dropDown(el) {
    this.dd = el;
    this.initEvents();
}
dropDown.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        }); 
    }
}
$(function() {
    var dd = 0;

    dd = new dropDown($('#dd__format'));
    $(document).click(function() {
        $('.dd__format').removeClass('active');
    });
    dd = new dropDown($('#dd__date'));
    $(document).click(function() {
        $('.dd__date').removeClass('active');
    });
    dd = new dropDown($('#dd__place'));
    $(document).click(function() {
        $('.dd__place').removeClass('active');
    });
});