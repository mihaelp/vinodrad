$(function() {


  if ($.cookie('enter_site')) {
    $('.site-enter').remove();
    $('html, body').css('overflowY', 'auto');

  }else {
    $('.site-enter').css("opacity", "1");
  }

  $.cookie('enter_site', true, {
    expires: 1
  });

  var menu_h = $('.logo').height() + 10;
  $('.for-menu').css("height", $(window).height() - menu_h);
  $(".c-hamburger").click(function() {
		$( ".hidden-menu" ).toggleClass( "on" );
	});
  $( ".yes-btn" ).click(function() {
    $( ".site-enter" ).fadeOut( "slow", function() {
      $(this).remove();
    });
    $('html, body').css('overflowY', 'auto');

  });
  $(".hidden-menu ul a").click(function() {
		$(".hidden-menu").toggleClass("on");
		$(".c-hamburger").toggleClass("is-active");
    $('html, body').css('overflowY', 'auto');
	});
  $(".c-hamburger").click(function() {
    if($( ".c-hamburger" ).hasClass( "is-active" )){
      $('html, body').css('overflowY', 'hidden');
    }else {
      $('html, body').css('overflowY', 'auto');
    }

	});
  $( ".no-btn" ).click(function() {
    window.close();
  });
  $(window).resize(function() {
    var menu_h = $('.logo').height() + 10;
    $('.for-menu').css("height", $(window).height() - menu_h);
    $('.site-enter').css("height", $(window).height());
	});
  $('.site-enter').css("height", $(window).height());
  $('.open-popup-link').magnificPopup({
	  type:'inline',
    removalDelay: 500,
	  midClick: true ,
    mainClass: 'mfp-zoom-in'
	});

  $(".item").each(function(i) {
		$(this).find("a").attr("data-mfp-src", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});
  $(".vac").each(function(i) {
		$(this).find("button").attr("data-mfp-src", "#vac_" + i);
		$(this).find(".vac_descr").attr("id", "vac_" + i);
	});

  $('#myCarousel').on('slide.bs.carousel', function () {
    $('.carousel .item  .carousel-caption img').removeClass("flipInY animated");
    $('.carousel .item  .carousel-caption .car-text').removeClass("fadeInUp animated");
    $('.carousel .item  .carousel-caption .car-btn').removeClass("fadeInUp animated");

    $('.carousel .item .carousel-caption img').addClass("flipInY animated");
    $('.carousel .item .carousel-caption .car-text').addClass("fadeInUp animated");
    $('.carousel .item .carousel-caption .car-btn').addClass("fadeInUp animated");


  });
  $(".indicators li").on("click", function() {
      $(".indicators li").removeClass("active");
      $(this).addClass("active");
  });

  // $(".hidden-menu a[href*='#']").mPageScroll2id({offset: 0});
  $(".top-menu-wrap a[href*='#']").mPageScroll2id({offset: 89});

  $('#myForm').validator();
});
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
