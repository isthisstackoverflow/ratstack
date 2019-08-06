import Store from 'repatch'
import newState from './newState'
import isDevMode from '../lib/isDevMode'

// logger from repatch example is nice
const logger = store => next => reducer => {
  const state = store.getState()
  const nextState = reducer(state)
  console.log(state, nextState)
  return next(_ => nextState)
}

/**
 * Creates a new game instance store.
 * Please mind that I'm a hack, so there's actually
 * an .olMap entry in the state that goes against
 * the rules of immutable store management. It's just
 * easier to get and modify the ol map with side-effects.
 * Pssssht, don't tell mom.
 * @param {ol/map} olMap OpenLayers Map
 * @returns {Store}
 */
const store = olMap => {
  const s = new Store(newState(olMap))
  if (isDevMode) {
    s.addMiddleware(logger)
  }
  return s
}

export default store
