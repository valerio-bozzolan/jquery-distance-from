/*
 * Distance-from - Distance from a Leaflet L.latLng object
 * Copyright (C) 2015 Valerio Bozzolan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function ( $ ) {
	$.fn.distanceFrom = function( options ) {
		if(!L.version) {
			$.error("You have to include Leaflet before distance-from! Visit http://leafletjs.com");
		}

		var opts = $.extend( {}, $.fn.distanceFrom.defaults, options );
		this.each(function() {
			var lat, lng, distance;
			if(opts.lat && opts.lng) {
				lat = opts.lat;
				lng = opts.lng;
				$(this).attr(opts.latAttr, opts.lat).attr(opts.lngAttr, opts.lng);
			} else {
				lat = $(this).attr(opts.latAttr);
				lng = $(this).attr(opts.lngAttr);
				if(!lat || !lng) {
					$.error("You have to set lat and lng options");
					return false;
				}
			}

			if(opts.fromPosition) {
				distance = L.latLng(lat, lng).distanceTo( opts.fromPosition );
				if(distance > 1000) {
					distance = distance / 1000;
					distance = distance.toFixed(opts.kmPrecision) + "Km";
				} else {
					distance = parseInt(distance) + "m";
				}	

			}
			if(!distance) {
				distance = opts.nothingTxt;
			}
			$(this).text(distance);
		});

		return this;
	};
	$.fn.distanceFrom.defaults = {
		latAttr: "data-lat",
		lngAttr: "data-lng",
		nothingTxt: "-",
		kmPrecision: 1,
		fromPosition: undefined/* L.latLng */
	};
}( jQuery ));
