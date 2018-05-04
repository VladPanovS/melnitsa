    $(document).ready(function() {
    $('.logo-top').click(function(){
           $('html, body').animate({scrollTop:$('#br').position().top}, 2000);
    });
    $('.bl').click(function(){
           $('html, body').animate({scrollTop:$('#bar').position().top}, 2000);
    });
    $('.rl').click(function(){
           $('html, body').animate({scrollTop:$('#rest').position().top}, 2000);
    });
    $('.sl').click(function(){
           $('html, body').animate({scrollTop:$('#socials').position().top}, 2000);
    });
    $('.cl').click(function(){
           $('html, body').animate({scrollTop:$('#contact').position().top}, 2000);
    });
  });
