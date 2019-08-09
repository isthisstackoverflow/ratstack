import Store from 'repatch'
import newState from './newState'
import isDevMode from '../lib/isDevMode'
import diff from '../lib/diff'

// logger from repatch example is nice
const logger = store => next => reducer => {
  const state = store.getState()
  const nextState = reducer(state)
  const old = diff(state, nextState)
  const nuevo = diff(nextState, state)
  console.log('%c old -> new ', 'background: #222; color: #bada55')
  console.table(old)
  console.table(nuevo)
  return next(_ => nextState)
}

const store = new Store(newState())
if (isDevMode) {
  store.addMiddleware(logger)
}

export default store
