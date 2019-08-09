import { DECLARATION } from './definitions'
import generateFactionName from './generateFactionName'

import { districtParts as partNames } from '../data/districtRelations'

const initFactionData = id => ({
  id,
  name: generateFactionName(),
  declaration: DECLARATION.PACK,
  think: [],
  eat: 1000
})

const initDistrictData = (name, factionId) => ({
  name,
  factionId,
  rats: 8,
  obedience: 0,
  buildings: []
})

export default () => ({
  factions: partNames.map((_, idx) => initFactionData(idx)),
  districts: partNames.map((partName, i) => initDistrictData(partName, i)),
  ui: {
    optionsMenuOpen: false
  }
})
