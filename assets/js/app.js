$('.header_slider-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 5000,
  appendDots: $('.header_slider-dots')
});


$('#footerCarusel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 5000,
  appendDots: $('.footer_slider-dots')
});


$('#private_house').click(function(){
  $('.private_house').addClass('active');
  $('.private_house').removeClass('off');
  $('.base').removeClass('active');
  $('.office').removeClass('active');
  $('.base').addClass('off');
  $('.office').addClass('off');
  $('.social_obj').removeClass('active');
  $('.gooder').removeClass('active');
  $('.social_obj').addClass('off');
  $('.gooder').addClass('off');
  $('.horeka').removeClass('active');
  $('.horeka').addClass('off');
});


$('#base').click(function(){
  $('.base').addClass('active');
  $('.base').removeClass('off');
  $('.private_house').removeClass('active');
  $('.office').removeClass('active');
  $('.private_house').addClass('off');
  $('.office').addClass('off');
  $('.social_obj').removeClass('active');
  $('.gooder').removeClass('active');
  $('.social_obj').addClass('off');
  $('.gooder').addClass('off');
  $('.horeka').removeClass('active');
  $('.horeka').addClass('off');
});


$('#office').click(function(){
  $('.office').addClass('active');
  $('.office').removeClass('off');
  $('.private_house').removeClass('active');
  $('.base').removeClass('active');
  $('.private_house').addClass('off');
  $('.base').addClass('off');
  $('.social_obj').removeClass('active');
  $('.gooder').removeClass('active');
  $('.social_obj').addClass('off');
  $('.gooder').addClass('off');
  $('.horeka').removeClass('active');
  $('.horeka').addClass('off');
});

$('#social_obj').click(function(){
  $('.social_obj').addClass('active');
  $('.social_obj').removeClass('off');
  $('.private_house').removeClass('active');
  $('.base').removeClass('active');
  $('.private_house').addClass('off');
  $('.base').addClass('off');
  $('.gooder').removeClass('active');
  $('.gooder').addClass('off');
  $('.horeka').removeClass('active');
  $('.horeka').addClass('off');
  $('.office').removeClass('active');
  $('.office').addClass('off');
});


$('#gooder').click(function(){
  $('.gooder').addClass('active');
  $('.gooder').removeClass('off');
  $('.private_house').removeClass('active');
  $('.base').removeClass('active');
  $('.private_house').addClass('off');
  $('.base').addClass('off');
  $('.social_obj').removeClass('active');
  $('.social_obj').addClass('off');
  $('.horeka').removeClass('active');
  $('.horeka').addClass('off');
  $('.office').removeClass('active');
  $('.office').addClass('off');
});


$('#horeka').click(function(){
  $('.horeka').addClass('active');
  $('.horeka').removeClass('off');
  $('.private_house').removeClass('active');
  $('.base').removeClass('active');
  $('.private_house').addClass('off');
  $('.base').addClass('off');
  $('.social_obj').removeClass('active');
  $('.social_obj').addClass('off');
  $('.gooder').removeClass('active');
  $('.gooder').addClass('off');
  $('.office').removeClass('active');
  $('.office').addClass('off');
});