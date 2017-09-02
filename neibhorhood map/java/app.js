/* model starts here*/
var locations = [{
	title: 'Lotus Temple',
	location: {
		lat: 28.5535,
		lng: 77.2588
	},
	show: true,
	selected: false,
	id: '4ba48dc3f964a520e2a338e3'
}, {
	title: 'India Gate',
	location: {
		lat: 28.6129,
		lng: 77.2295
	},
	show: true,
	selected: false,
	id: '4b5eeab3f964a520ca9d29e3'
}, {
	title: 'Gurudwara Sisganj Sahib',
	location: {
		lat: 28.6562,
		lng: 77.2297
	},
	show: true,
	selected: false,
	id: '4c814027d34ca143ba9a2080'
}, {
	title: 'Qutub Minar',
	location: {
		lat: 28.5244,
		lng: 77.1855
	},
	show: true,
	selected: false,
	id: '4ba47c9bf964a520fe9f38e3'
}, {
	title: 'Jama Masjid',
	location: {
		lat: 28.6507,
		lng: 77.2334
	},
	show: true,
	selected: false,
	id: '4ba47c9bf964a520fe9f38e3'
}, {
	title: 'Connaught Place',
	location: {
		lat: 28.6315,
		lng: 77.2167
	},
	show: true,
	selected: false,
	id: '4b489b54f964a520595026e3'
}];
var markers = [];
var viewModel = function() {
	var self = this;;
	var largeinfowindow = new google.maps.InfoWindow();
	for (var i = 0; i < locations.length; i++) {
		var position = locations[i].location;
		var title = locations[i].title;
		var defaultIcon = makeMarkerIcon('0091ff');
		var highlightedIcon = makeMarkerIcon('FFFF24');
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			show: ko.observable(locations[i].show),
			selected: ko.observable(locations[i].selected),
			venue: locations[i].id,
			rating: '',
			likes: '',
			images: ''
		});
		markers.push(marker);
		marker.addListener('click',function(){
			bounceIcon(this);
		  populateInfoWindow(this, largeinfowindow);
		});
		/*marker.addListener('mouseover', function() {

		});*/

	}
	markers.forEach(function(marker) {
		//console.log(marker);
		$.ajax({
			method: 'GET',
			dataType: 'json',
			url: 'https://api.foursquare.com/v2/venues/' + marker.venue + '?client_id=SD1JX5BDHFSWFECGKPS1SD0FXHRW3IVMXWC4SOWTEKOBFJAQ&client_secret=U42H0YIZWF0UQSB3SC0T1UKFKP3JAQCNIYZJVJDK0OVAMCFU&v=20170305',
			success: function(data) {
				var request = data.response.venue;
				var image = data.response.venue.photos.groups[0].items[0];
				if (request.hasOwnProperty('rating')) {
					marker.rating = request.rating;
				} else {
					marker.rating = "Error Rating";
				}
				if (request.hasOwnProperty('likes')) {
					marker.likes = request.likes.summary;
				} else {
					marker.likes = 'Likes Error Found';
				}
				if (image.hasOwnProperty('prefix') && image.hasOwnProperty('suffix')) {
					marker.images = image.prefix + "100*100" + image.suffix;
				} else {
					marker.images = ' Error Found';
				}
			},
			error: function(e) {
				alert("Error loading in id");
			}
		});
	});

	function makeMarkerIcon(markerColor) {
		var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2', new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34), new google.maps.Size(21, 34));
		return markerImage;
	}

	function populateInfoWindow(marker, infowindow) {
		// Check to make sure the infowindow is not already opened on this marker.
		infowindow.marker = marker;
		infowindow.setContent('<div>' + marker.title + '<br>' + marker.rating + '<br>' + marker.likes + '</div>');
		if (marker.rating != null) {
			infowindow.open(map, marker);
		}
		// Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick', function() {
			infowindow.marker = null;
		});
	}

	function bounceIcon(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		marker.setIcon(highlightedIcon);
		setTimeout(function() {
			marker.setAnimation(null);
			marker.setIcon(defaultIcon);
		}, 750);
		populateInfoWindow(marker, largeinfowindow)
	}
	this.Bounce = function(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		marker.setIcon(highlightedIcon);
		setTimeout(function() {
			marker.setAnimation(null);
			marker.setIcon(defaultIcon);
		}, 750);
		populateInfoWindow(marker, largeinfowindow)
	};
	this.searchbar = ko.observable('');
	//console.log(this.query);
	this.filterList = function() {
		var text = this.searchbar();
		largeinfowindow.close();
		//to close all the windows
		if (text.length === 0) {
			this.setAllShow(true);
		} else {
			for (var i = 0; i < markers.length; i++) {
				// to check whether the searchText is there in the mapArray
				if (markers[i].title.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
					markers[i].show(true);
					markers[i].setVisible(true);
				} else {
					markers[i].show(false);
					markers[i].setVisible(false);
				}
			}
		}
		largeinfowindow.close();
	};
	// to show all the markers
	this.setAllShow = function(marker) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].show(marker);
			markers[i].setVisible(marker);
		}
	};
}
