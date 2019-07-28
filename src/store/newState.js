import { DECLARATIONS } from './enums'
import { districtParts as partNames } from '../data/districtRelations'
import generateFactionName from './generateFactionName'

const initFactionData = () => ({
  name: generateFactionName(),
  declaration: DECLARATIONS.PACK,
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
  const factionData = partNames.map(initFactionData)
  const districtParts = partNames.map((partName, i) => {
    initDistrictData(partName, factionData[i])
  })

  return {
    factionData,
    districtParts
  }
}
