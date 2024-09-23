const testimonialSlider = document.querySelector("#testimonialSlider");

if (window.matchMedia("(min-width:576px)").matches) {
  // Disable Bootstrap carousel automatic slide for larger screens
  const carousel = new bootstrap.Carousel(testimonialSlider, {
    interval: false, // Disable auto-slide
  });

  // Get carousel width and card width
  var carouselWidth = $(".carousel-inner.test")[0].scrollWidth;
  var cardWidth = $(".carousel-item.testy").width();

  var scrollPosition = 0;


  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  // Adjust widths on window resize
  $(window).on("resize", function () {
    carouselWidth = $(".carousel-inner.test")[0].scrollWidth;
    cardWidth = $(".carousel-item.testy").width();
  });



} else {
  // For smaller screens, enable Bootstrap's default sliding behavior
  $(testimonialSlider).addClass("slide");
}
