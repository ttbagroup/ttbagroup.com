//sticky header thing
var shrinkHeader = 96
var siteHeaderEl = document.querySelector('.site-header')
var isInstagramReady = false

window.addEventListener('scroll', checkScroll)
window.addEventListener('load', checkScroll)


function checkScroll () {
	var scroll = window.pageYOffset || document.documentElement.scrollTop

	//do sticky header
	if ( scroll >= shrinkHeader ) {
		siteHeaderEl.classList.add('site-header--sticky')
	}
	else {
		siteHeaderEl.classList.remove('site-header--sticky')
	}

	//init instagram
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



//init google maps
function initMap() {
    var mapOptions = {
        zoom: 15,
        backgroundColor: 'none',
        disableDefaultUI: true,
        center: {lat: 45.463578, lng: -73.596336},
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#202224"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#323232"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#454545"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#454545"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#454545"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.463578, -73.596336),
        map: map,
        title: 'TTBA Group'
    });


    //add projection to centrize marker
    google.maps.event.addListenerOnce(map,"projection_changed", function() {
	    google.maps.event.addListenerOnce(map,"idle", function() {
	    	updateMap()
			setTimeout(function () {
				updateMap()
				setTimeout(function () {
					updateMap()
				}, 500)
			}, 500)
		})
    	updateMap()
	})

	function updateMap () {
		// var proj = map.getProjection()
	    var overlay = new google.maps.OverlayView();
		overlay.draw = function() {};
		overlay.setMap(map);

		var footerEl = document.querySelector('.site-footer-section--columns')
		var mapSpacer = document.querySelector('.map-pin-spacer')
		var footerRect = footerEl.getBoundingClientRect()
		var mapRect = mapSpacer.getBoundingClientRect()
		var x = .5*(mapRect.right + mapRect.left) - footerRect.left
		var y = .5*(mapRect.bottom + mapRect.top) - footerRect.top
		var w = footerRect.right - footerRect.left
		var h = footerRect.bottom - footerRect.top

		var proj = overlay.getProjection();
		if (!proj) return

		var coords = proj.fromDivPixelToLatLng(new google.maps.Point(w - x, h - y - 5));
		map.setCenter(new google.maps.LatLng(coords.lat(), coords.lng()))
	}

	window.addEventListener('resize', function () {updateMap()})
}


//defer map loading
window.addEventListener('load', function () {
	setTimeout(function () {
		initMap()
	}, 500)
})
