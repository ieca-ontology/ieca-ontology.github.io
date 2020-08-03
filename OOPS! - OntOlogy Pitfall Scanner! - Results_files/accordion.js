$(document).ready(function(){
	
	//$(".accordion h3:first").addClass("active");
	//$(".accordion p:not(:first)").hide();
	$(".accordion h3").addClass("active");
	$(".accordion p").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("fast");
		siblings("p:visible").slideUp("fast");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});