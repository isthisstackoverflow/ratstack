export const factionsSelector = state => state.factions
export const districtsSelector = state => state.districts
export const uiSelector = state => state.ui

export const optionsMenuOpenSelector = state => uiSelector(state).optionsMenuOpen
