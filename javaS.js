



//Fade kjapt
  function showImagesFast(el) {
      $(el).each(function(){
          if (scrollCheck($(el))) {
              $(this).addClass("fadeInFast");
          }
      });
  }

  $(document).ready(function(){
          showImagesFast('.fadeFast');
  });

  $(window).scroll(function() {
          showImagesFast('.fadeFast');
  });


  function showImagesText(wrap, text, img) {

      $(wrap).each(function(){
          if (scrollCheck($(this))) {
              $(text).each(function(){
                  
                  if($(this).css('left') == '-50px')
                    moveFromLeft($(this));

                  if($(this).css('left') == '50px')
                    moveFromRight($(this));
              });
              $(img).each(function(){
                  $(this).addClass("fadeInSlow");
              });
          }
      });
  }

  $(document).ready(function(){
    showImagesText('#ThomasG', '#ThomasG .tekstRight', '#ThomasG .fadeSlow');
    showImagesText('#LarsH', '#LarsH .tekstLeft', '#LarsH .fadeSlow');
    showImagesText('#ThomasL', '#ThomasL .tekstRight', '#ThomasL .fadeSlow');
    showImagesText('#KimFK', '#KimFK .tekstLeft', '#KimFK .fadeSlow');
    showImagesText('#BjornG', '#BjornG .tekstRight', '#BjornG .fadeSlow');

  });

  $(window).scroll(function() {
    showImagesText('#ThomasG', '#ThomasG .tekstRight', '#ThomasG .fadeSlow');
    showImagesText('#LarsH', '#LarsH .tekstLeft', '#LarsH .fadeSlow');
    showImagesText('#ThomasL', '#ThomasL .tekstRight', '#ThomasL .fadeSlow');
    showImagesText('#KimFK', '#KimFK .tekstLeft', '#KimFK .fadeSlow');
    showImagesText('#BjornG', '#BjornG .tekstRight', '#BjornG .fadeSlow');
  });
/*
$(document).ready(function(){
    showImagesText('#LarsH', '#LarsH .tekstLeft', '#LarsH .fadeSlow');
  });

  $(window).scroll(function() {
    showImagesText('#LarsH', '#LarsH .tekstLeft', '#LarsH .fadeSlow');
  });
*/



  function moveFromRight(elem) { 
    
    var pos = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos - 1; 
        $(elem).css("left", pos + 'px');
      }
    }
  }

  function moveFromLeft(elem) { 
    var pos = -50;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos + 1; 
        $(elem).css("left", pos + 'px');
      }
    }
  }

  function scrollCheck(elem){

    var thisPos = $(elem).offset().top;
    var windowHeight = jQuery( window ).height();
    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos ) {
        return true;
    }
    return false;
  }


  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 110) {
        $('#head').addClass('fixed');
        $('#head .headTag').removeClass('tekstHead');
        $('#head .headTag').addClass('tekstNorm');
        $('#head .navbarTag').removeClass('myNavbar');
    } else {
        $('#head').removeClass('fixed');
        $('#head .headTag').addClass('tekstHead');
        $('#head .navbarTag').addClass('myNavbar');
    }
});