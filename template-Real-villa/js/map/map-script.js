
(function ($) {
  "use strict";

$(function() {

    // Snazzy Map Style - https://snazzymaps.com/style/8097/wy
    var mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#26ae61"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
	var center = { lat: 40.712776, lng: -74.005974 };
	var offsetCenter = function(dx, dy) {
        return { lat: center.lat + dx, lng: center.lng + dy };
    };
	// Add a custom marker
    var markerIcon = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: '#26ae61',
        fillOpacity: 0.95,
        scale: 2,
        strokeColor: '#fff',
        strokeWeight: 3,
        anchor: new google.maps.Point(12, 24)
    };

    // Set latitude longitude units of the map where you want to center your map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 12,
        styles: mapStyle,
        center: new google.maps.LatLng(40.712776, -74.005974)
    });


// Blow you can find all map listing items. You can add/edit/remove these listings as per your need

// Map Listing items START
	var dx = 0.003;
    var placements = [

        {
            title: 'Ample apartment at last floor',
            link: '#',
            bgImg: 'images/property/grid/01.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
			LatLng: { lat : 40.718062, lng : -74.078939 }
		},

		{
			title: 'Awesome family home',
            link: '#',
            bgImg: 'images/property/grid/02.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Border st. nicholasville, ky</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
			LatLng: { lat : 40.723945, lng : -74.000588 },
		},
		{
			title: 'Contemporary apartment',
            link: '#',
            bgImg: 'images/property/grid/03.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Newport st. mebane, nc</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
			LatLng: { lat : 40.731375, lng : -74.006193 },
		},
		{
			title: 'Family home for sale',
            link: '#',
            bgImg: 'images/property/grid/04.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Vermont dr. hephzibah</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
			LatLng: { lat : 40.733391, lng : -73.985345 },
		},
        {
            title: 'Luxury villa with pool',
            link: '#',
            permalink: 'hitest',
            bgImg: 'images/property/grid/05.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> West Indian St. Missoula</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.731245, lng : -74.032788 },
        },
        {
            title: '184 lexington avenue',
            link: '#',
            bgImg: 'images/property/grid/06.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Hamilton rd. willoughby, oh</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.728991, lng : -74.167134 },
        },
        {
            title: '217 central park south',
            link: '#',
            bgImg: 'images/property/grid/01.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.682143, lng : -74.259448 },
        },
        {
            title: 'The citizen apartment 5th floor',
            link: '#',
            bgImg: 'images/property/grid/02.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.748761, lng : -74.306119 },
        },
        {
            title: 'Green leaf apartments',
            link: '#',
            bgImg: 'images/property/grid/03.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.675113, lng : -73.843865 },
        },
        {
            title: 'Master valley estates',
            link: '#',
            bgImg: 'images/property/grid/04.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.727430, lng : -73.800626 },
        },
        {
            title: '3 bedroom house in gardner',
            link: '#',
            bgImg: 'images/property/grid/05.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.715981, lng : -73.897336 },
        },
        {
            title: 'Stunning 2 bedroom home in village',
            link: '#',
            bgImg: 'images/property/grid/06.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.669385, lng : -73.705160 },
        },
        {
            title: 'Centrally located town home',
            link: '#',
            bgImg: 'images/property/grid/01.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.826483, lng : -74.014765 },
        },
        {
            title: 'Executive 4 bed WDM ranch',
            link: '#',
            bgImg: 'images/property/grid/02.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.884132, lng : -73.913512 },
        },
        {
            title: 'Cottage woods housed for sale',
            link: '#',
            bgImg: 'images/property/grid/03.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.915531, lng : -74.062449 },
        },
        {
            title: 'Lawn court villa',
            link: '#',
            bgImg: 'images/property/grid/04.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.653759, lng : -73.994861 },
        },
        {
            title: 'Master valley estates',
            link: '#',
            bgImg: 'images/property/grid/05.jpg',
            body: '<p><i class="fas fa-map-marker-alt pr-2"></i> Virginia drive temple hills.</p>' +
                '<div class="d-flex align-items-center mt-2 property-item-map-price"><h6>$232454 / mon</h6><span class="ml-auto">$232454 / mon</span></div>' +
                 '<a href="#">Alice William</a>',
            LatLng: { lat : 40.669385, lng : -74.116001 },
        },

    ];
// Map Listing items END

    $.each(placements, function(i, e) {

    var marker = new google.maps.Marker({
        map: map,
        icon: markerIcon,
        position: e.LatLng //new google.maps.LatLng(40.72, -74)
    });

    // Set up handle bars
    var template = Handlebars.compile($('#marker-content-template').html());

    // Set up a close delay for CSS animations
    var info = null;
    var closeDelayed = false;
    var closeDelayHandler = function() {
        $(info.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            info.close();
        }, 300);
    };


    // Add a Snazzy Info Window to the marker
    info = new SnazzyInfoWindow({
        marker: marker,
        wrapperClass: 'custom-window',
        offset: {
            top: '-72px'
        },
        edgeOffset: {
            top: 50,
            right: 60,
            bottom: 50
        },
        closeWhenOthersOpen: true,
        border: false,
        closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
        content: template({
            title: e.title,
            link:e.link,
            subtitle: e.subtitle,
            bgImg: e.bgImg,
            body: e.body
        }),
        callbacks: {
            open: function() {


                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeDelayHandler);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeDelayHandler();
                    return false;
                }
                return true;
            },
            afterClose: function() {
                var wrapper = $(this.getWrapper());
                wrapper.find('.custom-close').off();
                wrapper.removeClass('open');
                closeDelayed = false;
            }
        }
    });
	});


    // Open the Snazzy Info Window
   // info.open();
});

})(jQuery);
