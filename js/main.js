$(document).ready(function(){
  
  $('header .hamburger, header .menu-closer, header .helper-div').on('click', function(){
    $('header').toggleClass('opened');
    $('html, body').toggleClass('overflowed');
  });


  $('header nav ul li a').on('click', function () {
    $(this).addClass('active');
    $(this).parent().siblings().find('a').removeClass('active');

    const anchor = $(this).attr('href');

    

    const offset = $(anchor).offset().top;
    
    $('html, body').stop().animate({ scrollTop: offset}, 500);

    if( $(window).width() < 992 ){
      $('header').removeClass('opened');
      $('html, body').removeClass('overflowed');
    }

  });

  $('.service-section .service-item a').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.service-wrapper').addClass('opened');
  })  
  
  $('.question-answer').slideUp(0);

  $('.question-item .question-title').on('click', function () {
    $(this).parent().toggleClass('opened');
    $(this).parent().parent().siblings().find('.question-item').removeClass('opened');

    $(this).parent().find('.question-answer').slideToggle();
    $(this).parent().parent().siblings().find('.question-answer').slideUp();

  });

  $('.comfort-item label').on('click', function(){

    $('.comfort-item').addClass('black');
    $(this).parent().removeClass('black');

  });


  $('.order-section .step-group .step-item').fadeOut(0);
  $('.order-section .step-group .step-item.active').fadeIn(0);


  if( $('#day1').length ){
		$('#day1').datepicker({
			minDate: new Date(),
			firstDay: 1,
			// range: true,
			autoClose: true,
			// toggleSelected: false,
			dateFormat: ('dd MM, D')
		});
		const dp1 = $('#day1').datepicker().data('datepicker');
		dp1.selectDate(new Date());
	}

  $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 10,
    minTime: '00:00am',
    maxTime: '23:59pm',
    defaultTime: '00:00',
    startTime: '10:00',
    scrollbar: false
  });

  $('.tab-group li').on('click', function(){

    $('.tab-group .tab-item').removeClass('active');
    $('.tab-group li:lt(' + ($(this).index() + 1) +')').find('.tab-item').addClass('active');

    $('.step-group .step-item').fadeOut(0);
    $('.step-group .step-item').eq($(this).index()).fadeIn();

  });

  $('.step-one .step-next').on('click', function () {

    $('.tab-group .tab-item').removeClass('active');
    $('.tab-group li:lt(2)').find('.tab-item').addClass('active');

    $('.step-group .step-item').fadeOut(0);
    $('.step-group .step-item').eq(1).fadeIn();

  });

  $('.step-two .step-next').on('click', function () {

    $('.tab-group .tab-item').removeClass('active');
    $('.tab-group li:lt(3)').find('.tab-item').addClass('active');

    $('.step-group .step-item').fadeOut(0);
    $('.step-group .step-item').eq(2).fadeIn();

  });

  // SLIDERS
  const mainSlider = new Swiper('.main-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const portfolioSlider = new Swiper('.portfolio-carousel', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    loopedSlides: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
      },
      991: {
        slidesPerView: 1.7,
        spaceBetween: 10,
        centeredSlides: true,
      }
    }
  });
});