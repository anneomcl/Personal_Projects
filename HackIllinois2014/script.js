var redClicked=false;
var secondClick=false;
var square="NW";
var typeName="Calm";

$(document).ready(function() {
   $('#red').mouseenter(function() {
		$(this).animate({
           height: '+=50px',
			width: '+=50px',
			top:'-=25px',
			left:'-=25px',
       }); 

		
		
		
   });
   
   
      $('#red').mouseleave(function() {
	  if(redClicked != true){
       $(this).animate({
           height: '-=50px',
			width: '-=50px',
			top:'+=25px',
			left:'+=25px',
			
       }); 
	   
	   
	   
	   }
   });
   
 
   
   $('#red').click(function() {
   if(redClicked != true){
    redClicked=true;
	
	
	    $('#redText').animate({
			opacity: '0.0'
       });
	   
	   $(this).delay( 200 ); 
	
       $(this).animate({
           height: '+=330px',
			width: '+=330px',
			top:'-=165px',
			left:'-=165px',
			
       }); 
	   
	   $(this).animate({
			opacity: '0.0'},{
			duration:500
       }); 
	     $(this).delay( 1000 ); 
	     $('#dtable1').delay( 1050 ); 
		 
		$('#dtable1').fadeIn(1000);
		//$('#back').fadeIn(1800);
		
		
	}
	});
	
	
	
	
	   $('#green').mouseenter(function() {
		$(this).animate({
           height: '+=50px',
			width: '+=50px',
			},{
			duration:250
       }); 
	   		$('#blue').animate({
           top: '+=25px',
			//width: '+=50px',
			},{
			duration:250
       }); 
 		$('#yellow').animate({
         //  top: '+=25px',
			left: '+=50px',
			},{
			duration:250
       }); 
			   	   $('#table1').animate({
           top: '-=50px',
			left: '-=50px',
			},{
			duration:250
       }); 
		
		
   });
   
   
      $('#green').mouseleave(function() {
	
       $(this).animate({
           height: '-=50px',
			width: '-=50px',
						},{
			duration:50
       }); 
	   
	     		$('#blue').animate({
           top: '-=25px',
				},{
			duration:50
       }); 
	   $('#yellow').animate({
         //  top: '+=25px',
			left: '-=50px',
			},{
			duration:50
       }); 
	   	   $('#table1').animate({
           top: '+=50px',
			left: '+=50px',
			},{
			duration:50
       }); 
	   

   });
   
   
   	   $('#blue').mouseenter(function() {
		$(this).animate({
           height: '+=50px',
			width: '+=50px',
       	},{
			duration:250
       }); 
	   		$('#green').animate({
           top: '+=25px',
			//width: '+=50px',
			},{
			duration:250
       }); 
	   	   	   $('#table1').animate({
           top: '-=50px',
			},{
			duration:250
       }); 

		
		
		
		
   });
   
   
      $('#blue').mouseleave(function() {
	
       $(this).animate({
           height: '-=50px',
			width: '-=50px',
       	},{
			duration:50
       }); 
		$('#green').animate({
           top: '-=25px',
			//width: '+=50px',
			},{
			duration:50
       }); 
	   $('#table1').animate({
           top: '+=50px',
			},{
			duration:50
       }); 
	   

   });
   
   
   
   	   $('#yellow').mouseenter(function() {
		$(this).animate({
           height: '+=50px',
			width: '+=50px',
			},{
			duration:250
       }); 

	   
	   	 $('#pink').animate({
           top: '-=25px',
			//width: '+=50px',
			},{
			duration:250
       }); 
 		$('#green').animate({
         //  top: '+=25px',
			left: '+=50px',
			},{
			duration:250
       }); 
			   	   $('#table1').animate({
       
			left: '-=50px',
			},{
			duration:250
       }); 
		
		
		
   });
   
   
      $('#yellow').mouseleave(function() {
	
       $(this).animate({
           height: '-=50px',
			width: '-=50px',
					},{
			duration:50
       }); 
	   	$('#pink').animate({
           top: '+=25px',
				},{
			duration:50
       }); 
	   $('#green').animate({
         //  top: '+=25px',
			left: '-=50px',
		},{
			duration:50
       }); 
	   	   $('#table1').animate({
      
			left: '+=50px',
			},{
			duration:50
       }); 
	   
	   

   });
   
   
   
   	   $('#pink').mouseenter(function() {
		$(this).animate({
           height: '+=50px',
			width: '+=50px',
			},{
			duration:250
       }); 

		$('#yellow').animate({
           top: '-=25px',
			//width: '+=50px',
			},{
			duration:250
       }); 
		
		
   });
   
   
      $('#pink').mouseleave(function() {
	
       $(this).animate({
           height: '-=50px',
			width: '-=50px',
				},{
			duration:50
       }); 
	   
	   $('#yellow').animate({
           top: '+=25px',
		},{
			duration:50
			//width: '+=50px',
       }); 
	   

   

   });
	
	
	
	
		 $('#green').click(function() {
		 if(secondClick != true){
		 secondClick = true;
		  typeName="Calm";
		$('#blue').animate({backgroundColor: '#B27212'});
		$('#yellow').animate({backgroundColor: '#4C3108'});
		$('#pink').animate({backgroundColor: '#FFB547'});
		$('#inspireMe5').text("What is stressing you out?").fadeIn(1000);
		$('#inspireMe5').css('color', '#4C3108');
		$("#inspireMe1").fadeOut(function() {
		  $(this).text("Relationships").fadeIn();
		});
			$("#inspireMe2").fadeOut(function() {
		  $(this).text("Career").fadeIn();
		});
			$("#inspireMe3").fadeOut(function() {
		  $(this).text("Future").fadeIn();
		});
			$("#inspireMe4").fadeOut(function() {
		  $(this).text("Finance").fadeIn();
		});
       }else{
	   square="NW";
	  
	    window.location.href = "results.html?typeName="+typeName+"&square="+square;
	   }
	   	  
      // window.location.href = "results.html?fjdksjfkldsjfklsdjfdsk";
   }); 
     $('#blue').click(function() {
	 
	 if(secondClick != true){
	 	 secondClick = true;
		  typeName="Motivate";
		$('#green').animate({backgroundColor: '#361536'});
		$('#yellow').animate({backgroundColor: '#DAA3DA'});
		$('#pink').animate({backgroundColor: '#6D2B6D'}); 
		$('#inspireMe5').text("Why do you need motivation?").fadeIn(1000);
		$('#inspireMe5').css('color', '#DAA3DA');
			$("#inspireMe1").fadeOut(function() {
		  $(this).text("Struggling").fadeIn();
		});
			$("#inspireMe2").fadeOut(function() {
		  $(this).text("Uninterested").fadeIn();
		});
			$("#inspireMe3").fadeOut(function() {
		  $(this).text("Procrastinating").fadeIn();
		});
			$("#inspireMe4").fadeOut(function() {
		  $(this).text("Unsure").fadeIn();
		  $(this).css("left","-2px");
		});	
		}
		else{
		square="NE";
	  
window.location.href = "results.html?typeName="+typeName+"&square="+square;	   }
		//  window.location.href = "results.html?fjdksjfkldsjfklsdjfdsk";
   }); 
     $('#yellow').click(function() {
	 if(secondClick != true){
	 	 secondClick = true;
		  typeName="Hopeful";
		$('#green').animate({backgroundColor: '#1C451C'});
		$('#blue').animate({backgroundColor: '#AEF2AE'});
		$('#pink').animate({backgroundColor: '#40A140'}); 
		$('#inspireMe5').text("Why are you down?").fadeIn(1000);
			$('#inspireMe5').css('color', '#AEF2AE');
		$("#inspireMe1").fadeOut(function() {
		  $(this).text("Failure").fadeIn();
		});
			$("#inspireMe2").fadeOut(function() {
		  $(this).text("Low self-esteem").fadeIn();
		});
			$("#inspireMe3").fadeOut(function() {
		  $(this).text("Moving forward").fadeIn();
		});
			$("#inspireMe4").fadeOut(function() {
		  $(this).text("Loneliness").fadeIn();
		});	
		}
		else{
		square="SW";
	  
window.location.href = "results.html?typeName="+typeName+"&square="+square;	   }// window.location.href = "results.html?fjdksjfkldsjfklsdjfdsk";
   }); 
     $('#pink').click(function() {
	 if(secondClick != true){
	 	 secondClick = true;
		   typeName="Happiness";
		$('#green').animate({backgroundColor: '#0F2E4C'});
		$('#blue').animate({backgroundColor: '#99CCFF'});
		$('#yellow').animate({backgroundColor: '#1F5C99'}); 
		$('#inspireMe5').text("How are you feeling?").fadeIn(1000);
		$('#inspireMe5').css('color', '#99CCFF');
		$("#inspireMe1").fadeOut(function() {
		  $(this).text("Angry").fadeIn();
		});
			$("#inspireMe2").fadeOut(function() {
		  $(this).text("Sad").fadeIn();
		});
			$("#inspireMe3").fadeOut(function() {
		  $(this).text("Jealous").fadeIn();
		});
			$("#inspireMe4").fadeOut(function() {
		  $(this).text("Guilty").fadeIn();
		});	
		}
		else{
		square="SE";
		
	 
window.location.href = "results.html?typeName="+typeName+"&square="+square;	   }//  window.location.href = "results.html?fjdksjfkldsjfklsdjfdsk";
   }); 
	
	
});

//$('#dtable1').fadeIn(1000);

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
