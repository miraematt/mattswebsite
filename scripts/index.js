var greeting;
var nowDate = new Date();
var nowHour = nowDate.getHours();
if (nowHour < 12) {
	greeting = "Good Morning";
} else if (nowHour < 17) {
	greeting = "Good Afternoon";
} else {
	greeting = "Good Evening";
}

var myHeading = document.querySelector("#intro");
myHeading.textContent = greeting + " and Welcome";

$(document).ready(function() {

	$("#intro").fadeIn(2300,function() {
		$(".jumbotron p").css("visibility","visible").css("display", "none");
	$(".jumbotron p").fadeIn(2300);
	}).css("display","inline-block");

	$(".dropdown").click(function() {
    	$(".dropdown-menu").toggle();
  	});
	$(document).click(function(){
  		$(".dropdown-menu").fadeOut();
	});
	$(".dropdown").click(function(e){
  		e.stopPropagation();
	});

	$(document).scroll(function() {
  		var y = $(this).scrollTop();
  		if (y > 100) {
    		$(".fadein").fadeIn();
  		} else {
    		$(".fadein").fadeOut();
  		};
	});
   
});


