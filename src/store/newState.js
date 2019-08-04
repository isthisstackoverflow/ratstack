import { DECLARATION } from './definitions'
import { districtParts as partNames } from '../data/districtRelations'
import generateFactionName from './generateFactionName'

const initFactionData = () => ({
  name: generateFactionName(),
  declaration: DECLARATION.PACK,
  think: [],
  eat: 1000
})

const initDistrictData = (name, faction) => ({
  name,
  faction,
  rats: 8,
  obedience: 0,
  buildings: []
})

export default () => {
  const faction = partNames.map(initFactionData)
  const district = partNames.map((partName, i) => {
    initDistrictData(partName, faction[i])
  })
  const map = {
    minZoom: 10,
    maxZoom: 28
  }

  return {
    faction,
    district,
    map
  }
}
