import executeTurn from './executeTurn'

export { executeTurn }
export const updateMinMaxZoom = (map, min, max) => state => {
  const view = map.getView()
  const currentZoom = view.getZoom()
  if (currentZoom < min) {
    view.animate({ zoom: min }) // TODO
  } else if (currentZoom > max) {

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
