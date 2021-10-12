$(document).ready(function() {
 

    $("#stream1_btn").on("click", function() {
        $(".stream1").show('');
       $(".stream2").hide('slow');
       $(".stream3").show('fast');
         $(".stream1").hide('1000');
   });
   $("#stream2_btn").on("click", function() {
       $(".stream1").toggle();
       $(".stream2").slideDown();
       $(".stream3").removeClass('highlight_stream');
         $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
       $(".stream1").slideDown();
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream3").addClass('highlight_stream');
   });
   $(".stream1").click(function(){
      $(".stream1").css("background-color", "green")
   });
   $(".stream2").mouseenter(function(){
     $(".stream2").css("background-color", "pink")
   })


}); 


// other events
// mouse enter
// mouse leave
// click