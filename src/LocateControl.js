import 'leaflet.locatecontrol'

import L from 'leaflet'
import {MapControl} from 'react-leaflet'

import './locate.css'

// Converts leaflet.locatecontrol to a React Component
export default class LocateControl extends MapControl {
  createLeafletElement(props) {
    const {options, startDirectly} = props
    const {map} = this.context

    const lc = L.control.locate(options).addTo(map)

    if (startDirectly)
      lc.start()

    return lc
  }
}

import PropTypes from 'prop-types'

LocateControl.propTypes = {
  options: PropTypes.object, // Locate Options object see https://github.com/domoritz/leaflet-locatecontrol/
  startDirectly: PropTypes.bool // Instantly start the locate control
}