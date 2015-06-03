# jquery-distance-from
[jQuery](http://jquery.com) plugin to dinamically display a distance from a point to another (use with [LeafLet](http://leafletjs.com)).

## Usage

```html
<!-- ... -->

<p id="test1" data-lat="45.33" data-lng="7.57"></p>
<p id="test2"></p>
<p id="test3"></p>

<script type="text/javascript">
	// Setting the default position:
	$.fn.distanceFrom.defaults.fromPosition = latLng(45.072, 7.71); // Set default "from" position

	$(document).ready(function() {

		// From the specified "to" position in the DOM to the default "from" position
		$("#test1").distanceFrom();

		// From the specified "to" position to the default "from" position
		$("#test2").distanceFrom({
			lat: 45.33,
			lng: 7.57
		});

		// From the specified "to" position to the specified "from" position
		$("#test3").distanceFrom({
			lat:45.33,
			lng:7.57,
			fromPosition: L.latLng(45.072, 7.71)
		});

	});
</script>

<!-- ... -->
```

## Licence
Released under the terms of the GNU Affero General Public License ([GNU AGPL](http://www.gnu.org/licenses/agpl-3.0.html)).
