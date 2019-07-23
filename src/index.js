import 'ol/ol.css'

import './styles.scss'

import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM.js'

// this file should only combine the various parts of the system, nothing else

// TODO put this to some file and import map
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'boss',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
})

console.log('This is nice.', map)
