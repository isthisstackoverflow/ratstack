import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON.js'

import districts from '../data/districts.json'

const districtSource = new VectorSource({
  features: (new GeoJSON({
    featureProjection: 'EPSG:3857'
  })).readFeatures(districts)
})

const districtVector = new VectorLayer({
  source: districtSource
})

export { districtSource, districtVector }
