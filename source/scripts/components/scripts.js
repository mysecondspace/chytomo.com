// ----- preloader -----
$(window).on('load', function() {
    var $preloader = $('#preloader');
        $preloader.fadeOut('slow');
});

// ----- menu -----
$(window).scroll(function() {
    if ($(".block").hasClass('block__main') && $(window).scrollTop() >= 242) {
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
$(document).mouseup(function(e) {
    var container = $("#search");
    
    if (container.has(e.target).length === 0) {
        container.fadeOut(300);
    }
});
function searchShow() {
    $("#search").fadeIn(300);
    $(".search .show").removeClass("opened");
    $(".search .hide").addClass("opened");
    $("body").css("overflow", "hidden");
}
function searchHide() {
    $("#search").fadeOut(300);
    $(".search .hide").removeClass("opened");
    $(".search .show").addClass("opened");
    $("body").css("overflow", "auto");
}

// ----- anchors -----
$(document).on('click', 'a[href^="#inside"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 45
    }, 900);
});
$(document).on('click', 'a[href^="#header"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
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
        	duration: 450, queue: false
        }, 900)
    ) : (
        narrow.addClass('unfade'),
        narrow.css('z-index', '1'),
        narrow.removeClass('select'),
        $('.filling').addClass('unfade'),
        inside.stop(true, true).slideUp({
        	duration: 450, queue: false
        }, 900)
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