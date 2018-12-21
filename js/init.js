/*
 * Copyright (c) 2017 FriendsLaboratory
 * Author: FriendsLaboratory
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";

	
	makeup_fl_fotorama();
	makeup_fl_google_maps_no_scroll();
	makeup_fl_iframe_height();
	makeup_fl_date_picker();
	makeup_fl_time_picker();
	makeup_fl_totop();
	makeup_fl_contact_form_contactsend();
	makeup_fl_contact_form_bookingsend();
	makeup_fl_magnific_popup();
	makeup_fl_isotope();
	makeup_fl_sticky_sidebar();
	makeup_fl_mobile_nav();
	makeup_fl_content_testimonials();
	
	jQuery('input.time').on('focus', function(){
		makeup_fl_time_width();
	});
	
	jQuery(window).on('resize',function(){
		makeup_fl_time_width();
		makeup_fl_iframe_height();
	});
	
	jQuery(window).load(function(){
		makeup_fl_isotope();
		makeup_fl_fotorama();
	});
	
	setTimeout(function(){
		makeup_fl_isotope();
	}, 1000);
	
});
// -----------------------------------------------------
// ------------------    FOTORAMA   --------------------
// -----------------------------------------------------
function makeup_fl_fotorama(){
	"use strict";
	
	var fotorama	 = jQuery('.fotorama');
	
	fotorama.each(function(){
		var element = jQuery(this);
		element.fotorama();
	});
	
}
// -----------------------------------------------------
// -------------    GOOGLE MAPS NO  SCROLL   -----------
// -----------------------------------------------------
function makeup_fl_google_maps_no_scroll(){
	"use strict";
	jQuery('.address .box:nth-child(1)').on('click', function(){
            jQuery(this).find('iframe').addClass('clicked');
	});
	jQuery('.address .box:nth-child(1)').on('mouseleave', function(){
            jQuery(this).find('iframe').removeClass('clicked');
	});
}
// -----------------------------------------------------
// ---------    IFRAME HEIGHT REGULATION ---------------
// -----------------------------------------------------
function makeup_fl_iframe_height(){
	"use strict";
	var H 		= jQuery('.address .box .info').outerHeight();
	var iframeW = jQuery('.address .box iframe');
	
	iframeW.css({height:H});
}
// -----------------------------------------------------
// ----------------    TIME WIDTH      -----------------
// -----------------------------------------------------
function makeup_fl_time_width(){
	"use strict";
	
	var InputW	= jQuery('input.time').outerWidth();
	var Time	= jQuery('.ui-timepicker-wrapper');
	
	
	Time.css({width:InputW});
	
}
// -----------------------------------------------------
// ----------------    TIME PICKER    ------------------
// -----------------------------------------------------
function makeup_fl_time_picker(){
	"use strict";
	
	jQuery('#time').timepicker({
		'minTime': '8:00 am',
		'maxTime': '5:00 pm',
		'step': 30 //in minutes
	});
	
}
// -----------------------------------------------------
// ----------------    DATE PICKER    ------------------
// -----------------------------------------------------
function makeup_fl_date_picker(){
	"use strict";
	jQuery('.datepicker-input').each(function() {
       
		var firstDay = jQuery(this).data( 'first-day' ) ? jQuery(this).data( 'first-day' ) : 0,
		dateFormat = jQuery(this).data( 'date-format' ) ? jQuery(this).data( 'date-format' ) : 'mm / dd / yy';

		jQuery(this).children('#reservation-date').datepicker({
		dateFormat: dateFormat,
		minDate: -0,
		firstDay: firstDay
		});

	}); 
}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function makeup_fl_totop(){
	"use strict";
	
	jQuery("a.totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
	
}
// -----------------------------------------------------
// ------    CONTACT FORM FOR CONTACT PAGE   -----------
// -----------------------------------------------------
function makeup_fl_contact_form_contactsend(){
	"use strict";
	
	jQuery(".makeup_fl_btn_contactsend").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contactsend.php",{ xx_name: name, xx_email: email, xx_message:message, xx_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false;
	 
	});
	
}
// -----------------------------------------------------
// -----------    CONTACT FORM FOR LIGHTBOX   ----------
// -----------------------------------------------------
function makeup_fl_contact_form_bookingsend(){
	"use strict";
	jQuery(".makeup_fl_btn_bookingsend").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var phone 		= jQuery(".contact_form #phone").val();
		var date 		= jQuery(".contact_form #reservation-date").val();
		var time 		= jQuery(".contact_form #time").val();
		var message 	= jQuery(".contact_form #message").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||phone===''||date===''||time===''||message===''){
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/bookingsend.php",{ xx_name: name, xx_email: email, xx_phone:phone, xx_date:date, xx_time:time, xx_message:message}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
					setTimeout(function(){  $.magnificPopup.close(); }, 5500); //For closing popup form
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false;
	 
	});
}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function makeup_fl_magnific_popup(){
	"use strict";
	
	jQuery('.ajax-popup-link').magnificPopup({
		type:'ajax',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  		removalDelay: 300, // Delay in milliseconds before popup is removed

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade',
		closeBtnInside: true,
    	closeOnBgClick: false,
		callbacks: {
			ajaxContentAdded: function(){
				makeup_fl_contact_form_bookingsend();
				makeup_fl_date_picker();
				makeup_fl_time_picker();
				makeup_fl_time_width();
				makeup_fl_iframe_height();
				makeup_fl_google_maps_no_scroll();
				jQuery('input.time').on('focus', function(){
					makeup_fl_time_width();
				});
			}
		}
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	
}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function makeup_fl_isotope(){
	"use strict";
	
	jQuery('.makeup_fl_masonry').isotope({
	  itemSelector: '.makeup_fl_masonry_in',
	  masonry: {

	  }
	});
	
}
// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------
function makeup_fl_sticky_sidebar(){

	"use strict";
	var sticky			= jQuery('.sticky_sidebar');
	
	sticky.each(function(){
		var element		= jQuery(this);
		
		element.theiaStickySidebar({
			containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
			additionalMarginTop: 50,
			additionalMarginBottom: 0,
			updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
			minWidth: 800, // The sidebar returns to normal if its width is below this value. 
		});
	});

}
// -----------------------------------------------------
// ----------------    MOBILE MENU    ------------------
// -----------------------------------------------------
function makeup_fl_mobile_nav(){
	"use strict";

	// trigger
	jQuery('.makeup_fl_header_trigger a').on('click', function(e) {
		e.preventDefault();
		
		if(!jQuery(this).hasClass('opened')){
			jQuery(this).addClass('opened');
			jQuery('.makeup_fl_header .makeup_fl_header_nav_list').slideDown(500);
		}else{
			jQuery(this).removeClass('opened');
			jQuery('.makeup_fl_header .makeup_fl_header_nav_list').slideUp(500);
		}
		return false;
	});
	
}
// -----------------------------------------------------
// ----------------    TESTIMONAILS    -----------------
// -----------------------------------------------------
function makeup_fl_content_testimonials(){
	
	"use strict";
	var testimonial = jQuery('.owl-carousel');
	
	testimonial.each(function() {
        
		jQuery(this).owlCarousel({
			autoplay:true,
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});	
		
		jQuery(this).parent().parent().find('a.prev').on('click',function(){
			
			jQuery(this).parent().parent().find('.owl-carousel').trigger('prev.owl'); 
			
			return false;
		
		});
		jQuery(this).parent().parent().find('a.next').on('click',function(){
			jQuery(this).parent().parent().find('.owl-carousel').trigger('next.owl'); 
			return false;
		});
    });

}