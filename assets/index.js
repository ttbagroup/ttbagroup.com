//sticky header thing
var shrinkHeader = 96
var siteHeaderEl = document.querySelector('.site-header')

window.addEventListener('scroll', checkScroll)
checkScroll()

function checkScroll () {
	var scroll = window.pageYOffset || document.documentElement.scrollTop

	if ( scroll >= shrinkHeader ) {
		siteHeaderEl.classList.add('site-header--sticky')
	}
	else {
		siteHeaderEl.classList.remove('site-header--sticky')
	}
}



//back-button
var backBtn = document.querySelector('.back-button')

backBtn.addEventListener('click', function () {
	zenscroll.toY(0)
})



//elastic buttons
var btns = document.querySelectorAll('.t-btn')

for (var i = 0; i < btns.length; i++) {
	//return
}
