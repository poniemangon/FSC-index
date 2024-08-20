$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { 
            $('.navbar-section').addClass('scrolled');
        } else {
            $('.navbar-section').removeClass('scrolled');
        }
    });
});

$(document).ready(function() {
    $('.fa-bars').click(function() {
        $('.mobile-menu').slideToggle();
    });
    
    $('.fa-x').click(function() {
        $('.mobile-menu').slideToggle();
    });
});