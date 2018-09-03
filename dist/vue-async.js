/**
 * vue-async v0.2.2
 * (c) 2018 FlynnLee
 * @license MIT
 */
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.vueAsync=t()}(this,function(){"use strict";var n=function(n){return null===n||void 0===n},t=function(n,t){for(var e in n)t(n[e],e)},e=function(n){return"[object Object]"===Object.prototype.toString.call(n)},o={name:"vue-async"};return o.install=function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i.autoLoadMethod;o.mixin({beforeCreate:function(){var i=this,u=this.$options.async;u&&t(u,function(u,f){var r=f+"$loading";o.util.defineReactive(i,r,!1);var c=function(n){i[r]=!1,e(n)&&t(n,function(n,t){i.$set(i,t,n)})};i[f]=function(){i[r]=!0;var t=u.call(i,c);if(!n(t))return t.then?t.then(function(n){return i[r]=!1,n},function(n){throw i[r]=!1,n}):void 0}})}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),o});
