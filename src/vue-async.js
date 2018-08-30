/**
 * vue-async
 * (c) 2018 FlynnLee
 * @license MIT
 */
import { isNil, isPlainObject, forEach } from './util'

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

          // 手动触发resolve函数 如果是对象则赋值
          const resolver = data => {
            this[loadingName] = false
            if (isPlainObject(data)) {
              forEach(data, (v, k) => {
                this.$set(this, k, v)
              })
            }
          }
          // 代理到实例上的请求方法
          this[reqName] = () => {
            this[loadingName] = true
            const returnVal = reqFn.call(this, resolver)
            if (isNil(returnVal)) {
              return
            }
            // 返回了promise函数 即使不调用resolve 也使状态完成
            if (returnVal.then) {
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
  if (isPlainObject(autoLoadMethod)) {
    forEach(autoLoadMethod, (fnName, lifeCycle) => {
      Vue.mixin({
        [lifeCycle]() {
          this[fnName] && this[fnName]()
        }
      })
    })
  }
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueAsync)
}

export default vueAsync
