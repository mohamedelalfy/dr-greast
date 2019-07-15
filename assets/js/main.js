var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function () {

	var overlay = document.querySelector('.overlay');
	var nav = document.querySelector('nav');
	var icon = document.querySelector('.menu-toggle i');

	overlay.classList.toggle("menu-open");
	nav.classList.toggle("menu-open");

	if (changeIcon) {
		icon.classList.remove("fa-bars");
		icon.classList.add("fa-times");

		changeIcon = false;
	} else {
		icon.classList.remove("fa-times");
		icon.classList.add("fa-bars");
		changeIcon = true;
	}
});
  // start slider //
  var Page = (function () {

    var $navArrows = $('#nav-arrows'),
        $nav = $('#nav-dots > span'),
        slitslider = $('#slider').slitslider({
            onBeforeChange: function (slide, pos) {

                $nav.removeClass('nav-dot-current');
                $nav.eq(pos).addClass('nav-dot-current');

            }
        }),

        init = function () {

            initEvents();

        },
        initEvents = function () {

            // add navigation events
            $navArrows.children(':last').on('click', function () {

                slitslider.next();
                return false;

            });

            $navArrows.children(':first').on('click', function () {

                slitslider.previous();
                return false;

            });

            $nav.each(function (i) {

                $(this).on('click', function (event) {

                    var $dot = $(this);

                    if (!slitslider.isActive()) {

                        $nav.removeClass('nav-dot-current');
                        $dot.addClass('nav-dot-current');

                    }

                    slitslider.jump(i + 1);
                    return false;

                });

            });

        };

    return {
        init: init
    };

})();

Page.init();
// Testimonials
$(function () {
    "use strict";
    // Tabs
    $(".Testimonials li").click(function () {
      // Add active class to active link
      $(this).addClass("active").siblings().removeClass("active");
      // Hide all divs on click
      $(".Testimonials .tabs-content > div").hide();
      //show div
      $('.' + $(this).data("class")).show();
    });
  
  });

//   go top button
$().ready(function () {
    console.log('clicked');
    var position = $('#test').position().top;
    $('body, html').animate({
        scrollTop: position
    }, 500);

    console.log('scroll to ' + position);
});


$('.btn-top').click(function () {

    console.log('clicked');
    $('body, html').animate({
        scrollTop: 0
    }, 500);

    console.log('scroll to ' + position);

});
// testimonial
var tabButtons=document.querySelectorAll(".Testimonials .buttonContainer button");
var tabPanels=document.querySelectorAll(".Testimonials  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#fff";

    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0);
// End testimonial
