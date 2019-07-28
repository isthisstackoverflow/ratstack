import accounting from './accounting'
import executeEvents from './executeEvents'
import executeInteraction from './executeInteraction'

export default async store => {
  for (let i = 0; i < store.gameState.factionData.length; i++) {
    await store.dispatch(accounting(i))
    await store.dispatch(executeEvents(i))
    await store.dispatch(executeInteraction(i))
  }
}
