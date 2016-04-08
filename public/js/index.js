//toggle between what is shown: either what-it-is or how-it-works
$(".what-it-is").on("click", function(){
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
	$(this).parent().nextAll(".how-it-works").fadeOut(200, function(){
		$(this).siblings().fadeIn(300);
	});
});

$(".how-it-works").on("click", function(){
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
	$(this).parent().nextAll(".what-it-is").fadeOut(200, function(){
		$(this).siblings().fadeIn(300);
	});
});
