$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(300);
        $('.hamburger-menu').toggleClass('active');
    });
});




lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
    
});