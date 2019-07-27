/**
 * Requirement for making a thing.
 * Like, you go [A, [A.X]] and A.X must exist
 * to make the thing with this requirement.
 * @typedef {[Object, number[]]} Requirment
 */

/**
 * Modifier for some game rule.
 * ARRAY of MODIFY_TYPE, MODIFIABLE value, and modify value.
 * Like, you go [MODIFY_TYPE.ADD, MODIFIABLE.THINK, 20] and
 * there's an absolute bonus of 20 to the Think value.
 * @typedef {[number, number, number]} Modifier
 */

/**
 * Property describing lots of make-able things there are.
 * @typedef {Object} Properties
 * @property {string} name print-name of thing
 * @property {number} cost cost in eat
 * @property {number} restriction from RESTRICTION enum, restricts how much a thing can be made
 * @property {Requirement[]} requirements requirements for making described thing
 * @property {Modifier[]} modifiers modifiers for thing in action
 */

/**
 * Property factory to save me retyping property names.
 * @param {[string, number, number, Requirement[], Modifier[]]} parameter
 * @returns {Properties} made Properties ¯\ツ/¯
 */
export const makeProperties = ([
  name, cost, restriction, availability, modifiers
]) => ({
  name, cost, restriction, availability, modifiers
})
