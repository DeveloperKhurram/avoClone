const testimonialSlider = document.querySelector("#testimonialSlider");

if (window.matchMedia("(min-width:576px)").matches) {
  // Initialize Carousel but disable default slide
  const carousel = new bootstrap.Carousel(testimonialSlider, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner.test")[0].scrollWidth;
  var cardWidth = $(".carousel-item.testy").width();
  var totalItems = $(".carousel-item.testy").length;
  var visibleCards = 3;
  var scrollPosition = 0;

  // Clone first and last visible cards for infinite loop illusion
  $(".carousel-item.testy")
    .slice(0, visibleCards)
    .clone()
    .appendTo(".carousel-inner.test");
  $(".carousel-item.testy")
    .slice(-visibleCards)
    .clone()
    .prependTo(".carousel-inner.test");

  // Recalculate carousel width after cloning
  carouselWidth = $(".carousel-inner.test")[0].scrollWidth;

  // Handle infinite scroll with looping logic
  function scrollInLoop(direction) {
    var currentScrollPosition = $(".carousel-inner.test").scrollLeft();

    if (direction === "next") {
      if (scrollPosition < carouselWidth - cardWidth * visibleCards) {
        scrollPosition += cardWidth;
        $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
      }

      // When reaching the cloned end, reset to original first cards
      if (scrollPosition >= carouselWidth - cardWidth * visibleCards) {
        $(".carousel-inner.test").animate({ scrollLeft: 0 }, 0); // Instantly reset scroll to start
        scrollPosition = cardWidth * visibleCards; // Reset position
        $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
      }
    } else if (direction === "prev") {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
      }

      // When reaching the cloned start, reset to original last cards
      if (scrollPosition <= 0) {
        $(".carousel-inner.test").animate(
          { scrollLeft: carouselWidth - cardWidth * visibleCards },
          0
        ); // Instantly reset scroll to end
        scrollPosition = carouselWidth - cardWidth * visibleCards * 2;
        $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
      }
    }
  }

  // Next and prev button click handlers
  $(".carousel-control-next").on("click", function () {
    scrollInLoop("next");
  });

  $(".carousel-control-prev").on("click", function () {
    scrollInLoop("prev");
  });

  // Indicator click event handling for infinite scroll
  $(".carousel-indicators.test button").on("click", function () {
    var slideIndex = $(this).data("bs-slide-to");
    scrollPosition = cardWidth * slideIndex;
    $(".carousel-inner.test").animate({ scrollLeft: scrollPosition }, 600);
  });
} else {
  // For smaller screens, enable Bootstrap's default sliding behavior
  $(testimonialSlider).addClass("slide");
}
