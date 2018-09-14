/**
 * vue-async v0.3.0
 * (c) 2018 FlynnLee
 * @license MIT
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.vueAsync=e()}(this,function(){"use strict";var n=function(n){return null===n||void 0===n},e=function(n,e){for(var t in n)e(n[t],t)},t={name:"vue-async"};return t.install=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o.autoLoadMethod;t.mixin({beforeCreate:function(){var o=this,i=this.$options.async;i&&e(i,function(e,i){var u=i+"$loading";t.util.defineReactive(o,u,!1),o[i]=function(){for(var t=arguments.length,i=Array(t),f=0;f<t;f++)i[f]=arguments[f];var r=e.call.apply(e,[o].concat(i));if(!n(r))return r.then?(o[u]=!0,r.then(function(n){return o[u]=!1,n},function(n){throw o[u]=!1,n})):void 0}})}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(t),t});
