import 'leaflet.locatecontrol'

import L from 'leaflet'
import {MapControl} from 'react-leaflet'

import './locate.css'

// Converts leaflet.locatecontrol to a React Component
export default class LocateControl extends MapControl {
  createLeafletElement(props) {
    const {options, startDirectly} = props
    const {map} = this.context

    const lc = L
      .control
      .locate(options)
      .addTo(map)

    if (startDirectly)
      setTimeout(() => {
        lc.start()
      }, 1000)

    return lc
  }
}

import PropTypes from 'prop-types'

LocateControl.propTypes = {
  options: PropTypes.object, // Locate Options
  startDirectly: PropTypes.bool // Instantly start the locate control
}