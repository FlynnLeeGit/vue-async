/**
 * vue-async v0.2.0
 * (c) 2018 FlynnLee
 * @license MIT
 */
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.vueAsync=t()}(this,function(){"use strict";var n=function(n){return null===n||void 0===n},t=function(n,t){for(var e in n)t(n[e],e)},e=function(n){return"[object Object]"===Object.prototype.toString.call(n)},o=(function(){function n(n){this.value=n}function t(t){function e(n,t){return new Promise(function(e,r){var c={key:n,arg:t,resolve:e,reject:r,next:null};u?u=u.next=c:(i=u=c,o(n,t))})}function o(e,i){try{var u=t[e](i),c=u.value;c instanceof n?Promise.resolve(c.value).then(function(n){o("next",n)},function(n){o("throw",n)}):r(u.done?"return":"normal",u.value)}catch(n){r("throw",n)}}function r(n,t){switch(n){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}i=i.next,i?o(i.key,i.arg):u=null}var i,u;this._invoke=e,"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(n){return this._invoke("next",n)},t.prototype.throw=function(n){return this._invoke("throw",n)},t.prototype.return=function(n){return this._invoke("return",n)}}(),function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}),r={name:"vue-async"};return r.install=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.autoLoadMethod;r.mixin({beforeCreate:function(){var o=this,i=this.$options.async;i&&t(i,function(i,u){var c=u+"$loading";r.util.defineReactive(o,c,!1);var f=function(n){o[c]=!1,e(n)&&t(n,function(n,t){o.$set(o,t,n)})};o[u]=function(){o[c]=!0;var t=i.call(o,f);if(!n(t))return t.then?t.then(function(n){return o[c]=!1,n},function(n){throw o[c]=!1,n}):void 0}})}}),e(u)&&t(u,function(n,t){r.mixin(o({},t,function(){this[n]&&this[n]()}))})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),r});