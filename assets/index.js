//sticky header thing
var shrinkHeader = 96
var siteHeaderEl = document.querySelector('.site-header')
window.addEventListener('scroll', function(e) {
	var scroll = getCurrentScroll()

	if ( scroll >= shrinkHeader ) {
		siteHeaderEl.classList.add('site-header--sticky')
	}
	else {
		siteHeaderEl.classList.remove('site-header--sticky')
	}
});
function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

//back-button
var backBtn = document.querySelector('.back-button')

backBtn.addEventListener('click', function () {
	zenscroll.toY(0)
})
