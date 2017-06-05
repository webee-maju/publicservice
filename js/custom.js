jQuery(document).ready(function(){
	jQuery('.homepage-slider').slick({
		arrows: false,
		dots: true
	});
	jQuery('a.mobile-button').click(function(){
		return false;
	});

	mejs.i18n.language('en'); // Setting German language
    
    jQuery('audio,video').mediaelementplayer({
        success: function(player, node) {
        
        	// Optional
            jQuery(player).closest('.mejs__container').attr('lang', mejs.i18n.language());
            
            jQuery('html').attr('lang', mejs.i18n.language());
            
            // More code
        }
    });
});