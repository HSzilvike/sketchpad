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
		$('.squarediv').css({"background-color":""});

			$('.squarediv').on('mouseenter',function () {

			$(this).css({"background-color":"grey"});


	});

	});


	$('#color').on('click', function() {

			$('.squarediv').removeClass("highlight");
			$('.squarediv').css({"background-color":""});

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