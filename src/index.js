import 'ol/ol.css'

import './styles.scss'

import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM.js'

// TODO put this to some file and import map
var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map-hook',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
})

console.log('This is nice.')
