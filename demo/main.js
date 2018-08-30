// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const vueAsync = process.env.NODE_ENV === 'development'
  ? require('../src/vue-async.js').default
  : require('../dist/vue-async.js')

Vue.config.productionTip = false

// Using plugin
Vue.use(vueAsync)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
