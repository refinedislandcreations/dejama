const burger = document.querySelector('.hamburger-wrapper')
let oldScrollHeight = 0


$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(300);
        $('.hamburger-wrapper').toggleClass('open');
    });
});




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






 
	let input_check_in = document.querySelector(".date-check-in").min = new Date().toISOString().slice(0, 10);
	let input_check_out = document.querySelector(".date-check-out").min = new Date().toISOString().slice(0, 10);
	
	// Booking
	function OnBook() {
		let link = "https://secure.guestpro.net/"
		let merchant_id = "dejama"
		let check_in = document.getElementById("check-in").value
		let check_out = document.getElementById("check-out").value
		let promo_code = document.getElementById("promo-code").value
		let check_in_input = document.getElementById("check-in")
		let check_out_input = document.getElementById("check-out")
		let check_in_label = document.getElementById("check-in-label")
		let check_out_label = document.getElementById("check-out-label")
		if(check_in != '' && check_out != ''){
			if (promo_code != '') {
        window.open(link+merchant_id+"/hotel-filter-redirect/"+check_in+"/"+check_out+"/"+promo_code+"", '_blank');
			}else{
        window.open(link+merchant_id+"/hotel-filter-redirect/"+check_in+"/"+check_out+"/promo_code_empty"+"", '_blank');
			}
    }else if(check_in == ''){
    	check_in_input.style.borderColor = "#dc3545"
    	check_in_label.style.color = "#dc3545"
    }else if(check_out == ''){
    	check_out_input.style.borderColor = "#dc3545"
    	check_out_label.style.color = "#dc3545"
    }
	}

	

	function WarningCheckIn() {
  	let check_in_input = document.getElementById("check-in")
  	let check_in_label = document.getElementById("check-in-label")
  	check_in_input.style.borderColor = "#afabab"
  	check_in_label.style.color = "#212529"
	}

	function WarningCheckOut() {
  	let check_out_input = document.getElementById("check-out")
		let check_out_label = document.getElementById("check-out-label")
  	check_out_input.style.borderColor = "#afabab"
  	check_out_label.style.color = "#212529"
	}
