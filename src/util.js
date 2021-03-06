export const isNil = s => s === null || s === undefined
export const forEach = (obj, fn) => {
  for (let k in obj) {
    fn(obj[k], k)
  }
}
