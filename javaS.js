



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


  function showImagesTextLeft(wrap, text, img) {

      $(wrap).each(function(){
          if (scrollCheck($(this))) {
              $(text).each(function(){
                  
                  if($(this).css('left') == '-50px')
                    moveFromLeft($(this));
              });
              $(img).each(function(){
                  $(this).addClass("fadeInSlow");
              });
          }
      });
  }
  function showImagesTextRight(wrap, text, img) {

      $(wrap).each(function(){
          if (scrollCheck($(this))) {
              $(text).each(function(){
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
    showImagesTextRight('.grpMdlmWrap', '.grpMdlmWrap .tekstRight', '.grpMdlmWrap .fadeSlow');
  });

  $(window).scroll(function() {
    showImagesTextRight('.grpMdlmWrap', '.grpMdlmWrap .tekstRight', '.grpMdlmWrap .fadeSlow');
  });

$(document).ready(function(){
    showImagesTextLeft('.grpMdlmWrap', '.grpMdlmWrap .tekstLeft', '.grpMdlmWrap .fadeSlow');
  });

  $(window).scroll(function() {
    showImagesTextLeft('.grpMdlmWrap', '.grpMdlmWrap .tekstLeft', '.grpMdlmWrap .fadeSlow');
  });





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