// TODO put more strings here
const starts = [
  'Red', 'Orange', 'Blue', 'Black', 'White', 'Deadly'
]

const mids = [
  'Rodent', 'Rat', 'Critter', 'Creature', 'Vermin'
]

const ends = [
  'Killers', 'Team', 'Force', 'Sacks', 'Boys'
]

/**
 * @param {*[]} a array of something
 * @returns {*} random value from array
 */
const getRandom = a => a[Math.floor(Math.random() * a.length)]

/**
 * @returns {string} randomized faction name
 */
export default () => `${getRandom(starts)} ${getRandom(mids)} ${getRandom(ends)}`
