$(document).ready(function() {

gridcreation(16);


$('.squarediv').on('mouseenter',function () {

	$(this).addClass("highlight")

} );

	$('#usergrid').on('click', function() {

		var newsize = prompt("How many squares per side would you like?", "16");

		$(".squarediv").remove();

		var newwidth = 960/newsize;

		gridcreation(newsize);

		$(".squarediv").css( {"width":newwidth, "height":newwidth });

		$('.squarediv').on('mouseenter',function () {

		$(this).addClass("highlight") } );

	});


	$('#pencil').on('click', function() {

		$('.squarediv').removeClass("highlight");
		$('.squarediv').css({"background-color":"white"});
		$('.squarediv').css({"filter":"brightness(100%)"});

			$('.squarediv').on('mouseenter',function () {

			$(this).css({"background-color":"white"});
			var currentbright = +$(this).css("filter").replace(/[^0-9]/g,'');


			$(this).css({"filter":changebright(currentbright)});
			console.log($(this).css("filter"));



	});

	});


	$('#color').on('click', function() {

			$('.squarediv').removeClass("highlight");
			$('.squarediv').css({"background-color":"white"});
			$('.squarediv').css({"filter":"brightness(100%)"});

			$('.squarediv').on('mouseenter',function () {

			$(this).css({"background-color": randomcolor()});


			});


	});







});






var gridcreation = function(size) {

	var totalsquare = size*size;

	for (i=0;i<totalsquare;i++) {

$('#container').append('<div class="squarediv"></div>');

};
};


var randomcolor = function() {

var rgb1 = Math.floor(Math.random() * 255);
var rgb2 = Math.floor(Math.random() * 255);
var rgb3 = Math.floor(Math.random() * 255);

return "rgb("+rgb1+ ","+ rgb2+","+ rgb3 +")";

};




var changebright = function(currentbright) {


	if (currentbright>0) {

	 var newbright = currentbright - 10;
	 console.log(currentbright);

	 return "brightness("+newbright+"%)";

	}

}