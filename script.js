$(document).ready(function() {

    function toggleNavbarBackground() {
        if ($('.mobile-menu').css('display') !== 'none') {
            $('.navbar-section').addClass('scrolled');
        } else {
            $(window).trigger('scroll');
        }
    }

    $(window).scroll(function() {
        if ($('.mobile-menu').css('display') === 'none') { 
            if ($(this).scrollTop() > 50) {
                $('.navbar-section').addClass('scrolled');
            } else {
                $('.navbar-section').removeClass('scrolled');
            }
        }
    });

    // Function to paint the background before toggling the menu
    function paintAndToggleMenu() {
        $('.navbar-section').addClass('scrolled');
        $('.mobile-menu').slideToggle(toggleNavbarBackground);
    }

    // Bind the paintAndToggleMenu function to the burger menu icons
    $('.fa-bars').click(function() {
        paintAndToggleMenu();
    });

    $('.fa-x').click(function() {
        paintAndToggleMenu();
    });


        function checkScreenSize() {
            if ($(window).width() > 992) {
                $('.mobile-menu').hide(); 
                $('.navbar-section').removeClass('scrolled'); 
            }
        }
    

        checkScreenSize(); 
        $(window).resize(function() {
            checkScreenSize();
        });
});

$('.carousel-banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    initialSlide: 1,
  });


  $(document).ready(function() {
    // Toggle the download-modal inside the respective file div
    $('.files-section .container .files .file .elypsis').on('click', function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up

        // Close all other download-modal divs
        $('.download-modal').not($(this).closest('.file').find('.download-modal')).hide();

        // Toggle the current download-modal
        $(this).closest('.file').find('.download-modal').toggle();
    });

    // Close all download-modal divs if clicked anywhere else
    $(document).on('click', function() {
        $('.download-modal').hide();
    });

    // Prevent closing the modal when clicking inside the download-modal
    $('.files-section .container .files .file .download-modal').on('click', function(event) {
        event.stopPropagation();
    });
});

