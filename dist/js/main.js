$(function(){

	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		autoplay:3000,
		
		
		responsive:[
			{
					breakpoint: 1260,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
		]
	});
});

$(function(){

	$('.rent-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		
		
		
		responsive:[
			{
					breakpoint: 1260,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
		]
	});
});
