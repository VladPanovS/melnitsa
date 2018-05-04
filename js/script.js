$( document ).ready(function() {
    //animation
             var wow = new WOW({
               mobile: false,
             });
             new WOW().init();
    //burgrer menu
             $(".burger").click(function(){
             $(".burger-line").toggleClass("line-active")
             $(".burger").toggleClass("rotate")
             $(".menu").toggleClass("open");
         });
  
   //rooms dropdowns
    //         $(".complex-drp").click(function(){
      //       $(".complex-drp-hidden").toggleClass("open-drp");
        //   });
        //     $(".complex-drp-two").click(function(){
        //     $(".complex-drp-hidden-two").toggleClass("open-drp-two")
        //   });
});
