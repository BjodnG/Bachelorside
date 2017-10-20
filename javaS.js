
var start = false;

//Fade sakte
  function showImages(el, ele) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var thisPos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > thisPos ) {
              $(this).addClass("fadeInSlow");
              if(!start){
                moveFromRight();
                start = true;
              }
          }
      });
      /*
      $(ele).each(function(){
          var thisPos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > thisPos ) {
              
                console.log(ele);
                moveFromRight(ele);
                moveFromLeft(ele);
                start = true;
              

          }
      });
      */
  }

  $(document).ready(function(){
    showImages('.fadeSlow', '.tekstRight');
  });

  $(window).scroll(function() {
    showImages('.fadeSlow', '.tekstRight');
  });



//Fade kjapt
  function showImagesFast(el) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var thisPos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > thisPos ) {
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


  function moveFromRight() {
    var elem = document.getElementById("tekstRight");   
    var pos = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos - 1; 
        elem.style.left = pos + 'px';
      }
    }
  }

  function moveFromLeft() {  
    var elem = document.getElementsByClassName("tekstLeft");   
    var pos = -50;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos + 1; 
        elem.style.left = pos + 'px';
      }
    }
  }