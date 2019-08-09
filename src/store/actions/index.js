import executeTurn from './executeTurn'

export { executeTurn }

export const toggleOptionsMenuOpen = () => state => ({
  ...state,
  ui: {
    ...state.ui,
    optionsMenuOpen: !state.ui.optionsMenuOpen
  }
})
