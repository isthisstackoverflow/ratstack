import Store from 'repatch'
import newState from './newState'

const logger = store => next => reducer => {
  const state = store.getState()
  const nextState = reducer(state)
  console.log(state, nextState)
  return next(_ => nextState)
}

// nesting game state in case I'll have data outside of it
const store =
  new Store(newState())
    .addMiddleware(logger)

export default store
