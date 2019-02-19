/**
 * vue-async v0.4.0
 * (c) 2019 FlynnLee
 * @license MIT
 */
!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):n.vueAsync=i()}(this,function(){"use strict";var n=function(n){return null===n||void 0===n},i=function(n,i){for(var e in n)i(n[e],e)},e={name:"vue-async"};return e.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.rx,r=void 0===o?{}:o;e.mixin({beforeCreate:function(){var t=this,o=this.$options.async;o&&i(o,function(i,o){var u=o+"$loading";e.util.defineReactive(t,u,!1),t[o]=function(){for(var e=arguments.length,o=Array(e),f=0;f<e;f++)o[f]=arguments[f];var a=i.call.apply(i,[t].concat(o));if(!n(a)){if(a.then)return t[u]=!0,a.then(function(n){return t[u]=!1,n},function(n){throw t[u]=!1,n});if(a.pipe){if(!r.tap||!r.finalize)throw new Error("[vue-async] you are using rxjs method should pass rx:{tap,finalize} in plugin options");var c=r.tap,d=r.finalize;return t[u]=!0,a.pipe(c(function(n){t[u]=!1}),d(function(n){t[u]=!1}))}}}})}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(e),e});
