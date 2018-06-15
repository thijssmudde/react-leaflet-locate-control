import 'leaflet.locatecontrol'

import L from 'leaflet'
import {MapControl} from 'react-leaflet'

import './locate.css'

// Converts leaflet.locatecontrol to a React Component
export default class LocateControl extends MapControl {
  createLeafletElement(props) {
    const {options} = props
    const {map} = this.context

    this.lc = L.control.locate(options).addTo(map)
    return this.lc
  }

  start = () => {
    this.lc.start()
  }

  stop = () => {
    this.lc.stop()
  }
}

import PropTypes from 'prop-types'

LocateControl.propTypes = {
  options: PropTypes.object
}