export default factionIndex => state => async dispatch => {
  // depending on remaining resources:
  // (partially) finish building
  // (partially) finish thinking
  // (partially) finish declarations
  // update rat number (maybe eat something)
  // add new food

  // unrequired surplus rats reproduce harder

  // Obedience Check
  // Low: Block some rats, can't be used
  // Damn low: Execute rebellion
  //           - Fight (+Obedience -Rats / New faction)
  //           - Bribe (+Obedience -Eat) (if enough eat left)
  //           - Retreat (New faction + rats retrieve to neighbouring region) (if friendly neighbouring region)

  // display statistics (especially about ingoing attacks)
}
