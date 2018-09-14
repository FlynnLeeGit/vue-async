/**
 * vue-async
 * (c) 2018 FlynnLee
 * @license MIT
 */
import { isNil, forEach } from './util'

const vueAsync = {
  name: 'vue-async'
}

/**
 * Plugin API
 */
vueAsync.install = function(Vue, { autoLoadMethod } = {}) {
  Vue.mixin({
    beforeCreate() {
      const async = this.$options.async

      if (async) {
        forEach(async, (reqFn, reqName) => {
          const loadingName = `${reqName}$loading`
          Vue.util.defineReactive(this, loadingName, false)

          // set Async task to `this`
          this[reqName] = (...args) => {
            const returnVal = reqFn.call(this, ...args)
            if (isNil(returnVal)) {
              return
            }
            // if return promise,so promise.then or catch will make status finished
            if (returnVal.then) {
              this[loadingName] = true
              return returnVal.then(
                res => {
                  this[loadingName] = false
                  return res
                },
                reason => {
                  this[loadingName] = false
                  throw reason
                }
              )
            }
          }
        })
      }
    }
  })
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueAsync)
}

export default vueAsync
