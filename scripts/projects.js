
$(document).ready(function() {

	$(".dropdown").click(function() {
    	$(".dropdown-menu").toggle();
  	});
	$(document).click(function(){
  		$(".dropdown-menu").fadeOut();
	});
	$(".dropdown").click(function(e){
  		e.stopPropagation();
	});

   
});


