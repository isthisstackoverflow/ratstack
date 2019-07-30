import 'ol/ol.css'

import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM.js'
import { fromLonLat } from 'ol/proj'

/**
 * Clean map div and render map to it.
 * @param {[number, number]} center lon/lat
 * @param {string} target div id to render to
 * @return {ol/Map} ol map object
 */
export default (center, target) => {
  document.getElementById(target).innerHTML = ''
  return new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target,
    view: new View({
      center: fromLonLat(center),
      zoom: 10,
      minZoom: 10
    })
  })
}
