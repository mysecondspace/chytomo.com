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
var search = false;

$(document).ready(function() {
    searchHide();
});
$(document).keyup(function(e) {
    if (search && e.keyCode == 27)
        $("#search").fadeOut(400);
        $(".search").removeClass("active");
        $("body").css("overflow", "auto");
    
    search = !search;
});
function searchShow() {
    if (!search)
        $("#search").fadeIn(400);
        $(".search").addClass("active");
        $("body").css("overflow", "hidden");

    search = !search;
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

// ----- calendar and shop -----
var narrow = $('.narrow__small--calendar, .narrow__small--shop'),
    inside = $('.block--calendar, .block--shop'),
    down = false;

inside.css('display', 'none');
$('.inside .narrow__small--calendar, .inside .narrow__small--shop, .close').click(function() {
    var name = $(this).data('name');

    (!down) ? (
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
        
    down = !down;
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