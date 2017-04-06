//sticky header thing
var shrinkHeader = 96
var siteHeaderEl = document.querySelector('.site-header')
var isInstagramReady = false

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

	var height = Math.max( document.body.scrollHeight, document.body.offsetHeight)

	if (!isInstagramReady && scroll > height - window.innerHeight*4) {
		initInstagram()
	}
}



//back-button
var backBtn = document.querySelector('.back-button')

backBtn.addEventListener('click', function () {
	zenscroll.toY(0)
})



//TODO: elastic buttons
var btns = document.querySelectorAll('.t-btn')

for (var i = 0; i < btns.length; i++) {
	//return
}

function initInstagram () {
	isInstagramReady = true;

	//instafeed
	if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		var feed = new Instafeed({
			accessToken: '235480280.3a81a9f.45a7edf8b588430f850c2cec801d3d9f',
			userId: '235480280',
			get: 'user',
			limit: 9,
			resolution: 'thumbnail',
			template: '<a class="insta-item" href="{{link}}"><div class="insta-image" style="background-image:url({{image}})"></div></a>'
		});
		feed.run();
	}
}
