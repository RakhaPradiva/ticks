$(function () {
  let carousel = $('#main-carousel');
  let carouselContent = $('.carousel-content');
  let slides = $(".carousel-img");
  let prev = $('#prev');
  let next = $('#next');

  let slideWidth = slides.width();
  let slideHeight = slides.height();
  let slideCount = slides.length;
  let totalWidth = slideCount * slideWidth;

  carousel.css({
    width: slideWidth,
    height: slideHeight
  });

  carouselContent.css({
    width: totalWidth,
    marginLeft: -slideWidth
  });

  $(prev).on('click', function () {
    carouselContent.animate({
      left: + slideWidth
    }, 500, () => {
      $('.carousel-img:last-child').prependTo(carouselContent);
      carouselContent.css('left', 0);
    });
  });

  $(next).on('click', function () {
    carouselContent.animate({
      left: - slideWidth
    }, 500, () => {
      $('.carousel-img:first-child').appendTo(carouselContent);
      carouselContent.css('left', 0);
    });
  });

  setInterval(() => {
    carouselContent.animate({
      left: - slideWidth
    }, 500, () => {
      $('.carousel-img:first-child').appendTo(carouselContent);
      carouselContent.css('left', 0);
    });
  }, 5000);

  $(window).on('resize', () => {
    slideWidth = slides.width();
    slideHeight = slides.height();
    slideCount = slides.length;
    totalWidth = slideCount * slideWidth;

    carousel.css({
      width: slideWidth,
      height: slideHeight
    });

    carouselContent.css({
      width: totalWidth,
      marginLeft: -slideWidth
    });
  });

});