new Swiper('.slider-1', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	}
});
new Swiper('.slider-2', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	}
});
$(document).ready(function () {
	$('.name').on('mouseover',function(){
		let photo = this.getAttribute('photo-href');
		document.querySelector('.img').setAttribute('src', photo);
  })
});