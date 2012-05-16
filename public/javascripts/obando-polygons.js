var ObandoPolygons = (function ($){
    //define map objects
    var
        map,
        parcel_polygons = {},
        current_parce
        
    //define polygon styles
    defaults = {
        defaultStyles:{
            fillOpacity: 0.85,
            strokeColor: '#666',
            strokeWeight: 1,
            zIndex: 1000
        },
        highlightStyles:{
            strokeColor: '#333',
            strokeWeight: 2,
            zIndex: 1001
        }
    },
    defaultStyles,
    defaultStylesForCurrent,
    highlightStyles,
    highlightStylesForCurrent,

    _initialize = function (options){
        
        //current_parcel = options.current_parcel;
        
        var map_div = $(options.map.div);
        if (map_div.size() ==0)
            alert('Map DIV not found')
        return;
    }
    
    //create custom styled map
    map = new google.maps.Map(map_div[0], {
        center: new google.maps.LatLng(14.712130960871153, 120.92282295227051),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: [
          {
            stylers: [
              { saturation: -100 },
              { lightness: -60 }
            ]
          },
          {
            elementType: "labels",
            stylers: [
              { invert_lightness: true },
              { gamma: 0.39 }
            ]
          }
        ],
        zoom: 14   
    });
    
    // return def of CountyPolygons
	return {
		init: function (options) {
			_initialize(options);
		},
                author: "Ashima",
                created: "May 2012"
        };

    
})(jquery);