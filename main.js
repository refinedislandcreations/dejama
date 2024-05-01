const burger = document.querySelector('.hamburger-wrapper')
let oldScrollHeight = 0


$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(300);
        $('.hamburger-wrapper').toggleClass('open');
    });
});





function toggle(target) {
  target.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('popupbutton')) {
      toggleNext(event.target);
  }
});




//function togglePopUp() {
  //console.log(this)
  //this.nextElementSibling.classList.toggle('active')
  //this.nextElementSibling.nextElementSibling.classList.toggle('active')
//}

//lightGallery(document.getElementById('lightgallery'), {
  //  speed: 500,
    // download: false
    
//});






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




var allPanels = $('.accordion-index > .dd-index').hide();

	$('.accordion-index > .dt-index > a').click(function() {
		// allPanels.slideUp();

        
   // $(this).filter('.open').removeClass('open').addClass('closing')
   // $('.accordion > .dt > a').removeClass('open');
 // $(this).not(".closing").addClass('open').parent().next().slideDown();
   // $('.accordion > .dt > a').removeClass('closing');
    
   $(this).toggleClass('open') 
   $(this).parent().next().slideToggle() 

   return false; 
	});

  console.log('bob')

  window.addEventListener("scroll", () => {
    console.log(window.scrollY,'bob')
    if (window.scrollY > oldScrollHeight ){
      console.log('scroll down')
      burger.classList.remove('active')
    } else {
      burger.classList.add('active')
      console.log('scroll up')
    }
    oldScrollHeight = window.scrollY
  });


