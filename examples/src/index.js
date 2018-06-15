import React from 'react'
import {render} from 'react-dom'
import {Map, TileLayer} from 'react-leaflet'

import LocateControl from '../../src/LocateControl'

import './leaflet/leaflet.js'
import './leaflet/leaflet.css'

const locateOptions = {
  strings: {
    title: 'Center My Location'
  },
  locateOptions: {
    enableHighAccuracy: true
  },
  returnToPrevBounds: true,
  showPopup: false,
  drawCircle: true,
  setView: 'once',
  cacheLocation: true,
  keepCurrentZoomLevel: true,
  maxZoom: 18,
  minZoom: 2
}

const App = () => (
  <Map style={{
    height: '100vh'
  }} zoom={13} center={[51.505, -0.09]}>

    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

    <LocateControl options={locateOptions}/>
  </Map>
)

render(
  <App/>, document.getElementById('root'))