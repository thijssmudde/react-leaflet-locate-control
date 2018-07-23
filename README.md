# react-leaflet-locate-control

Plugin for React-Leaflet to display locate control

Thanks to https://github.com/domoritz/leaflet-locatecontrol/ on which this react plugin is 100% based on.

## Example

[Demo MyRoutes.io](http://myroutes.io/)

## Installation

```
yarn add react-leaflet-locate-control
```

```javascript
// Import the package
import LocateControl from 'react-leaflet-locate-control'

// Setup LocateControl options
const locateOptions = {
  position: 'topright',
  strings: {
      title: 'Show me where I am, yo!'
  },
  onActivate: () => {} // callback before engine starts retrieving locations
}

// Inside your <Map> component add LocateControl
<Map>
  <LocateControl options={locateOptions} startDirectly/>
</Map>
```

startDirectly : Instantly start the locate control

## Options

| Option     | Type      | Description       |  Default |
|------------|-----------|-------------------|----------|
| `position` | `string`  | Position of the control | `topleft` |
| `layer` | [`ILayer`](http://leafletjs.com/reference.html#ilayer)  | The layer that the user's location should be drawn on. | a new layer |
| `setView` | `boolean`  or `string`  | Set the map view (zoom and pan) to the user's location as it updates. Options are `false`, `'once'`, `'always'`, `and 'untilPan'` | `untilPan` |
| `flyTo` | `boolean` | Smooth pan and zoom to the location of the marker. Only works in Leaflet 1.0+. | `false` |
| `keepCurrentZoomLevel` | `boolean`  | Only pan when setting the view. | `false` |
| `clickBehavior` | `object`  | What to do when the user clicks on the control. Has two options `inView` and `outOfView`. Possible values are `stop` and `setView`. | `{inView: 'stop', outOfView: 'setView'}` |
| `returnToPrevBounds` | `boolean`  | If set, save the map bounds just before centering to the user's location. When control is disabled, set the view back to the bounds that were saved. | `false` |
| `cacheLocation` | `boolean` | Keep a cache of the location after the user deactivates the control. If set to false, the user has to wait until the locate API returns a new location before they see where they are again. |
| `drawCircle` | `boolean`  | If set, a circle that shows the location accuracy is drawn. | `true` |
| `drawMarker` | `boolean`  | If set, the marker at the users' location is drawn. | `true` |
| `markerClass` | `class`  | he class to be used to create the marker. | `L.CircleMarker` |
| `circleStyle` | [`Path options`](http://leafletjs.com/reference.html#path-options) | Accuracy circle style properties. | see code |
| `markerStyle` | [`Path options`](http://leafletjs.com/reference.html#path-options) | Inner marker style properties. Only works if your marker class supports `setStyle`. | see code |
| `followCircleStyle` | [`Path options`](http://leafletjs.com/reference.html#path-options)  | Changes to the accuracy circle while following. Only need to provide changes. | `{}` |
| `followMarkerStyle` | [`Path options`](http://leafletjs.com/reference.html#path-options)  | Changes to the inner marker while following. Only need to provide changes. | `{}` |
| `icon` | `string`  | The CSS class for the icon. | `fa fa-map-marker` |
| `iconLoading` | `string`  | The CSS class for the icon while loading. | `fa fa-spinner fa-spin` |
| `iconElementTag` | `string`  | The element to be created for icons. | `span` |
| `circlePadding` | `array`  | Padding around the accuracy circle. | `[0, 0]` |
| `createButtonCallback` | `function`  | This callback can be used in case you would like to override button creation behavior. | see code |
| `onLocationError` | `function`  | This even is called when the user's location is outside the bounds set on the map. | see code |
| `onLocationOutsideMapBounds` | `function`  | Use metric units. | see code |
| `showPopup` | `boolean`  | Display a pop-up when the user click on the inner marker. | `true` |
| `strings` | `object`  | Strings used in the control. Options are `title`, `metersUnit`, `feetUnit`, `popup`, and `outsideMapBoundsMsg` | see code |
| `locateOptions` | [`Locate options`](http://leafletjs.com/reference.html#map-locate-options)  | The default options passed to leaflets locate method. | see code |
| `onActivate` | `function` | Callback to add logic before the location engine starts working. |  |

Go to https://github.com/domoritz/leaflet-locatecontrol/

## Dependencies

* [React-Leaflet](https://github.com/PaulLeCam/react-leaflet)
* [Leaflet](https://github.com/Leaflet/Leaflet)