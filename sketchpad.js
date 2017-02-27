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

	$(this).addClass("highlight")
} );



});


});






var gridcreation = function(size) {

	var totalsquare = size*size;

	for (i=0;i<totalsquare;i++) {

$('#container').append('<div class="squarediv"></div>');

};
}