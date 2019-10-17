function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
	sliderImages.forEach((sliderImage) => {
		// half way through the image
		const slideInAt =
			window.scrollY + window.innerHeight - sliderImage.height / 15;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));

// Blur animation

window.onscroll = function() {
	var target = document.getElementById('target');

	var height = window.innerHeight;

	var scrollTop =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (
					document.documentElement ||
					document.body.parentNode ||
					document.body
			  ).scrollTop;

	// Change this if you want it to fade faster
	height = height / 10;

	target.style.opacity = (height - scrollTop) / height;
};
