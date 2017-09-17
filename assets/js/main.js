console.log("script.js");

function indicaEvents() {
	$('.indica-image').on('click', function(){
	$('.indica-hidden-text').toggleClass('indica-active');
	$('.indica-description').toggleClass('indica-description-active');

	$('.white-arrow-down').toggleClass('indica-active-x');

	});
}

function sativaEvents() {
	$('.sativa-description').on('click', function(){
	$('.sativa-hidden-text').toggleClass('sativa-active');
	$('.sativa-description').toggleClass('sativa-description-active');

	$('.white-arrow-down').toggleClass('sativa-active-x');

	});
}


indicaEvents();
sativaEvents();

