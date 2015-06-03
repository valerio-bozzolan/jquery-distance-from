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
  $.fn.distanceFrom.defaults.toPosition = function() {
    return L.latLng(45.072, 7.71); // Set default position "to"
  };
  
  $(document).ready(function() {
  
    // From data-lat & data-lng in the DOM to the above default position
    $("#test1").distanceFrom();
  
    // From the data in the option to the default position
    $("#test2").distanceFrom({
      lat: 45.33,
      lng: 7.57
    });
  
    // From the data in the option to the specified position
    $("#test3").distanceFrom({
      lat:45.33,
      lng:7.57,
      toPosition: L.latLng(45.072, 7.71)
    });
  
  });
</script>

<!-- ... -->
```

## Licence
Released under the terms of the GNU Affero General Public License ([GNU AGPL](http://www.gnu.org/licenses/agpl-3.0.html)).
