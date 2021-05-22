export const noop = () => {}

export const isEmpty = (value) => {
  if (value === null || value === undefined || String(value).trim() === '') {
    return true
  }
  if (typeof value === 'boolean') {
    return false
  }
  if (typeof value === 'object') {
    if (value instanceof Object) {
      return Object.keys(value).length === 0
    }
    if (value instanceof Array) {
      return value.length === 0
    }
  }
  return false
}
