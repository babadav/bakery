console.log("script.js");

function indicaEvents() {
	$('.indica-description').on('click', function(){
		$('.indica-hidden-text').toggleClass('indica-active');
		$('.indica-description').toggleClass('indica-description-active');

		$('.white-arrow-down').toggleClass('indica-active-x');


		$('.sativa-hidden-text').removeClass('sativa-active');
		$('.sativa-description').removeClass('sativa-description-active');

		$('.white-arrow-down').removeClass('sativa-active-x');
	});
}

function sativaEvents() {
	$('.sativa-description').on('click', function(){
		$('.sativa-hidden-text').toggleClass('sativa-active');
		$('.sativa-description').toggleClass('sativa-description-active');

		$('.white-arrow-down').toggleClass('sativa-active-x');

		$('.indica-hidden-text').removeClass('indica-active');
		$('.indica-description').removeClass('indica-description-active');

		$('.white-arrow-down').removeClass('indica-active-x');

	});
}

if (window.innerWidth >= 465) {
	$('.break').html('<br>');
};

if (window.innerWidth >= 769) {

	$('.choclate-fruits-title').html('<p>chocolates, fruits, & nuts</p>');
};


indicaEvents();
sativaEvents();

