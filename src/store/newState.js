import { DECLARATIONS } from './enums'
import { districtParts } from '../data/districtRelations'
import generateFactionName from './generateFactionName'

const initFactionData = name => ({
  name: generateFactionName(),
  declaration: DECLARATIONS.PACK,
  eat: 1000,
  districts: [name]
})

const initDistrictData = name => ({
  name,
  rats: 8,
  obedience: 0
})

const getNewGameState = () => {
  const gameState = {}

  gameState.districtParts = districtParts.map(initDistrictData)
  gameState.factionData = districtParts.map(initFactionData)

  return gameState
}

export default getNewGameState
