import executeTurn from './executeTurn'
import { animateDuration as duration } from '../../lib/constants'

export { executeTurn }

/**
 * Updates the ol map zoom boundaries and zooms
 * accordingly if map is now outside of it.
 * @param {number} min ol zoom level
 * @param {number} max ol zoom level
 * @returns {function} dispatchable
 */
export const updateMinMaxZoom = (min, max) => state => {
  const view = state.olMap.getView()
  const currentZoom = view.getZoom()
  if (currentZoom < min) {
    view.animate({ zoom: min, duration })
  } else if (currentZoom > max) {
    view.animate({ zoom: max, duration })
  }
  view.setMinZoom(min)
  view.setMaxZoom(max)
  return ({
    ...state,
    map: {
      ...state.map,
      minZoom: min,
      maxZoom: max
    }
  })
}
