
$('.trigger').click(function() {
  $('body').toggleClass('mobile-open');
  $('.custom-menu-primary').slideToggle(250);
  $('.has-child-menu').removeClass("child-open");
  $(".child-menu-wrapper").slideUp(250);
});

$(".custom-menu-primary .has-child-menu > a").click(function() {
	$(this).parent().siblings(".has-child-menu").removeClass("child-open");
	$(this).parent().siblings(".has-child-menu").find('.child-menu-wrapper').slideUp(250);
	$(this).parent().toggleClass("child-open");
	$(this).next(".child-menu-wrapper").slideToggle(250);
	return false;
	});

$('.testimonial-slider').slick({
    centerMode: true,
    arrows: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      },
    ]
  });