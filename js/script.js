$( document ).ready(function() {
    //animation
             var wow = new WOW({
               mobile: false,
             });
             new WOW().init();
    //burgre menu
             $(".burger").click(function(){
             $(".burger-line").toggleClass("line-active")
             $(".burger").toggleClass("rotate")
             $(".menu").toggleClass("open");
         });
});
