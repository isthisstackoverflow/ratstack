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

const getMap = olMap => {
  const view = olMap.getView()
  return {
    minZoom: view.getMinZoom(),
    maxZoom: view.getMaxZoom()
  }
}

export default (olMap) => {
  const faction = partNames.map(initFactionData)
  const district = partNames.map((partName, i) => {
    initDistrictData(partName, faction[i])
  })
  const map = getMap(olMap)

  return {
    faction,
    district,
    map,
    olMap,
    ui: {
      optionsMenuOpen: false
    }
  }
}
