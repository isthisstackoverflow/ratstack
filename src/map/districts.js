import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON.js'

import districts from '../data/districts.json'

const districtSource = new VectorSource({
  features: (new GeoJSON({
    featureProjection: 'EPSG:3857'
  })).readFeatures(districts)
})

// TODO - put a mid-source in here that groups district Sources
// => must be able to show a faction name across multiple districts

const districtVector = new VectorLayer({
  source: districtSource
})

export { districtSource, districtVector }
