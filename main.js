const burger = document.querySelector('.hamburger-wrapper')
let oldScrollHeight = 0


$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(300);
        $('.hamburger-wrapper').toggleClass('open');
    });
});


//popout

//function toggleActivities(target) {
  //console.log(target)
  //toggle(target.nextElementSibling)
  //toggle(target.nextElementSibling.nextElementSibling)
//}

//function toggle(target) {
  //target.classList.toggle('active');
//}

//function clickBySelector(target){
  //console.log(document.querySelector(target))
  //document.querySelector(target).click()
//}

function togglePopup(id) {
  var popup = document.getElementById(id);
  var overlay = document.querySelector('.popupoverlay');

  if (id) {
      popup.classList.toggle('active');
      overlay.classList.toggle('active');
      if (popup.classList.contains('active')) {
          document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is active
      } else {
          document.body.style.overflow = ''; // Restore scrolling when popup is closed
      }
  } else {
      // Close all popups and overlay
      var popups = document.querySelectorAll('.popup.active');
      var overlays = document.querySelectorAll('.popupoverlay.active');

      popups.forEach(function(popup) {
          popup.classList.remove('active');
      });

      overlays.forEach(function(overlay) {
          overlay.classList.remove('active');
      });

      document.body.style.overflow = ''; // Restore scrolling when all popups are closed
  }

  // Prevent default behavior (e.g., jumping to the top of the page) for anchor elements
  event.preventDefault();
}







//function togglePopUp() {
  //console.log(this)
  //this.nextElementSibling.classList.toggle('active')
  //this.nextElementSibling.nextElementSibling.classList.toggle('active')
//}

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


