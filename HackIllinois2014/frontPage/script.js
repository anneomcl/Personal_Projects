$(document).ready(function() {
   $('#redText').mouseenter(function() {
		$(this).fadeOut(1000);
		$('#dtable1').fadeIn(1000);
   });
   
   $('#green').click(function() {
 window.location.href = "results.html?fjdksjfkldsjfklsdjfdsk";
});

   /*
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); */
    // $('div').toggle(1000);
});