import 'ol/ol.css'

import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import OSM from 'ol/source/OSM.js'
import { fromLonLat } from 'ol/proj'

import districts from '../data/districts.json'

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
      }),
      new VectorLayer({
        source: new VectorSource({
          features:
            (new GeoJSON({
              featureProjection: 'EPSG:3857'
            }))
              .readFeatures(districts)
        })
      })
    ],
    target,
    controls: [],
    view: new View({
      center: fromLonLat(center),
      zoom: 10,
      minZoom: 10,
      maxZoom: 13
    })
  })
}
