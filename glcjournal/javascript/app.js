  jQuery('.hide-search').focus(); // фокус на инпут
jQuery(document).ready(function () {
  jQuery('#go').on("click", function () {
      jQuery('.hide-search input').focus(); // фокус на инпут
  jQuery('.hide-search').css({"top":"0"});
  });
 jQuery('#close').on("click", function () {
    jQuery('.hide-search').css({"top":"-150%"});
 });

 jQuery('.close-menu').on("click", function () {
 	jQuery('.menu').css({"top":"-400%"});
 });

 jQuery('#getmenu').on("click", function () {
 	jQuery('.menu').css({"top":"0", "transform":"translateY(0)", "transition":"0.5s all"});
 });
 jQuery('.close-menu').click(function () {
   jQuery('.menu').css({"top":"-200%", "transform": "translateY(-200%)", "transition":"0.5s all"});
 });
 jQuery('#add').click(function () {
 	jQuery('.add-state').css({
 		"transition":"0.5s all","left":"0"
    });
 });

 jQuery('.close_add_state').click(function () { 
 	jQuery('.add-state').css({"transition":"0.8s all","left":"-200%"});
 });
     var body = jQuery("body"); 
        body.fadeIn(100); 
        jQuery(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) { 
            e.preventDefault(); 
            jQuery("body").fadeOut(100); 
            var self = this;
            setTimeout(function () { 
                window.location.href = $(self).attr("href"); 
            }, 100); 
        });
    tinymce.init({ selector:'textarea'});

  // dark-mode

var darkmode = $('#dark-mode'); 
var isDark = (darkmode.attr('class') == 'far fa-moon')
darkmode.on('click' , function(){ 
isDark ? $(this).attr('class','fas fa-moon') : $(this).attr('class','far fa-moon'); 
});
  });