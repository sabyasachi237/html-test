 
// Initialize Bootstrap carousels
var testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonial-slider'), {
    interval: 2000 // 2 seconds
});
var imageCarousel = new bootstrap.Carousel(document.getElementById('image-slider'), {
    interval: 2000 // 2 seconds
});


$(function(){
	// Navbar expansion
	$('.navbar').addClass('navbar-dark navbar-expand-md')
	$('.navbar-menu').before($(`<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>`)) 
  $('.navbar-item').replaceWith(function () {
    var attrs = { };

$.each($(this)[0].attributes, function(idx, attr) {
    attrs[attr.nodeName] = attr.nodeValue;
});
    attrs['class'] = 'nav-link'
    return $(`<a></a>`, attrs).append($(this).html())
  })
  $('.nav-link').wrap('<li class="nav-item navbar-item"></li>')
	$('.navbar-menu').wrap(`<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>`)
  $(".navbar-menu").replaceWith(function () {
    return $("<ul class='ml-auto navbar-menu navbar-nav'/>").append($(this).contents());
});
  })

