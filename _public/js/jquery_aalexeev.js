// Андрей Алексеев [AA]
// alexeev.andrey.a@gmail.com

$(document).ready(function(){
	//bootstrap scrollspy [AA]
	$('body').scrollspy({ target: '.main-nav' });

	//smooth scrolling [AA]
	$('a[href*=#]:not([href=#])').click(function() {
		console.log("clicked!");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
