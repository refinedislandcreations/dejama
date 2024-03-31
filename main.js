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






var allPanels = $('.accordion > .dd').hide();

	$('.accordion > .dt > a').click(function() {
		// allPanels.slideUp();

        
   // $(this).filter('.open').removeClass('open').addClass('closing')
   // $('.accordion > .dt > a').removeClass('open');
 // $(this).not(".closing").addClass('open').parent().next().slideDown();
   // $('.accordion > .dt > a').removeClass('closing');
    
   $(this).toggleClass('open') 
   $(this).parent().next().slideToggle() 

   return false; 
	});