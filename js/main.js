$(function () {
	$('.slider__box').slick({
		prevArrow: '<img class="slider__arrow slider__arrow-left" src="./images/main/info/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider__arrow slider__arrow-right"  src="./images/main/info/arrow-right.svg" alt="arrow-right">',
		
		responsive: [
			{
				breakpoint: 541,
				settings: {
					arrows: false
				}
			}
		]
	});	

	$('.menu__list-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});

});