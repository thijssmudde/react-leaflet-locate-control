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
  }
}

// Inside your <Map> component add LocateControl
<Map>
  <LocateControl options={locateOptions} startDirectly/>
</Map>
```

startDirectly : Instantly start the locate control

## Options

Go to https://github.com/domoritz/leaflet-locatecontrol/

## Dependencies

* [React-Leaflet](https://github.com/PaulLeCam/react-leaflet)
* [Leaflet](https://github.com/Leaflet/Leaflet)