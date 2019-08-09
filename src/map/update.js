import map from './index'
import { districtSource } from './districts'
import { animateDuration as duration } from '../lib/constants'

export const changeSomething = () => {
  console.log(districtSource)
  // side effect on source
}

/**
 * TODO test
 * Updates the ol map zoom boundaries and zooms
 * accordingly if map is now outside of it.
 * @param {number} min ol zoom level
 * @param {number} max ol zoom level
 * @returns {function} dispatchable
 */
export const updateMinMaxZoom = (min, max) => {
  const view = map.getView()
  const currentZoom = view.getZoom()
  const zoom = currentZoom < min
    ? min
    : currentZoom > max
      ? max
      : currentZoom
  // always zoom so that moveend triggers
  view.animate({ zoom, duration })
  view.setMinZoom(min)
  view.setMaxZoom(max)
}

window.updateMinMaxZoom = updateMinMaxZoom
