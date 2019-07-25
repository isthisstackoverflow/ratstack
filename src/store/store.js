import Store from 'repatch'

// nesting game state in case I'll have data outside of it
const store = new Store({
  gameState: null
})

export default store
