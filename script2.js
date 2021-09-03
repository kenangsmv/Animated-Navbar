$(document).ready(function(){
    $(".hamburger").click(function(){
        if ($(".layer").hasClass("open-jaluz")) {
            $(".layer").removeClass("open-jaluz");
            $(".layer").addClass("close-jaluz");
            $(".menu").css("overflow", "hidden");
            $(this).removeClass("exit");      

        }
        else{
            $(".layer").removeClass("close-jaluz");
            $(this).addClass("exit");
            

            $(".layer").addClass("open-jaluz");

            $(".menu").css("overflow", "visible");
            $(".menu").css("transition", "overflow 0.6s !important");


        }
       
        


    })
   

});