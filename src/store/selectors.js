export const getMap = state => state.map
export const getOlMap = state => state.olMap
export const getFaction = state => state.faction
export const getDistrict = state => state.district

export const getMaxZoom = state => getMap(state).maxZoom
export const getMinZoom = state => getMap(state).minZoom
