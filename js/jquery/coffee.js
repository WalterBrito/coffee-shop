// Coffee fadein effect
$(document).ready(function(){
    $("img").click(function(){
        $(".thumbnail").fadeIn();
        $(".thumbnail").fadeIn("slow");
        $(".thumbnail").fadeIn(3000);
    });
});