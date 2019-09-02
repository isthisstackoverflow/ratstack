import isEqual from 'lodash.isequal'
import isObject from 'lodash.isobject'
import transform from 'lodash.transform'

/**
 * thx to https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base Object to compare with
 * @return {Object} Return a new object who represent the diff
 */
export default function difference (object, base) {
  function changes (object, base) {
    return transform(object, function (result, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] =
          (isObject(value) && isObject(base[key]))
            ? changes(value, base[key])
            : value
      }
    })
  }
  return changes(object, base)
}
